import React, { useState, useEffect } from "react";
import { Lock, Car, IndianRupee, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BecomeHost: React.FC = () => {
  const images = [
    "https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/hand-holding-car-keys_1212-832.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/businessman-with-money_3446-627.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/father-shaking-hands-with-insurance-agent_74855-4412.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid"
  ];

  const buttons = [
    { icon: <Lock />, text: "Signin" },
    { icon: <Car />, text: "Host Your Car" },
    { icon: <IndianRupee />, text: "Earn Income" },
    { icon: <Shield />, text: "Get Insurance" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen gap-30">
      {/* Image Slideshow with Animation */}
      <div className="w-[400px] h-[350px] overflow-hidden rounded-xl relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Slideshow"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, y: 400 }} // Enter smoothly from bottom
            animate={{ opacity: 1, y: 0 }} // Set to normal position
            exit={{ opacity: 0, y: -400 }} // Exit smoothly to top
            transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth easing
          />
        </AnimatePresence>
      </div>

      {/* Text Section */}
      <div className="flex flex-col gap-5 text-left w-[400px]">
        <h2 className="font-bold text-6xl">Become a Host </h2>
        <p>Rent your car on CarO and earn rental income</p>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`flex flex-row gap-5 w-80 py-2 rounded-[6px] transition duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:cursor-pointer text-left pl-3 
                ${currentImageIndex === index ? "shadow-[0_0_20px_rgba(255,255,255,0.7)]" : "border-white"} border-1`}
            >
              {button.icon}
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomeHost;
