import { Request, Response } from "express";
import { sendOTPtoEmail, sendOTPtoPhone, storeOTP, verifyOTP, deleteOTP } from "../services/otpService";
import { supabase } from "../utils/supabaseClient";

export const getOTP = async (req: Request, res: Response) => {
  const { email, phone } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000);

  if (email) {
    storeOTP(email, otp);
    await sendOTPtoEmail(email, otp);
    return res.status(200).json({ message: "OTP sent to your email" });
  }

  if (phone) {
    storeOTP(phone, otp);
    await sendOTPtoPhone(phone, otp);
    return res.status(200).json({ message: "OTP sent to your phone" });
  }
};

export const verifyOTPController = async (req: Request, res: Response) => {
  const { email, phone, otp } = req.body;
  const key = email || phone;
  
  if (!key || !verifyOTP(key, otp)) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  deleteOTP(key);

  if (email) {
    const { data: existingUser } = await supabase.from("users").select("email").eq("email", email).single();

    if (!existingUser) {
      await supabase.from("users").insert([{ email }]);
    }
  }

  return res.status(200).json({ message: "OTP verified successfully" });
};
