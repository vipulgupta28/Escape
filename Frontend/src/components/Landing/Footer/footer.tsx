import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full  text-white py-10 mt-50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Company Section */}
        <div>
          <h2 className="text-4xl font-semibold mb-20 ">Escape</h2>
          <ul className="space-y-10 text-sm">
            <li className="hover:bg-white p-3 hover:text-black cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press</li>
            <li className="hover:underline cursor-pointer">Investors</li>
          </ul>
        </div>
        
        {/* Support Section */}
        <div>
          <h2 className="text-lg font-semibold mb-20">Support</h2>
          <ul className="space-y-20 text-sm">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">Safety Center</li>
            <li className="hover:underline cursor-pointer">Accessibility</li>
          </ul>
        </div>

        {/* Explore Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Ryde App</li>
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">Offers</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <span className="hover:text-gray-400 cursor-pointer">Facebook</span>
            <span className="hover:text-gray-400 cursor-pointer">Twitter</span>
            <span className="hover:text-gray-400 cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-400">
        <p>&copy; 2025 Escape Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
