import React from "react";
import { motion, Variants } from "framer-motion";

const RentCalculation: React.FC = () => {
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

  // Sample calculation data
  const calculationSteps = [
    {
      title: "Base Rate",
      desc: "Starts at $50/day for standard vehicles.",
      amount: 50,
    },
    {
      title: "Duration Multiplier",
      desc: "3 days rental × $50/day.",
      amount: 150,
    },
    {
      title: "Eco-Discount",
      desc: "10% off for electric vehicles.",
      amount: -15,
    },
    {
      title: "Service Fee",
      desc: "Flat $10 fee for maintenance and support.",
      amount: 10,
    },
  ];

  const totalCost = calculationSteps.reduce((sum, step) => sum + step.amount, 0);

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
          RENT CALCULATION
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 selection:bg-black selection:text-white">
              How We Calculate Your Rent
            </h2>
            <p className="text-lg md:text-xl text-left selection:bg-black selection:text-white mb-6">
              Transparency is key. Learn how we determine the cost of renting a vehicle 
              with our simple, eco-friendly pricing model. No hidden fees—just fair rates!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Try It Now
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1236.jpg"
              alt="Rent Calculation"
              className="w-full max-w-md object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Calculation Breakdown Section */}
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
            className="text-3xl md:text-4xl font-bold mb-8 text-center selection:bg-white selection:text-black"
          >
            Pricing Breakdown
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 text-center">
              Here’s a sample calculation for renting an electric vehicle for 3 days:
            </p>

            <div className="space-y-4">
              {calculationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex justify-between items-center p-4 bg-gray-900 rounded-lg"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-300">{step.desc}</p>
                  </div>
                  <span className="text-xl font-bold">
                    {step.amount >= 0 ? `+$${step.amount}` : `-$${Math.abs(step.amount)}`}
                  </span>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                className="flex justify-between items-center p-4 bg-white text-black rounded-lg font-bold text-xl"
              >
                <span>Total Cost</span>
                <span>${totalCost}</span>
              </motion.div>
            </div>

            <p className="text-lg text-gray-300">
              Our pricing is designed to be affordable and sustainable. The base rate varies 
              by vehicle type, with discounts for eco-friendly options and additional fees 
              clearly outlined upfront.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Factors Section */}
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
            Factors Affecting Your Rent
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vehicle Type",
                desc: "Electric, hybrid, or standard—each has a different base rate.",
              },
              {
                title: "Rental Duration",
                desc: "Longer rentals may qualify for special rates.",
              },
              {
                title: "Add-Ons",
                desc: "Optional extras like insurance or GPS incur small fees.",
              },
            ].map((factor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">{factor.title}</h3>
                <p className="text-gray-600">{factor.desc}</p>
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
        className="py-20 bg-black text-white px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 selection:bg-white selection:text-black"
          >
            Ready to Rent?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-300"
          >
            Calculate your rental cost and start your sustainable journey today!
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default RentCalculation;