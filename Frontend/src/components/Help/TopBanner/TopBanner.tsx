import React from "react";
import { Send } from "lucide-react";
import {motion} from "framer-motion"

const TopBanner: React.FC = () => {
  return (
    <div className="relative bg-white min-h-[250px] flex flex-col justify-center items-center text-center px-6 lg:px-0">
    
      {/* Content */}
      <div className="flex flex-row gap-50">

        <div className="mt-30 text-left flex flex-col gap-10">

        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           damping: 5,
           ease: [0, 0.71, 0.2, 1.01],
         }}
         >
            
        <p className="text-purple-600 text-lg font-semibold mb-2 selection:text-white selection:bg-black">The FAQs</p>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           damping: 5,
           ease: [0, 0.71, 0.2, 1.01],
         }}
         >
        <h1 className="text-6xl font-bold text-gray-900 selection:bg-black selection:text-white">Help Centre</h1>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           damping: 5,
           ease: [0, 0.71, 0.2, 1.01],
         }}
        >
        <p className="text-gray-500 mt-2 selection:bg-black selection:text-white">
          Everything you need to know about ESCAPE.
        </p>
        </motion.div>
        </div>

        
        <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
           duration: 0.8,
           damping: 5,
           ease: [0, 0.71, 0.2, 1.01],
         }}
         >

    <div className="mt-20 flex flex-col items-center gap-3">
    <input
    type="text"
    placeholder="Enter your email"
    className="w-130 h-10 px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black  selection:bg-black selection:text-white"
    />
    <input
    type="text"
    placeholder="Ask your question. We will send the reply in your mail..."
    className="w-130 h-50 px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black  selection:bg-black selection:text-white"
    />
    <button className="self-start bg-black px-3 py-2 flex flex-row gap-3 text-white hover:bg-gray-800 rounded-[6px] hover:cursor-pointer selection:bg-white selection:text-black">
    Send <Send/>
    </button>
    </div>
    </motion.div>

      </div>
    </div>
  );
};

export default TopBanner;
