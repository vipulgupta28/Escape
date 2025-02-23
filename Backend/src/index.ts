import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import twilio from "twilio";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


const accountSid = "AC316b27206dfd75c1e7a3114a09495a9e"; 
const authToken = "d0231e84326d78c97b361b172f9b1537"; 
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = "+1 642 965";  // We have to buy a twilio number to send OTP to mobile Numbers


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"vilulgupta2802@gmail.com",
        pass:"zkop uhen xdkd rdcw",
    }
});

const sendOTPtoEmail = async (userEmail:string, otp:number) => {
    console.log(`Attempting to send OTP to: ${userEmail}`);
    const mailOptions = {
        from:"vilulgupta2802@gmail.com",
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

app.post("/get-otp", async (req,res)=>{
    const {email} = req.body;
    const {phone} = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);

    if(email){
        await sendOTPtoEmail(email, otp);
        res.status(200).json({message:"OTP sent to your email"})
    }

    if (phone) {
        await sendOTPtoPhone(phone, otp);
        res.status(200).json({message:"OTP sent to your Number"})
      }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });