import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle, FaWallet, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check login state on component mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Animation Variants
  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, staggerChildren: 0.1 } 
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className=" text-white p-4 font-poppins top-0 z-100 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.h1
            className="text-3xl font-bold selection:bg-white selection:text-black hover:cursor-pointer"
           
          >
            Escape
          </motion.h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex font-medium items-center gap-6 selection:bg-white selection:text-black">
          <motion.div variants={linkVariants}>
            <Link 
              to="/howitworks" 
              className="px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-400"
            >
              How it Works
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} >
            <Link 
              to="/help" 
              className="px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-400"
            >
              Help Center
            </Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            {isLoggedIn ? (
              <Link 
                to="/becomeahost" 
                className="px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-400"
              >
                Become a Host
              </Link>
            ) : (
              <button
                className="px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-400 hover:cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Become a Host
              </button>
            )}
          </motion.div>
          <motion.div variants={linkVariants} >
            <a className="px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-400 hover:cursor-pointer">
              English
            </a>
          </motion.div>
        </div>

        {/* Desktop Profile/Wallet or Login/Signup */}
        <div className="hidden md:flex items-center gap-4 selection:bg-black selection:text-white">
          {isLoggedIn ? (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 flex items-center gap-2 transition-all duration-300"
              >
                <FaWallet /> Wallet
              </motion.button>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/profilepage">
                  <FaUserCircle className="text-3xl cursor-pointer hover:text-gray-300" />
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div >
                <Link to="/login">
                  <button className="px-4 py-2 font-medium hover:cursor-pointer hover:bg-gray-200 rounded-lg bg-white text-black hover:bg-gray-200 transition-all duration-300">
                    Login
                  </button>
                </Link>
              </motion.div>
              <motion.div >
                <Link to="/login">
                  <button className="px-4 py-2 font-medium hover:cursor-pointer rounded-lg bg-white text-black hover:bg-gray-200 transition-all duration-300">
                    Sign Up
                  </button>
                </Link>
              </motion.div>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md  p-6 flex flex-col gap-4 ${isMobileMenuOpen ? "block" : "hidden"}`}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMobileMenuOpen ? "visible" : "hidden"}
      >
        <motion.div variants={mobileLinkVariants}>
          <Link 
            to="/howitworks" 
            className="block py-2 px-4 hover:bg-white/10 rounded-lg"
            onClick={toggleMobileMenu}
          >
            How it Works
          </Link>
        </motion.div>
        <motion.div variants={mobileLinkVariants}>
          <Link 
            to="/help" 
            className="block py-2 px-4 hover:bg-white/10 rounded-lg"
            onClick={toggleMobileMenu}
          >
            Help Center
          </Link>
        </motion.div>
        <motion.div variants={mobileLinkVariants}>
          {isLoggedIn ? (
            <Link 
              to="/becomeahost" 
              className="block py-2 px-4 hover:bg-white/10 rounded-lg"
              onClick={toggleMobileMenu}
            >
              Become a Host
            </Link>
          ) : (
            <button
              className="block py-2 px-4 hover:bg-white/10 rounded-lg w-full text-left"
              onClick={() => {
                navigate("/login");
                toggleMobileMenu();
              }}
            >
              Become a Host
            </button>
          )}
        </motion.div>
        <motion.div variants={mobileLinkVariants}>
          <a className="block py-2 px-4 hover:bg-white/10 rounded-lg">
            English
          </a>
        </motion.div>

        {/* Mobile Profile/Wallet or Login/Signup */}
        {isLoggedIn ? (
          <>
            <motion.div variants={mobileLinkVariants}>
              <button className="w-full py-2 px-4 rounded-lg bg-white text-black hover:bg-gray-200 flex items-center gap-2">
                <FaWallet /> Wallet
              </button>
            </motion.div>
            <motion.div variants={mobileLinkVariants}>
              <Link 
                to="/profilepage" 
                className="block py-2 px-4 hover:bg-white/10 rounded-lg"
                onClick={toggleMobileMenu}
              >
                Profile
              </Link>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div variants={mobileLinkVariants}>
              <Link 
                to="/login" 
                className="block py-2 px-4 rounded-lg bg-white text-black hover:bg-gray-200"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            </motion.div>
            <motion.div variants={mobileLinkVariants}>
              <Link 
                to="/signup" 
                className="block py-2 px-4 rounded-lg bg-white text-black hover:bg-gray-200"
                onClick={toggleMobileMenu}
              >
                Sign Up
              </Link>
            </motion.div>
          </>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;