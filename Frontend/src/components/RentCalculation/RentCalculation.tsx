import React from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

  console.log(totalCost);
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
              className="w-full max-w-md object-cover rounded-lg \"
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
    This is how the algorithm is designed to calculate Rent
  </p>

  <div>
    <h1 className="text-xl font-bold text-white">Vehicle Classification:</h1>
    <p className="text-gray-400">
      The rent is calculated based on the type of vehicle, base price, and the distance covered.
    </p>

    <ul className="list-disc text-gray-300 pl-5 mt-2">
      <li>
        <span className="font-semibold">Type A:</span> Premium vehicles with high mileage and higher base price.
      </li>
      <li>
        <span className="font-semibold">Type B:</span> Mid-range vehicles with moderate base price.
      </li>
      <li>
        <span className="font-semibold">Type C:</span> Standard vehicles with lower mileage and the lowest base price.
      </li>
    </ul>

    <h2 className="text-lg font-semibold text-white mt-4">Calculation Process:</h2>
    <ol className="list-decimal text-gray-300 pl-5">
      <li>Determine the selected vehicle type (A, B, or C).</li>
      <li>Each type has a predefined base price and free distance limit.</li>
      <li>
        If the total distance traveled exceeds the free distance limit:
        <ul className="list-disc pl-5 mt-1">
          <li>Calculate the extra distance traveled.</li>
          <li>Multiply extra distance by the per-km extra charge.</li>
        </ul>
      </li>
      <li>Add the base price to the extra charge to get the total rent.</li>
    </ol>

    <h2 className="text-lg font-semibold text-white mt-4">Example Calculation:</h2>
    <p className="text-gray-400">
      Suppose a user selects a <span className="font-semibold text-white">Type B</span> vehicle for
      <span className="font-semibold text-white"> 3 days</span>, traveling 
      <span className="font-semibold text-white"> 180 km</span>.
    </p>

    <table className="border-collapse border border-gray-500 mt-3 text-gray-300 w-full text-sm">
      <thead>
        <tr>
          <th className="border border-gray-500 px-2 py-1">Vehicle Type</th>
          <th className="border border-gray-500 px-2 py-1">Base Price (per day)</th>
          <th className="border border-gray-500 px-2 py-1">Free Distance</th>
          <th className="border border-gray-500 px-2 py-1">Extra Charge per km</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-500 px-2 py-1">Type B</td>
          <td className="border border-gray-500 px-2 py-1">$80</td>
          <td className="border border-gray-500 px-2 py-1">150 km</td>
          <td className="border border-gray-500 px-2 py-1">$0.75</td>
        </tr>
      </tbody>
    </table>

    <p className="text-gray-400 mt-2">
      <span className="font-semibold">Extra Distance:</span> 180 km - 150 km = 30 km
    </p>
    <p className="text-gray-400">
      <span className="font-semibold">Extra Charge:</span> 30 km × $0.75 = $22.50
    </p>
    <p className="text-gray-400">
      <span className="font-semibold">Total Rent:</span> (3 × $80) + $22.50 = <span className="font-semibold text-white">$262.50</span>
    </p>
  </div>
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
            onClick={()=>{navigate("/")
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

export default RentCalculation;