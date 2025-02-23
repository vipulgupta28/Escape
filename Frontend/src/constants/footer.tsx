import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ChevronUp,Download, Upload } from "lucide-react";

const Footer = () => {
  const [showLocation, setShowLocation] = React.useState(false);

  const cities = ["New Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"];

  return (
    <footer className="bg-black text-white pt-12 mt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4  selection:bg-white selection:text-black">Escape</h2>
            <p className="text-white max-w-md  selection:bg-white selection:text-black">
              Experience the freedom of personal mobility with Escape’s vehicle-renting platform.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <Link to='/becomeahost' className="flex items-center gap-2 px-4 py-2 bg-white font-medium text-black rounded-lg hover:bg-gray-200 transition">
              <Upload className="w-5 h-5" />
              <span className=" selection:bg-black selection:text-white">Host Your Vehicle</span>
            </Link>
            <a href="#" className="flex items-center font-medium gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
              <Download className="w-5 h-5" />
              <span className=" selection:bg-black selection:text-white">Download Our App</span>
            </a>
          </div>
        </div>

        {/* Main Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 ">
          <div>
            <h3 className="text-lg font-semibold mb-6  selection:bg-white selection:text-black">Company</h3>
            <ul className="space-y-4 flex flex-col  text-white">
              <Link to="/About" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">About us</Link>
              
              <Link to="/Career" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Careers</Link>
              <Link to="/Blogs" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Blog</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6  selection:bg-white selection:text-black">Informtion</h3>
            <ul className="space-y-4 flex flex-col text-white">
              <Link to="" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Profit </Link>
              <Link to="/Rent" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Rent Calculation</Link>
              <Link to="/BusinessModel" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Business Model</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6  selection:bg-white selection:text-black">Safety</h3>
            <ul className="space-y-4 flex flex-col text-white">
              <Link to="/CommunityGuidelines" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Community Guidelines</Link>
              <Link to="" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Insurance</Link>
              <Link to="" className="hover:text-gray-400 transition hover:cursor-pointer  selection:bg-white selection:text-black">Accessibility</Link>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6  selection:bg-white selection:text-black ">Cities</h3>
            <button 
              onClick={() => setShowLocation(!showLocation)}
              className="flex hover:cursor-pointer items-center gap-2 text-white hover:text-gray-400 transition"
            >
              <span className=" selection:bg-white selection:text-black">Select City</span>
              <ChevronUp className={`w-4 h-4  selection:bg-white selection:text-black transition-transform ${showLocation ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Location Grid */}
        {showLocation && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-8 border-t border-gray-800">
            {cities.map((city) => (
              <a key={city} href="#" className="text-white  selection:bg-white selection:text-black hover:text-white transition">
                {city}
              </a>
            ))}
          </div>
        )}

        {/* Social Links */}
        <div className="flex flex-wrap gap-8 py-8 ">
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-400 transition  selection:bg-white selection:text-black"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-white hover:text-gray-400 transition  selection:bg-white selection:text-black"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-white hover:text-gray-400 transition  selection:bg-white selection:text-black"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-white hover:text-gray-400 transition  selection:bg-white selection:text-black"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-between pt-8 text-sm text-gray-400">
          <div className="flex flex-wrap gap-6">
            <a href="#" className=" text-white font-medium hover:text-gray-400 transition  selection:bg-white selection:text-black">Privacy</a>
            <a href="#" className="text-white font-medium hover:text-gray-400 transition  selection:bg-white selection:text-black">Terms</a>
          </div>
          <div>
            <span className="font-medium text-white selection:bg-white selection:text-black">&copy; {new Date().getFullYear()} Escape Technologies Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
