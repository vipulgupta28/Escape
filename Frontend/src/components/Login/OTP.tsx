import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const OTP: React.FC = () => {
  const inputRef = useRef<Array<HTMLInputElement | null>>([]);
  const [timer, setTimer] = useState(60); // 60 seconds timer

  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^\d$/.test(value)) {
      if (index < inputRef.current.length - 1) {
        inputRef.current[index + 1]?.focus();
      }
    } else {
      event.target.value = "";
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && index > 0 && !event.currentTarget.value) {
      inputRef.current[index - 1]?.focus();
    }
  };

  // Timer for resend code
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(60); // Reset timer to 60 seconds
    // Add logic to resend OTP here (e.g., API call)
    console.log("Resending OTP...");
  };

  const indexes = [0, 1, 2, 3]; // 4-digit OTP

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6"
    >
     

      {/* OTP Instructions */}
      <motion.p
        variants={itemVariants}
        className="text-lg mb-4 text-gray-600 selection:bg-black selection:text-white"
      >
        Enter the 4-digit code sent via SMS at 083078 72368.
      </motion.p>

     

      {/* OTP Input Fields */}
      <motion.div
        variants={itemVariants}
        className="flex gap-4 mb-6"
      >
        {indexes.map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRef.current[index] = el)}
            type="text"
            maxLength={1}
            className="h-12 w-12 text-center text-xl font-bold bg-white text-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </motion.div>

      {/* Resend Code Option */}
      <motion.p
        variants={itemVariants}
        className="text-sm text-gray-500 mb-4"
      >
        Resend code by SMS ({timer > 0 ? `0:${timer}` : "Ready"})
        {timer === 0 && (
          <button
            onClick={handleResend}
            className="ml-2 text-blue-600 hover:text-black underline"
          >
            Resend
          </button>
        )}
      </motion.p>

      

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={()=>navigate('/login')}
          className="px-4 py-2  text-white font-medium hover:cursor-pointer rounded-full flex bg-black hover:bg-gray-800 transition-colors duration-300"
        >
          <ArrowLeft />Back
        </motion.button>
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-lg font-semibold bg-black text-white rounded-full hover:bg-gray-800 hover:cursor-pointer transition-colors duration-300"
        >
          Verify
        </motion.button>
      </div>

      {/* Verify OTP Button (Optional, added below navigation for clarity) */}
      
    </motion.div>
  );
};

export default OTP;