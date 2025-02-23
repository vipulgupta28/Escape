import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, appleProvider } from "../../api/firebaseConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const isEmail = (input: string) => /\S+@\S+\.\S+/.test(input); 

  const handleContinue = async () => {
    if (!input) {
      alert("Please enter an email or phone number");
      return;
    }

    try {
      const data = isEmail(input) 
        ? { email: input } 
        : { phone: input };

      const response = await axios.post("http://localhost:3000/get-otp", data);
      alert(response.data.message);
      navigate("/otp");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google User:", result.user);
    } catch (error) {
      console.error("Google Login Failed:", error);
    }
  };

  const handleAppleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      console.log("Apple User:", result.user);
    } catch (error) {
      console.error("Apple Login Failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-6 rounded-xl w-96 border">
        <h1 className="text-black font-bold text-2xl mb-6 text-center">
          Continue with Email or Phone Number
        </h1>

        <input
          type="text"
          placeholder="Enter email or phone number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border w-full border-gray-400 rounded-md px-4 py-2 text-black mb-4 focus:outline-none focus:ring-2 focus:ring-black"
        />

        <div id="validationBox" className="text-red"></div>

        <button
          className="bg-black text-white py-2 w-full rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer"
          onClick={handleContinue}
        >
          Continue
        </button>

        <div className="text-center text-sm text-gray-500 my-4">or</div>

        <div className="flex flex-col gap-5">
          <button
            className="border border-gray-400 rounded-md py-2 w-full text-black hover:bg-gray-100 transition duration-300 cursor-pointer"
            onClick={handleGoogleLogin}
          >
            Continue with Google
          </button>

          <button
            className="border border-gray-400 rounded-md py-2 w-full text-black hover:bg-gray-100 transition duration-300 cursor-pointer"
            onClick={handleAppleLogin}
          >
            Continue with Apple
          </button>
        </div>

        <p className="text-xs text-gray-600 mt-4 text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
