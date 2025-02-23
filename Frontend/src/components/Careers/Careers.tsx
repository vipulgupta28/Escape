import React from "react";
import { motion, Variants } from "framer-motion";

const Careers: React.FC = () => {
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
          CAREERS
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 px-4">
            <p className="text-lg md:text-xl text-left selection:bg-black selection:text-white mb-6">
              Join us in shaping the future of sustainable travel. We're building a team of innovators 
              passionate about technology, sustainability, and freedom of exploration. 
              While we’re not hiring yet, exciting opportunities are on the horizon!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Stay Updated
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://img.freepik.com/premium-photo/diverse-group-professionals-collaborating-project-using-laptop-conference-table-generative-ai_561855-73752.jpg?w=1380"
              alt="Team Collaboration"
              className="w-full max-w-md object-cover rounded-lg "
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Culture Section */}
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center selection:bg-white selection:text-black"
          >
            Our Culture
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation-Driven",
                desc: "We thrive on creativity and cutting-edge solutions.",
              },
              {
                title: "Eco-Conscious",
                desc: "Sustainability is at the heart of everything we do.",
              },
              {
                title: "Collaborative",
                desc: "Together, we build a brighter future.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 hover:bg-gray-900 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Not Hiring Notice */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 selection:bg-black selection:text-white"
          >
            Current Opportunities
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            We are not hiring yet, but we’re always on the lookout for passionate individuals. 
            Check back soon for updates on future openings!
          </motion.p>
        </div>
      </motion.section>

      {/* Join Us Call-to-Action */}
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
            className="text-3xl md:text-4xl font-bold mb-6 selection:bg-white selection:text-black"
          >
            Want to Join Us?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-300"
          >
            Sign up to receive updates about upcoming career opportunities and be the first to know when we start hiring.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Subscribe for Updates
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;