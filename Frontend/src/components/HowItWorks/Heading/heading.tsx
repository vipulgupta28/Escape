import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaMoneyBillWave, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Heading: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center gap-10 px-6 text-white overflow-hidden">
      {/* Foreground Animated Text */}
      <motion.div
        className="text-4xl md:text-6xl lg:text-8xl mt-10 font-bold selection:bg-white selection:text-black relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, damping: 5, ease: [0, 0.71, 0.2, 1.01] }}
      >
        Rent. Host. Earn.
      </motion.div>

      {/* Description */}
      <p className="font-medium max-w-xl md:max-w-2xl text-sm md:text-base selection:bg-white selection:text-black relative z-10">
        Escape is a Peer-to-Peer (P2P) marketplace business model for renting out vehicles. Car owners can list their vehicles, and users can book them for temporary use.
      </p>

      {/* Business Model Explanation */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center relative z-10 selection:bg-black selection:text-white">
        {[  
          { icon: <FaCar />, title: "List Your Vehicle", text: "Car owners can register their vehicles and set availability & pricing." },
          { icon: <FaUsers />, title: "Rent with Ease", text: "Users browse & book vehicles for short-term or long-term rentals." },
          { icon: <FaMoneyBillWave />, title: "Earn Money", text: "Car owners earn passive income while renters enjoy affordable rides." }
        ].map((item, index) => (
          <div key={index} className="bg-white h-72 md:h-80 w-full md:w-72 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 transition duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:cursor-pointer">
            <div className="text-5xl md:text-6xl text-black mb-4">{item.icon}</div>
            <h3 className="text-black font-bold text-lg md:text-xl">{item.title}</h3>
            <p className="text-black font-medium text-sm text-center mt-2">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-black text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-gray-300 transition selection:bg-black selection:text-white"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Heading;