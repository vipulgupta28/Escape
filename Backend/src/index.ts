import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import twilio from "twilio";
import helmet from "helmet";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(helmet());

const limiter = rateLimit({windowMs: 15 * 60 * 1000});
app.use(limiter);
app.use(bodyParser.json());


const accountSid = process.env.TWILIO_ACCOUNT_SID!; 
const authToken =process.env.TWILIO_AUTH_TOKEN!; 
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = "+1 642 965";  // We have to buy a twilio number to send OTP to mobile Numbers

const otpStorage: Record<string, number> = {};

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.GMAIL_USER!,
        pass:process.env.GMAIL_PASS!,
    }
});

const sendOTPtoEmail = async (userEmail:string, otp:number) => {
    console.log(`Attempting to send OTP to: ${userEmail}`);
    const mailOptions = {
        from: process.env.GMAIL_USER!,
        to:userEmail,
        subject:"Your OTP Code",
        text:`Your OTP code is ${otp}`
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response); 
      } catch (error) {
        console.error("Error sending OTP email:", error);
      }
}

const sendOTPtoPhone = async (phoneNumber: string, otp: number) => {
    console.log(`Attempting to send OTP to phone: ${phoneNumber}`);
  
    try {
      const message = await twilioClient.messages.create({
        body: `Your OTP code is ${otp}`,
        from: twilioPhoneNumber, 
        to: phoneNumber,
      });
  
      console.log("SMS sent:", message.sid);
    } catch (error) {
      console.error("Error sending OTP SMS:", error);
    }
  };


  const convertAddressToCoordinates = async (address:string) =>{

    const apiKey =  process.env.OPEN_CAGE_API_KEY!;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data:any = await response.json();

      if (data.results.length > 0) {
        const location = data.results[0].geometry;
        return { latitude: location.lat, longitude: location.lng };
      } else {
        console.error("No results found.");
        return { latitude: null, longitude: null };
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return { latitude: null, longitude: null };
    }
  };

  
const searchVehiclesWithin12kmRadius = (
  dropoffLat: number,
  dropoffLng: number,
  hostLat: number,
  hostLng: number
) => {
  const toRadians = (degree: number) => (degree * Math.PI) / 180; 

  const R = 6371; 
  const dLat = toRadians(hostLat - dropoffLat);
  const dLng = toRadians(hostLng - dropoffLng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(dropoffLat)) * Math.cos(toRadians(hostLat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; 

  return distance <= 12; 
};

 
app.post("/get-otp", async (req,res)=>{
    const {email} = req.body;
    const {phone} = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);

    if(email){
      otpStorage[email] = otp;
        await sendOTPtoEmail(email, otp);
        res.status(200).json({message:"OTP sent to your email"})
    }

    if (phone) {
        await sendOTPtoPhone(phone, otp);
        res.status(200).json({message:"OTP sent to your Number"})
      }
})

//@ts-ignore
app.post("/verify-otp", async (req, res) => {
  console.log("Received OTP verification request: ", req.body);
  const { email, phone, otp } = req.body;
  const storedOtp = email ? otpStorage[email] : phone ? otpStorage[phone] : undefined;

  if (storedOtp && storedOtp === Number(otp)) {
      if (email) delete otpStorage[email];
      if (phone) delete otpStorage[phone];

      if (email) {
          const { data: existingUser, error: fetchError } = await supabase
              .from("users")
              .select("email")
              .eq("email", email)
              .single();

          if (fetchError && fetchError.code !== "PGRST116") {
              console.error("Error checking existing email:", fetchError);
              return res.status(500).json({ message: "Database error while checking email" });
          }

          if (!existingUser) {
              const { data, error } = await supabase
                  .from("users")
                  .insert([{ email }]);

              if (error) {
                  console.error("Error inserting email into database:", error);
                  return res.status(500).json({ message: "Error storing email in DB" });
              }
          }
      }

      return res.status(200).json({ message: "OTP verified successfully" });
  }

  return res.status(400).json({ message: "Invalid OTP" });
}),


//@ts-ignore
app.post("/insert-into-hosts-table", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, address } = req.body;

    const coordinates = await convertAddressToCoordinates(address);
    if (!coordinates) {
      return res.status(400).json({ success: false, error: "Invalid address" });
    }

    const { latitude, longitude } = coordinates;
    const { data, error } = await supabase
      .from("hosts")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email_address: email,
          phone_number: phoneNumber,
          address,
          latitude,
          longitude,
        },
      ]);

    if (error) {
      console.error(error.message);
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}),

