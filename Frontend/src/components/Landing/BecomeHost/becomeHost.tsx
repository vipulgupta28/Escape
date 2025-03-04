import React, { useState } from "react";
import { Lock, Car, IndianRupee, Shield, User, Settings, LogOut, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const BecomeHost: React.FC = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const menuItems = [
    { icon: <Lock />, text: "Sign in", component: "SignIn" },
    { icon: <Car />, text: "Host Your Car", component: "HostCar" },
    { icon: <IndianRupee />, text: "Earn Income", component: "EarnIncome" },
    { icon: <Shield />, text: "Get Insurance", component: "GetInsurance" },
    { icon: <Settings />, text: "Account Settings", component: "AccountSettings" },
    { icon: <User />, text: "Admin Dashboard", component: "AdminDashboard" },
    { icon: <Mail />, text: "Email Templates", component: "EmailTemplates" },
    { icon: <LogOut />, text: "Sign out", component: "SignOut" },
  ];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
    hover: { scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" },
    tap: { scale: 0.95 }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    })
  };

  return (
    <div
      ref={ref}
      className="min-h-screen  font-poppins text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Grid and Glow */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48 opacity-10" />
          <div className="absolute w-96 h-96 bg-gray-300 rounded-full blur-3xl -bottom-48 -right-48 opacity-10" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center gap-16 px-8 py-12">
        {/* Left Side - Profile Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-80 shadow-[0_0_30px_rgba(255,255,255,0.2)] border border-white/20"
        >
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-2xl font-bold">
              JD
            </div>
            <div>
              <p className="text-lg font-semibold">John Doe</p>
              <p className="text-sm text-gray-400">john.doe@email.com</p>
            </div>
          </motion.div>

          {/* Menu Items */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  hoveredItem === index
                    ? "bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/30"
                    : "hover:bg-white/10"
                }`}
              >
                {item.icon}
                <span>{item.text}</span>
                {hoveredItem === index && (
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-auto text-gray-400 text-sm"
                  >
                    &lt;{item.component} /&gt;
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-md"
        >
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Become an Escapist
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Share your car with ease, earn passive income, and be part of a trusted community. 
            We handle the details, you enjoy the rewards.
          </p>
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onClick={()=>{
              navigate("becomeahost")
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="px-6 py-3 bg-white text-black rounded-full hover:cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] animation duration-400 font-semibold text-lg shadow-md"
          >
            Start Hosting
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BecomeHost;