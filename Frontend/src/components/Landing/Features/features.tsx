import { useEffect, useState, useRef } from "react";
import { ArrowDown, Check, Cloud, DoorOpen } from "lucide-react";
import { motion } from "framer-motion";

// Define types for Counter props
interface CounterProps {
  target: number;
  duration: number;
}

// Counter Component (Animated Numbers)
const Counter: React.FC<CounterProps> = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / (duration / 16));

          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              if (intervalRef.current) clearInterval(intervalRef.current);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [target, duration]);

  return <p ref={ref} className="text-4xl font-bold">{count.toLocaleString()}</p>;
};

const Features = () => {
  return (
    <div className="min-h-screen text-white px-6 py-16 font-poppins overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-gray-300 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 bg-white/10 backdrop-blur-md inline-block px-6 py-2 rounded-full"
        >
          Enterprise-Ready Features
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mx-auto mb-10"
        >
          Seamless car rentals for every journey—road trips, stylish nights out, or peaceful drives.
        </motion.p>

        {/* Explore Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3 mx-auto bg-white text-black font-medium px-6 py-3 rounded-[6px] hover:cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] transition duration-400 shadow-md"
        >
          <ArrowDown className="w-5 h-5" />
          Explore Features
        </motion.button>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
        >
          {[
            { label: "Rentals Today", value: <Counter target={100000} duration={1500} /> },
            { label: "Expert Support", value: "24/7" },
            { label: "Active Users", value: <Counter target={500000} duration={2000} /> }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <p className="text-lg font-medium text-gray-300 mb-2">{stat.label}</p>
              <div className="text-4xl font-bold">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature Animation Section */}
        <motion.div className="flex items-center justify-center py-20">
          <div className="relative flex items-center w-full max-w-2xl">
            <motion.div
              className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <DoorOpen className="w-8 h-8" />
            </motion.div>

            <div className="flex-grow h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <motion.div
              className="relative flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-black rounded-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-white">
                <Check className="text-white w-5 h-5" />
              </div>
            </motion.div>

            <div className="flex-grow h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <motion.div
              className="flex items-center justify-center w-16 h-16 bg-white text-black rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <Cloud className="w-8 h-8" />
            </motion.div>
          </div>
        </motion.div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg"
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img src={src} alt={`Feature ${index + 1}`} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
