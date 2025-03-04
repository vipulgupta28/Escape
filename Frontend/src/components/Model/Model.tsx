import React from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Model: React.FC = () => {
  // Animation variants with TypeScript types
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
          BUSINESS MODEL
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 selection:bg-black selection:text-white">
              Peer-to-Peer Vehicle Sharing
            </h2>
            <p className="text-lg md:text-xl text-left selection:bg-black selection:text-white mb-6">
              We connect vehicle owners with travelers. List your unused vehicle on our app, 
              and let users rent it for temporary use—earning you money while promoting sustainable travel.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://img.freepik.com/free-vector/car-sharing-concept-illustration_114360-7228.jpg"
              alt="Vehicle Sharing"
              className="w-full max-w-md object-cover rounded-lg "
            />
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
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
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "List Your Vehicle",
                desc: "Owners sign up and list their unused vehicles with details and availability.",
              },
              {
                title: "Book a Ride",
                desc: "Users browse, select, and book vehicles for short-term use.",
              },
              {
                title: "Earn & Save",
                desc: "Owners earn money, users save on rentals, and we take a small fee.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 hover:bg-gray-900 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center selection:bg-black selection:text-white"
          >
            Benefits for Everyone
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "For Vehicle Owners",
                desc: "Turn your idle vehicle into a source of income. Set your price, schedule, and earn money effortlessly.",
              },
              {
                title: "For Renters",
                desc: "Access a variety of vehicles at affordable rates without the burden of ownership.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Revenue Model Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-black text-white px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 selection:bg-white selection:text-black"
          >
            Our Revenue Model
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-6 text-gray-300"
          >
            We charge a small commission on each rental transaction. This fee supports our platform, 
            ensuring a seamless experience for both owners and renters while keeping costs low.
          </motion.p>
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
            Join the Sharing Economy
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-600"
          >
            Whether you’re an owner or a renter, be part of our sustainable travel revolution today!
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            onClick={()=>{
              navigate("/")
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Model;