import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import {
   FaUserCheck, FaClock, FaShieldAlt,
  FaMapMarkerAlt, FaCreditCard, FaGasPump, FaTools
} from "react-icons/fa";

const faqs = [
  { question: "What are the requirements to rent a vehicle?", answer: "You need a valid driving license, a government-issued ID, and a credit or debit card for payment.", icon: <FaUserCheck /> },
  { question: "How long can I rent a vehicle?", answer: "You can rent a vehicle for a few hours to several weeks, depending on your preference.", icon: <FaClock /> },
  { question: "Is insurance included in the rental price?", answer: "Yes, basic insurance is included, but you can opt for additional coverage.", icon: <FaShieldAlt /> },
  { question: "Can I pick up and drop off the vehicle at different locations?", answer: "Yes, we offer flexible pick-up and drop-off locations based on availability.", icon: <FaMapMarkerAlt /> },
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, UPI, and digital wallets.", icon: <FaCreditCard /> },
  { question: "Do I need to return the vehicle with a full tank?", answer: "Yes, vehicles should be returned with the same fuel level as when rented to avoid extra charges.", icon: <FaGasPump /> },
  { question: "What if the vehicle breaks down during my trip?", answer: "We provide 24/7 roadside assistance to help you with any issues.", icon: <FaTools /> }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-white min-h-screen flex justify-center p-6 md:p-12">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08) 1px,transparent 1px)] bg-[size:40px_40px]"></div>

      {/* FAQ Content */}
      <div className="w-full max-w-3xl bg-white rounded-xl p-6 md:p-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-3 bg-black text-white rounded-full flex items-center justify-center">✦</div>
          <h1 className="text-3xl font-bold text-gray-900 selection:bg-black selection:text-white">Vehicle Rental FAQs</h1>
          <p className="text-gray-500 mt-2 selection:bg-black selection:text-white">
            Got questions? We have answers! Can't find what you're looking for? <br />
            <a href="mailto:support@ryde.com" className="text-blue-500 underline">Email us</a> or call <span className="font-medium">+91 8307872368</span>.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-6 space-y-4 selection:bg-black selection:text-white">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-white hover:shadow-md transition-all duration-300"
            >
              {/* Question Row */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-lg selection:bg-black selection:text-white">{faq.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                </div>
                <span
                  className={`text-gray-600 transform transition-all duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* Answer Section with Smooth Height Animation */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-gray-600 ml-8">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;