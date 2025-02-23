import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import {
  FaSmile, FaExchangeAlt, FaFileInvoice, FaQuestionCircle,
  FaEnvelope, FaCreditCard, FaUserFriends, FaBookOpen
} from "react-icons/fa";

const faqs = [
  { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.", icon: <FaSmile /> },
  { question: "Can I change my plan later?", answer: "Yes, you can change your plan anytime from your account settings.", icon: <FaExchangeAlt /> },
  { question: "What is your cancellation policy?", answer: "You can cancel anytime, and your subscription will end at the end of the billing cycle.", icon: <FaQuestionCircle /> },
  { question: "Can other info be added to an invoice?", answer: "Yes, you can add additional details while generating an invoice.", icon: <FaFileInvoice /> },
  { question: "How does billing work?", answer: "We charge you based on the selected plan at the beginning of each cycle.", icon: <FaCreditCard /> },
  { question: "How do I change my account email?", answer: "You can update your email in account settings.", icon: <FaEnvelope /> },
  { question: "How does support work?", answer: "We provide 24/7 support through email and chat.", icon: <FaUserFriends /> },
  { question: "Do you provide tutorials?", answer: "Yes, we have a knowledge base with guides and tutorials.", icon: <FaBookOpen /> }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-white min-h-screen flex justify-center p-6">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.08) 1px,transparent 1px)] bg-[size:40px_40px]"></div>

      {/* FAQ Content */}
      <div className="w-full max-w-3xl bg-white rounded-xl p-8 relative z-10 ">
        {/* Header */}
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-3 bg-black text-white rounded-full flex items-center justify-center">✦</div>
          <h1 className="text-3xl font-bold text-gray-900 selection:bg-black selection:text-white">Frequently Asked Questions</h1>
          <p className="text-gray-500 mt-2 selection:bg-black selection:text-white">
            These are the most commonly asked questions about ESCAPE.<br />
            Can't find what you're looking for? <a href="mailto:EscapeRoute@gmail.com" className="text-blue-500 underline">Mail us</a> or call <span className="font-medium">+91 8307872368</span>.
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
