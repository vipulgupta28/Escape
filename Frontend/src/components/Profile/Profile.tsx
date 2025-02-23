import React from "react";
import { User, History, DollarSign, Car, ShoppingBag } from "lucide-react"; // Importing icons

const Profile: React.FC = () => {
  return (
    <div className="border-r border-gray-300 align-left text-black w-60 h-screen p-6 fixed left-0 font-medium flex flex-col gap-3 bg-white">
      <h1 className="text-xl text-left font-bold pb-10">Analytics & Insights</h1>

      <button className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 text-left rounded-md hover:cursor-pointer transition duration-400">
        <User size={20} /> Profile
      </button>

      <button className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 text-left rounded-md hover:cursor-pointer transition duration-400">
        <History size={20} /> History
      </button>

      <button className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 text-left rounded-md hover:cursor-pointer transition duration-400">
        <DollarSign size={20} /> Earnings
      </button>

      <button className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 text-left rounded-md hover:cursor-pointer transition duration-400">
        <Car size={20} /> Your Vehicles
      </button>

      <button className="flex items-center gap-3 py-2 px-4 hover:bg-gray-200 text-left rounded-md hover:cursor-pointer transition duration-400">
        <ShoppingBag size={20} /> Order History
      </button>
    </div>
  );
};

export default Profile;
