import React from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const TopBanner: React.FC = () => {
  return (
    <div className="relative bg-white min-h-[250px] flex flex-col justify-center pt-20 items-center text-center px-6 md:px-10 lg:px-20">
      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        {/* Text Section */}
        <div className="text-left flex flex-col gap-4 lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <p className="text-purple-600 text-lg font-semibold selection:text-white selection:bg-black">
              The FAQs
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 selection:bg-black selection:text-white">
              Help Centre
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          >
            <p className="text-gray-500 selection:bg-black selection:text-white">
              Everything you need to know about ESCAPE.
            </p>
          </motion.div>
        </div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full max-w-lg h-10 px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black selection:bg-black selection:text-white"
            />
            
            <textarea
              placeholder="Ask your question. We will send the reply to your mail..."
              className="w-full max-w-lg h-24 px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black selection:bg-black selection:text-white"
            />
            
            <button className="bg-black px-4 py-2 flex items-center gap-3 text-white hover:bg-gray-800 hover:cursor-pointer animation duration-400 rounded-md selection:bg-white selection:text-black">
              Send <Send />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TopBanner;