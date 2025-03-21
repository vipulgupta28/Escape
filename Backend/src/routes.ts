import express from "express";
import { getOTP, verifyOTPController } from "./controllers/otpController";

const router = express.Router();

//@ts-ignore
router.post("/get-otp", getOTP);
//@ts-ignore
router.post("/verify-otp", verifyOTPController);

export default router;
