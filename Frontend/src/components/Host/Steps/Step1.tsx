import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Step1: React.FC<{ onNext: (data: any) => void }> = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-lg w-200 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">Step 1</h1>
      <p className="text-gray-600 mb-4">Personal Information</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-black font-medium">First Name</label>
          <input name="firstName" value={formData.firstName} onChange={handleChange} className="border border-gray-300 p-3 rounded-md" placeholder="Enter First Name" />
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium">Last Name</label>
          <input name="lastName" value={formData.lastName} onChange={handleChange} className="border border-gray-300 p-3 rounded-md" placeholder="Enter Last Name" />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-black font-medium">Email Address</label>
        <input name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 p-3 rounded-md" placeholder="Enter email address" />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-black font-medium">Phone Number</label>
        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="border border-gray-300 p-3 rounded-md" placeholder="Enter Phone number" />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-black font-medium">Address</label>
        <input name="address" value={formData.address} onChange={handleChange} className="border border-gray-300 p-3 rounded-md" placeholder="House Number, Area, City, State, Country, Pin Code" />
      </div>
            
            <div className="flex flex-row gap-20">
 

            <div className="flex flex-col mt-4">
              <label className="text-black font-medium mb-2">Upload Aadhaar Card for Address Verification</label>
              <div className="border-2 border-dashed border-gray-300 w-84 h-32 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
                <ArrowUp/>
                <p className="text-gray-600 text-sm">Click to upload or drag & drop</p>
                <input type="file" className="hidden" />
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-black font-medium mb-2">Upload Photo for Final Application</label>
              <div className="border-2 border-dashed border-gray-300 w-84 h-32 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
              <ArrowUp/>
                <p className="text-gray-600 text-sm">Click to upload or drag & drop</p>
                <input type="file" className="hidden" />
              </div>
            </div>
            </div>


            <button 
            onClick={()=>onNext(formData)}
            className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition hover:cursor-pointer">
              Next Step
            </button>
          </motion.div>
        </>
    )

}

export default Step1;