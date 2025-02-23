import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ArrowUp } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const Host: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);

  const [selected, setSelected] = useState("Select an option");
  const [selectedCategory, setSelectedCategory] = useState("Select an option");
  const [selectedCompany, setSelectedCompany] = useState("Select an option");
  const [selectedModel, setSelectedModel] = useState("Select an option");

  const options = ["Car", "Bike", "Scooter"];
  const category = ["Sedan", "SUV", "XUV", "Electric Vehicle", "HatchBack"];
  const BikeCompanies = ["Maruti", "Honda", "MG", "BMW", "Audi", "Hyundai" ]
  const ScooterCompanies = ["Maruti", "Honda", "MG", "BMW", "Audi", "Hyundai" ]
  const CarCompanies = ["Maruti", "Honda", "MG", "BMW", "Audi", "Hyundai" ]
  const carModels = [
    "Swift", "Baleno", "Wagon R", "Dzire", "Alto", "Celerio", "Ertiga", "S-Presso", "XL6",
    "Creta", "i20", "Verna", "Venue", "Grand i10 Nios", "Aura", "Tucson", "Alcazar",
    "Nexon", "Punch", "Harrier", "Safari", "Altroz", "Tiago", "Tigor",
    "Fortuner", "Innova Crysta", "Glanza", "Urban Cruiser", "Hilux", "Legender",
    "Sonet", "Seltos", "Carens", "EV6", "Carnival",
    "XUV700", "Scorpio-N", "Thar", "Bolero", "XUV300",
    "Kushaq", "Slavia", "Kodiaq",
    "Virtus", "Taigun", "Tiguan",
    "Hector", "Astor", "Gloster",
    "City", "Amaze", "Elevate",
    "C3", "C5 Aircross",
    "Compass", "Meridian",
    "Jimny", "Grand Vitara",
    "MG ZS EV", "Hyundai Kona Electric", "Tata Tigor EV", "Tata Nexon EV", "Mahindra XUV400"
  ];
  


  const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const submit = () =>{
        navigate("/")
  }

  return (
    <>
      <div className="bg-white flex flex-col gap-8 text-black pt-15 px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, damping: 5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <h1 className="text-6xl font-bold flex justify-center pb-3 selection:bg-black selection:text-white">
            Host Your Vehicle
          </h1>
          <p className="flex justify-center selection:bg-black selection:text-white">
            Create a portfolio for users to see
          </p>
        </motion.div>

        <div className="flex flex-row justify-center gap-45 mt-10 text-lg">
          <p className={`border border-gray-300 px-6 py-2 rounded-full ${step === 1 ? 'bg-black text-white' : 'bg-white'}`}>1</p>
          <p className={`border border-gray-300 px-6 py-2 rounded-full ${step === 2 ? 'bg-black text-white' : 'bg-white'}`}>2</p>
          <p className={`border border-gray-300 px-6 py-2 rounded-full ${step === 3 ? 'bg-black text-white' : 'bg-white'}`}>3</p>
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-lg w-200 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-2">Step 1</h1>
            <p className="text-gray-600 mb-4">Personal Information</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-black font-medium">First Name</label>
                <input className="border border-gray-300 p-3 rounded-md" placeholder="Enter First Name" />
              </div>
              <div className="flex flex-col">
                <label className="text-black font-medium">Last Name</label>
                <input className="border border-gray-300 p-3 rounded-md" placeholder="Enter Last Name" />
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-black font-medium">Email Address</label>
              <input className="border border-gray-300 p-2 rounded-md" placeholder="Enter email address" />
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-black font-medium">Phone Number</label>
              <input className="border border-gray-300 p-2 rounded-md" placeholder="Enter active phone number" />
            </div>

            <div className="flex flex-col mt-4">
              <label className="text-black font-medium">Address</label>
              <input className="border border-gray-300 p-2 rounded-md" placeholder="Enter address as in adhaar card" />
            </div>
            
            <div className="flex flex-row gap-20">
  {/* Aadhaar Card Upload */}
  <div className="flex flex-col mt-4">
    <label className="text-black font-medium mb-2">Upload Aadhaar Card for Address Verification</label>
    <div className="border-2 border-dashed border-gray-300 w-84 h-32 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
      <ArrowUp/>
      <p className="text-gray-600 text-sm">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>

  {/* Photo Upload */}
  <div className="flex flex-col mt-4">
    <label className="text-black font-medium mb-2">Upload Photo for Final Application</label>
    <div className="border-2 border-dashed border-gray-300 w-84 h-32 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>
</div>


            <button onClick={nextStep} className="mt-6 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition hover:cursor-pointer">
              Next Step
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-lg w-200 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-2">Step 2</h1>
            <p className="text-gray-600 mb-4">Vehicle Information</p>

            <div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium">Choose Vehicle Type</label>
  <button 
    className="border p-2 rounded-md border-gray-300 hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpen(!isOpen)}
  >
    {selected}
  </button>
  
  <AnimatePresence>
    {isOpen && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {options.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelected(option);
              setIsOpen(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>


{selected === 'Car' && (
  <div className="flex flex-col mt-4">
    <div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium">Choose Car Category</label>
  <button 
    className="border p-2 border-gray-300 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenCategory(!isOpenCategory)}
  >
    {selectedCategory}
  </button>
  
  <AnimatePresence>
    {isOpenCategory && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {category.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedCategory(option);
              setIsOpenCategory(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

<div className="flex flex-row gap-30">
<div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium w-35">Car Company</label>
  <button 
    className="border p-2 border-gray-300 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenCompany(!isOpenCompany)}
  >
    {selectedCompany}
  </button>
  
  <AnimatePresence>
    {isOpenCompany && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {CarCompanies.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedCompany(option);
              setIsOpenCompany(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

<div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium">Car Model</label>
  <button 
    className="border border-gray-300 w-40 p-2 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenModel(!isOpenModel)}
  >
    {selectedModel}
  </button>
  
  <AnimatePresence>
    {isOpenModel && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {carModels.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedModel(option);
              setIsOpenModel(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

    <div className="flex flex-col mt-4">
      <label className="text-black font-medium">Buying Year</label>
      <input className="border border-gray-300 p-2 rounded-md " placeholder="Enter buying year" />
    </div>
</div>

<label className="text-black font-medium mt-5">Your Car Number</label>
<div className="flex gap-1 ">

<div className="flex flex-col mt-1 w-26">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="HR" />
    </div>

    <div className="flex flex-col  mt-1 w-20">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="00" />
    </div>

    <div className="flex flex-col mt-1 w-20">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="XX" />
    </div>

    <div className="flex flex-col mt-1 w-20">
     
      <input className="border p-2 border-gray-300 rounded-md" placeholder="XXXX" />
    </div>
</div>



<div className="flex flex-wrap mt-10 gap-10 justify-left">
  {/* Vehicle Registration Certificate (RC) */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Vehicle Registration Certificate (RC)</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-left gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>

  {/* Vehicle Insurance Policy */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Vehicle Insurance Policy</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-left gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>

  {/* Pollution Under Control (PUC) Certificate */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Pollution Under Control (PUC) Certificate</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-center gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>
</div>


    
    

  <div className="flex flex-col mt-10">
    <label className="text-black font-medium mb-2">Upload Car Photos including interior and exterior (at least 10)</label>
    <div className="border-2 border-gray-300 w-50 h-42 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
      <Plus/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m-6-6l6 6 6-6M4 16h16"></path>
     
      <p className="text-gray-600 text-sm">Upload Photos</p>
      <input type="file" className="hidden" />
    </div>
  </div>
  </div>
)}


{selected === 'Bike' && (
  <div className="flex flex-col mt-4">
    <div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium">Choose Bike Category</label>
  <button 
    className="border p-2 border-gray-300 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenCategory(!isOpenCategory)}
  >
    {selectedCategory}
  </button>
  
  <AnimatePresence>
    {isOpenCategory && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {category.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedCategory(option);
              setIsOpenCategory(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

<div className="flex flex-row gap-30">
<div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium w-35">Bike Company</label>
  <button 
    className="border p-2 border-gray-300 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenCompany(!isOpenCompany)}
  >
    {selectedCompany}
  </button>
  
  <AnimatePresence>
    {isOpenCompany && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {CarCompanies.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedCompany(option);
              setIsOpenCompany(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

<div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium">Bike Model</label>
  <button 
    className="border border-gray-300 w-40 p-2 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenModel(!isOpenModel)}
  >
    {selectedModel}
  </button>
  
  <AnimatePresence>
    {isOpenModel && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {carModels.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedModel(option);
              setIsOpenModel(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

    <div className="flex flex-col mt-4">
      <label className="text-black font-medium">Buying Year</label>
      <input className="border border-gray-300 p-2 rounded-md " placeholder="Enter buying year" />
    </div>
</div>

<label className="text-black font-medium mt-5">Your Bike Number</label>
<div className="flex gap-1 ">

<div className="flex flex-col mt-1 w-26">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="HR" />
    </div>

    <div className="flex flex-col  mt-1 w-20">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="00" />
    </div>

    <div className="flex flex-col mt-1 w-20">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="XX" />
    </div>

    <div className="flex flex-col mt-1 w-20">
     
      <input className="border p-2 border-gray-300 rounded-md" placeholder="XXXX" />
    </div>
</div>



<div className="flex flex-wrap mt-10 gap-10 justify-left">
  {/* Vehicle Registration Certificate (RC) */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Vehicle Registration Certificate (RC)</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-left gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>

  {/* Vehicle Insurance Policy */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Vehicle Insurance Policy</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-left gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>

  {/* Pollution Under Control (PUC) Certificate */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Pollution Under Control (PUC) Certificate</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-center gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>
</div>


    
    

  <div className="flex flex-col mt-10">
    <label className="text-black font-medium mb-2">Upload Bike Photos (at least 5)</label>
    <div className="border-2 border-gray-300 w-50 h-42 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
      <Plus/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m-6-6l6 6 6-6M4 16h16"></path>
     
      <p className="text-gray-600 text-sm">Upload Photos</p>
      <input type="file" className="hidden" />
    </div>
  </div>
  </div>
)}



{selected === 'Scooter' && (
  <div className="flex flex-col mt-4">
    <div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium">Choose Scooter Category</label>
  <button 
    className="border p-2 border-gray-300 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenCategory(!isOpenCategory)}
  >
    {selectedCategory}
  </button>
  
  <AnimatePresence>
    {isOpenCategory && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {category.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedCategory(option);
              setIsOpenCategory(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

<div className="flex flex-row gap-30">
<div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium w-35">Scooter Company</label>
  <button 
    className="border p-2 border-gray-300 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenCompany(!isOpenCompany)}
  >
    {selectedCompany}
  </button>
  
  <AnimatePresence>
    {isOpenCompany && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {CarCompanies.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedCompany(option);
              setIsOpenCompany(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

<div className="flex flex-col mt-4 relative">
  <label className="text-black font-medium">Scooter Model</label>
  <button 
    className="border border-gray-300 w-40 p-2 rounded-md hover:cursor-pointer text-left hover:bg-gray-200 animation duration-300"
    onClick={() => setIsOpenModel(!isOpenModel)}
  >
    {selectedModel}
  </button>
  
  <AnimatePresence>
    {isOpenModel && (
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-18 w-full border border-gray-300 rounded-md bg-white shadow-md z-10"
      >
        {carModels.map((option, index) => (
          <motion.li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
            onClick={() => {
              setSelectedModel(option);
              setIsOpenModel(false);
            }}
          >
            {option}
          </motion.li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</div>

    <div className="flex flex-col mt-4">
      <label className="text-black font-medium">Buying Year</label>
      <input className="border border-gray-300 p-2 rounded-md " placeholder="Enter buying year" />
    </div>
</div>

<label className="text-black font-medium mt-5">Your Scooter Number</label>
<div className="flex gap-1 ">

<div className="flex flex-col mt-1 w-26">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="HR" />
    </div>

    <div className="flex flex-col  mt-1 w-20">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="00" />
    </div>

    <div className="flex flex-col mt-1 w-20">
      
      <input className="border p-2 border-gray-300 rounded-md" placeholder="XX" />
    </div>

    <div className="flex flex-col mt-1 w-20">
     
      <input className="border p-2 border-gray-300 rounded-md" placeholder="XXXX" />
    </div>
</div>



<div className="flex flex-wrap mt-10 gap-10 justify-left">
  {/* Vehicle Registration Certificate (RC) */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Vehicle Registration Certificate (RC)</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-left gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>

  {/* Vehicle Insurance Policy */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Vehicle Insurance Policy</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-left gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>

  {/* Pollution Under Control (PUC) Certificate */}
  <div className="flex flex-col items-left gap-4">
    <label className="text-black font-medium text-lg">Pollution Under Control (PUC) Certificate</label>
    <div className="border-2 border-dashed border-gray-300 w-86 h-36 flex flex-col items-center justify-center gap-3 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
    <ArrowUp/>
      <p className="text-gray-600 text-sm text-center">Click to upload or drag & drop</p>
      <input type="file" className="hidden" />
    </div>
  </div>
</div>

  <div className="flex flex-col mt-10">
    <label className="text-black font-medium mb-2">Upload Scooter Photos (at least 5)</label>
    <div className="border-2 border-gray-300 w-50 h-42 flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100 p-4 rounded-lg transition duration-200">
      <Plus/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m-6-6l6 6 6-6M4 16h16"></path>
     
      <p className="text-gray-600 text-sm">Upload Photos</p>
      <input type="file" className="hidden" />
    </div>
  </div>
  </div>
)}

            <div className="flex flex-row gap-4 mt-6">
              <button onClick={prevStep} className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400 transition hover:cursor-pointer">
                Previous
              </button>
              <button onClick={nextStep} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition hover:cursor-pointer">
                Next Step
              </button>
            </div>
          </motion.div>
        )}
        {step===3 && (
            <div>
                <h1>Final Application</h1>

                <div className="flex flex-row gap-4 mt-6">
              <button onClick={prevStep} className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400 transition hover:cursor-pointer">
                Previous
              </button>
              <button onClick={submit} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition hover:cursor-pointer">
                Submit
              </button>
            </div>
                </div>

                
        )}
      </div>
    </>
  );
};

export default Host;
