import React from "react";
import { motion, Variants } from "framer-motion";

const Guidelines: React.FC = () => {
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
          className="text-black font-bold text-5xl sm:text-5xl md:text-8xl lg:text-8xl leading-none relative z-10 selection:bg-black selection:text-white mb-12"
        >
          COMMUNITY GUIDELINES
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 selection:bg-black selection:text-white">
              Building a Respectful Community
            </h2>
            <p className="text-lg md:text-xl text-left selection:bg-black selection:text-white mb-6">
              Our guidelines ensure a safe, respectful, and enjoyable experience for all users—whether 
              you’re listing a vehicle or renting one. Let’s keep our community thriving!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Read More
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-vector/community-concept-illustration_114360-668.jpg"
              alt="Community"
              className="w-full max-w-md object-cover rounded-lg "
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Guidelines Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-black text-white px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center selection:bg-white selection:text-black"
          >
            Our Core Guidelines
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                title: "Respect Each Other",
                desc: "Treat all users—owners and renters—with courtesy and fairness.",
              },
              {
                title: "Maintain Vehicle Condition",
                desc: "Owners provide clean, functional vehicles; renters return them in good shape.",
              },
              {
                title: "Honest Communication",
                desc: "Be transparent about availability, pricing, and any issues.",
              },
              {
                title: "Follow Local Laws",
                desc: "Adhere to traffic rules and rental regulations in your area.",
              },
            ].map((guideline, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-900 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-2">{guideline.title}</h3>
                <p className="text-gray-300">{guideline.desc}</p>
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
            Join Our Community
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-600"
          >
            Follow these guidelines to ensure a positive experience for everyone. Let’s drive together responsibly!
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Guidelines;