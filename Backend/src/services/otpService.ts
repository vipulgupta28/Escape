import { transporter } from "../utils/nodemailerClient";
import { twilioClient } from "../utils/twilioClient";
import { config } from "../config";

const otpStorage: Record<string, number> = {};

export const sendOTPtoEmail = async (userEmail: string, otp: number) => {
  const mailOptions = {
    from: config.email.user,
    to: userEmail,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendOTPtoPhone = async (phoneNumber: string, otp: number) => {
  await twilioClient.messages.create({
    body: `Your OTP code is ${otp}`,
    from: config.twilio.phoneNumber,
    to: phoneNumber,
  });
};

export const storeOTP = (key: string, otp: number) => {
  otpStorage[key] = otp;
};

export const verifyOTP = (key: string, otp: number) => {
  return otpStorage[key] === otp;
};

export const deleteOTP = (key: string) => {
  delete otpStorage[key];
};
