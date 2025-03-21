import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

const Accessibility: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const navigate = useNavigate();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-black font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none relative z-10 selection:bg-black selection:text-white mb-12"
        >
          ACCESSIBILITY
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 selection:bg-black selection:text-white">
              Travel for Everyone
            </h2>
            <p className="text-lg md:text-xl text-left selection:bg-black selection:text-white mb-6">
              We’re committed to making our app and vehicles accessible to all users, ensuring 
              everyone can enjoy sustainable travel with ease and comfort.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>{
                navigate("/")
                window.scrollTo({top:0, behavior:"smooth"})
                
              }}
              className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/accessibility-concept-illustration_114360-1146.jpg"
              alt="Accessibility"
              className="w-full max-w-md object-cover rounded-lg "
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Accessibility Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-black text-white px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center selection:bg-white selection:text-black"
          >
            Our Accessibility Commitment
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "App Accessibility",
                desc: "Screen reader support, high-contrast mode, and keyboard navigation.",
              },
              {
                title: "Vehicle Options",
                desc: "Vehicles with hand controls and wheelchair accessibility available.",
              },
              {
                title: "Support Services",
                desc: "24/7 assistance for users with specific needs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 hover:bg-gray-900 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white text-black px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 selection:bg-black selection:text-white"
          >
            Inclusive Travel Starts Here
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-600"
          >
            We’re dedicated to accessibility. Contact us to learn more or share your feedback!
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>{
              navigate("/help")
              window.scrollTo({top:0, behavior:"smooth"})
            }} 
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Accessibility;