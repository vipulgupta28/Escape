import React from "react";
import { motion } from "framer-motion"; // ✅ Correct Import
import { FaCar, FaMoneyBillWave, FaUsers } from "react-icons/fa";

const Heading: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center gap-10 px-6 text-white  overflow-hidden">
      {/* Background Text */}
      
      {/* Foreground Animated Text */}
      <motion.div
        className="text-8xl mt-20 font-bold selection:bg-white selection:text-black relative z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          damping: 5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Rent. Host. Earn.
      </motion.div>

      {/* Description */}
      <p className="font-medium max-w-2xl selection:bg-white selection:text-black relative z-10">
        Escape is a Peer-to-Peer (P2P) marketplace business model for renting
        out vehicles to renters. Car owners can list their vehicles on Escape,
        and users can book them for temporary use.
      </p>

      {/* Business Model Explanation */}
      <div className="flex flex-col md:flex-row gap-10 justify-center relative z-10 selection:bg-black selection:text-white">
        {/* Card 1: Car Owners */}
        <div className="bg-white h-80 w-72 rounded-[30px] shadow-lg flex flex-col items-center justify-center p-6 animation duration-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:cursor-pointer">
          <FaCar className="text-6xl text-black mb-4" />
          <h3 className="text-black font-bold text-xl">List Your Vehicle</h3>
          <p className="text-black font-medium text-sm text-center mt-2">
            Car owners can register their vehicles and set availability & pricing.
          </p>
        </div>

        {/* Card 2: Renting Process */}
        <div className="bg-white h-80 w-72 rounded-[30px] shadow-lg flex flex-col items-center justify-center p-6 animation duration-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:cursor-pointer">
          <FaUsers className="text-6xl text-black mb-4" />
          <h3 className="text-black font-bold text-xl">Rent with Ease</h3>
          <p className="text-black font-medium  text-sm text-center mt-2">
            Users browse & book vehicles for short-term or long-term rentals.
          </p>
        </div>

        {/* Card 3: Earnings */}
        <div className="bg-white h-80 w-72 rounded-[30px] shadow-lg flex flex-col items-center justify-center p-6 animation duration-400 hover:shadow-[0_0_20px_rgba(255,255,255,0.9)] hover:cursor-pointer">
          <FaMoneyBillWave className="text-6xl text-black mb-4" />
          <h3 className="text-black font-bold text-xl">Earn Money</h3>
          <p className="text-black font-medium  text-sm text-center mt-2">
            Car owners earn passive income while renters enjoy affordable rides.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300 transition selection:bg-black selection:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Heading;