//@ts-ignore
app.post("/search-vehicles", async (req, res) => {
  try {
    const { dropoffaddress } = req.body;
    const dropoffCoordinates = await convertAddressToCoordinates(dropoffaddress);
    if (!dropoffCoordinates) {
      return res.status(400).json({ error: "Invalid drop-off address" });
    }

    const { latitude: dropoffLat, longitude: dropoffLng } = dropoffCoordinates;
    const { data: hosts, error: hostsError } = await supabase
      .from("hosts")
      .select("id, latitude, longitude");

    if (hostsError) {
      console.error("Error fetching hosts:", hostsError);
      return res.status(500).json({ error: "Error fetching hosts" });
    }

    if (!hosts || hosts.length === 0) {
      return res.json({ availableVehicles: [] }); 
    }

    const nearbyHosts = hosts.filter(host =>
      searchVehiclesWithin12kmRadius(dropoffLat, dropoffLng, host.latitude, host.longitude)
    );

    if (nearbyHosts.length === 0) {
      return res.json({ availableVehicles: [] });
    }

    const nearbyHostIds = nearbyHosts.map(host => host.id);

    const fetchVehicles = async (tableName: string) => {
      const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .in("host_id", nearbyHostIds);

      if (error) {
        console.error(`Error fetching ${tableName}:`, error);
        return [];
      }

      return data;
    };

    const [cars, bikes, scooters] = await Promise.all([
      fetchVehicles("available_cars"),
      fetchVehicles("available_bikes"),
      fetchVehicles("available_scooters"),
    ]);

    const availableVehicles = {
      cars,
      bikes,
      scooters,
    };

    res.json({ availableVehicles });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}),


//@ts-ignore
app.post("/available-cars", async (req, res) => {
  try {
    const { category, company, model, buyingYear, vehicleNumber, availability } = req.body;

    const { data, error } = await supabase.from("available_cars").insert([
      {
        category: category,
        company: company,
        model: model,
        buyyear: buyingYear,
        plateNumber: vehicleNumber, 
        fromdate: availability.from, 
        todate: availability.to,
      },
    ]);

    if (error) {
      console.log("Supabase Error:", error.message);
      return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "Vehicle added successfully!", data });
  } catch (err) {
    //@ts-ignore
    console.error("Server Error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}),

//@ts-ignore
app.post("/available-bikes", async (req, res) => {
  try {
    const { category, company, model, buyingYear, vehicleNumber, availability } = req.body;
    console.log(req.body);

    const { data, error } = await supabase.from("available_bikes").insert([
      {
        category,
        company,
        model,
        buyyear: buyingYear,
        plateNumber: vehicleNumber,
        fromdate: availability.from,
        todate: availability.to,
      },
    ]);

    if (error) {

console.log("Supabase Response:", data);
      console.log("Supabase Error:", error.message);
      return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "Bike added successfully!", data });
  } catch (err) {
    //@ts-ignore
    console.error("Server Error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}),

//@ts-ignore
app.post("/available-scooters", async (req, res) => {
  try {
    const { category, company, model, buyingYear, vehicleNumber, availability } = req.body;

    const { data, error } = await supabase.from("available_scooters").insert([
      {
        category,
        company,
        model,
        buyyear: buyingYear,
        plateNumber: vehicleNumber,
        fromdate: availability.from,
        todate: availability.to,
      },
    ]);

    if (error) {
      console.log("Supabase Error:", error.message);
      return res.status(500).json({ message: error.message });
    }

    res.status(201).json({ message: "Scooter added successfully!", data });
  } catch (err) {
    //@ts-ignore
    console.error("Server Error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}),

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });