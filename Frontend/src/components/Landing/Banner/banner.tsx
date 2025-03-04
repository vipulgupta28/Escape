import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Banner: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, delay: 0.2 } 
    },
    hover: { scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)" },
    tap: { scale: 0.95 }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1, delay: 0.5 } 
    }
  };

  return (
    <div 
      ref={ref}
      className="relative min-h-screen font-poppins text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-gray-300 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>

      <div className="flex items-center justify-between px-6 md:px-16 py-12 max-w-7xl mx-auto relative z-10">
        {/* Left Side - Heading and Info */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full md:w-1/2 space-y-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-left">
            RENT YOUR{" "}
            <span className="relative inline-block">
              <span className="relative z-10 px-4 py-2 bg-white text-black rounded-[30px] shadow-[0_0_20px_rgba(255,255,255,0.7)]">
                DREAM RIDE
              </span>
            </span>
            <br /> ANYTIME, ANYWHERE
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-md">
            Explore our premium fleet of vehicles - from sleek city cars to rugged SUVs. 
            Book instantly through our app and hit the road in minutes!
          </p>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="text-white">✓</span> 24/7 Availability
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">✓</span> Instant Booking
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">✓</span> Flexible Rentals
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">✓</span> GPS Navigation
            </div>
          </div>

          {/* Call-to-Action Button */}
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
         
            onClick={()=>window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-6 px-8 py-4 text-lg hover:cursor-pointer font-semibold bg-white text-black rounded-full shadow-lg  hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>

        {/* Right Side - Video + Rotating Elements */}
        <div className="hidden md:block w-1/2 relative">
          <motion.div
            variants={videoVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
           <img 
           src="https://img.freepik.com/free-vector/outdoor-cinema-open-air-movie-theater-with-cars_107791-2550.jpg?t=st=1741110569~exp=1741114169~hmac=5118e93eece27132a6795a537cc3f991e16ab16ce377f73f90f77a48ada17fb9&w=1480"
           />

           
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-white">5000+</span> Vehicles Available
          </motion.div>
        </div>
      </div>

      {/* Mobile Bottom Section */}
      <div className="md:hidden mt-8 px-6 pb-12">
        <motion.div
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative rounded-2xl overflow-hidden"
        >
          
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;