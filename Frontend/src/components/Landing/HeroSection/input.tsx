import React, { useState } from "react";
import axios from "axios";

const Input: React.FC = () => {

  const [address, setAddress] = useState("");

  const SearchVehicles = async () => {
    try {
      const response = await axios.post("http://localhost:3000/search-vehicles", {
        address,
      });
      console.log("Vehicles Found:", response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  return (
    <div className="  ">
      <div className="text-left space-y-8 mr-10">
        <h1 className="font-bold text-white text-5xl ">
          Rent Vehicles with One Click
        </h1>
        <p className="text-gray-400">(Vehicles are searched nearby dropoff location)</p>

        <div className="flex flex-col space-y-10 w-[400px]">
          <input
            type="text"
            placeholder="Enter vehicle drop location"
            onChange={(e)=>setAddress(e.target.value)}
            className="border border-black py-3 px-4 rounded-[6px] bg-white text-black transition duration-300 focus:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
          />
          <input
            type="text"
            placeholder="Enter vehicle pick-up location"
            className="border border-black py-3 px-4 rounded-[6px] bg-white text-black duration-300 focus:shadow-[0_0_20px_rgba(255,255,255,0.7)] "
          />
          <button className="bg-black text-white font-medium  w-30 rounded-[6px] py-3 
            relative transition duration-300 hover:cursor-pointer
            hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]"
            onClick={SearchVehicles}>
            Search Vehicles
            </button>

        </div>
      </div>
    </div>
  );
};

export default Input;
