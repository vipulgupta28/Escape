import React from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProfilePic from "../../assets/images/ProfilePic.jpg";

const AboutUs: React.FC = () => {
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

  const navigate = useNavigate();
  // Mission item type
  interface MissionItem {
    title: string;
    desc: string;
  }

  const missionItems: MissionItem[] = [
    {
      title: "Sustainability",
      desc: "Reducing carbon footprint through electric vehicles and smart routing.",
    },
    {
      title: "Innovation",
      desc: "Leveraging cutting-edge technology for seamless rentals.",
    },
    {
      title: "Freedom",
      desc: "Empowering travelers with flexible, affordable options.",
    },
  ];

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
          ABOUT US
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 px-4">
            <p className="text-lg md:text-xl text-left selection:bg-black selection:text-white mb-6">
              We're revolutionizing travel with sustainable, hassle-free vehicle rentals. 
              Our mission is to empower exploration while minimizing environmental impact 
              through innovative technology and eco-conscious solutions.
            </p>
            <motion.button
              
              className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 hover:cursor-pointer transition-colors duration-300"
              onClick={()=>navigate("/")}
            >
              Join the Movement
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg"
              alt="Sustainable Travel"
              className="w-full max-w-md object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
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
            Our Mission
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionItems.map((item: MissionItem, index: number) => (
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

      {/* Team Section */}
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center selection:bg-black selection:text-white"
          >
            Our Team
          </motion.h2>
          <div className="">
            {[
              { name: "Vipul Gupta", role: "CEO & Founder" },

            ].map((member, index) => (
              <motion.div
  key={index}
  variants={itemVariants}
  className="text-center p-6 flex flex-col items-center"
  whileHover={{ y: -10 }}
>
  <img
    src={ProfilePic} // Replace with actual image URL
    alt={member.name}
    className="w-42 h-42 object-cover rounded-full mb-4"
  />
  <h3 className="text-xl font-semibold">{member.name}</h3>
  <p className="text-gray-600">{member.role}</p>
</motion.div>

            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Call-to-Action */}
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
            Ready to Drive the Future?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-300"
          >
            Join us in creating a sustainable travel revolution. Contact us today!
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
            onClick={()=> {navigate("/")
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            }
            
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;