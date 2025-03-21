import twilio from "twilio";
import { config } from "../config";

export const twilioClient = twilio(config.twilio.accountSid, config.twilio.authToken);
