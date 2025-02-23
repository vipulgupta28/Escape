import { useEffect, useState, useRef } from "react";
import { ArrowDown, Check, Cloud, DoorOpen } from "lucide-react";
import { motion } from "framer-motion";

// Counter Component (Animated Numbers)
const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  let intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / (duration / 16));

          clearInterval(intervalRef.current); // Ensure no duplicate intervals

          intervalRef.current = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(intervalRef.current);
            } else {
              setCount(start);
            }
          }, 16); // ~60FPS
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [target, duration]);

  return <p ref={ref} className="text-3xl font-bold">{count.toLocaleString()}</p>;
};

// QR Component
const Features = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center px-6 text-white">
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Enterprise Ready Customer Features
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 max-w-2xl text-lg mb-6">
        Experience seamless car rentals for every occasion—be it a road trip with friends, 
        a stylish ride for a night out, or a peaceful evening drive.
      </p>

      {/* Explore Features Button */}
      <button className="flex items-center gap-3 bg-black text-white font-medium px-6 py-3 rounded-lg hover:cursor-pointer transition duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]">
        <ArrowDown className="text-white" />
        Explore Features
      </button>

      {/* Stats Section with Animated Counting Effect */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10">
        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-300">Rentals Completed Today</h2>
          <Counter target={100000} duration={1500} />
        </div>

        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-300">Expert Support</h2>
          <p className="text-3xl font-bold">24/7</p>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-medium text-gray-300">Active Users</h2>
          <Counter target={500000} duration={2000} />
        </div>
      </div>

      {/* Feature Animation Section */}
      <div className="flex items-center justify-center w-full py-10">
        {/* Horizontal Line */}
        <div className="relative flex items-center w-full max-w-lg">
          {/* Left Icon */}
          <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-black rounded-full">
            <DoorOpen className="text-white w-8 h-8" />
          </div>

          {/* Connecting Line */}
          <div className="flex-grow h-[3px] bg-gray-600"></div>

          {/* Center Animated Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative z-20 flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            >
              <div className="w-8 h-8 bg-black rounded-lg"></div>
            </motion.div>

            {/* Checkmark */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-0 right-0 w-6 h-6 bg-black rounded-full flex items-center justify-center"
            >
              <Check className="text-white w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Connecting Line */}
          <div className="flex-grow h-[3px] bg-gray-600"></div>

          {/* Right Icon */}
          <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-black rounded-full">
            <Cloud className="text-white w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
  {[
    "https://img.freepik.com/free-vector/family-enjoying-vacation-interstate-highway-photographing-scenic-sunset-view_335657-2485.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/make-it-rain-illustration-concept_114360-857.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/people-traveling-worldwide-flat-concept_23-2148513313.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/road-trip-illustration-concept_114360-12204.jpg?ga=GA1.1.1918914287.1739298480&semt=ais_hybrid"
  ].map((src, index) => (
    <motion.div
          key={index}
          className="flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          viewport={{ once: true }} // Ensures animation happens once when in view
        >
          <motion.img
            src={src}
            alt="Vacation"
            className="w-120 h-60 object-cover rounded-lg shadow-lg"
           
            transition={{ type: "spring", stiffness: 150 }}
          />
          <button className="mt-2 px-4 py-2 bg-black text-white font-medium rounded-lg transition duration-300 hover:cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]">
            Show Details
          </button>
        </motion.div>
  ))}
</div>

    </div>
  );
};

export default Features;
