import React, { useState } from "react";
import { motion } from "framer-motion";
import Dropdown from "../Dropdown/Dropdown";
import FileUpload from "../FileUpload/FileUpload";

const Step2: React.FC<{
  
  onNext: (data: any) => void;
  onPrev: () => void;
  onFileUpload: (key: string, file: File | File[] | null) => void;
}> = ({ onNext, onPrev, onFileUpload }) => {
  type VehicleType = "Car" | "Bike" | "Scooter";

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | "Select an option">("Select an option");

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [buyingYear, setBuyingYear] = useState<string>("");
  const [vehicleNumber, setVehicleNumber] = useState<string[]>(["", "", "", ""]);
  const [availability, setAvailability] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });

  const vehicleData: Record<VehicleType, { categories: string[]; companies: string[]; models: string[] }> = {
    Car: { categories: ["Sedan", "SUV"], companies: ["Honda", "Toyota"], models: ["City", "Corolla"] },
    Bike: { categories: ["Sports", "Cruiser"], companies: ["Yamaha", "KTM"], models: ["R15", "Duke 390"] },
    Scooter: { categories: ["Electric", "Petrol"], companies: ["Honda", "TVS"], models: ["Activa", "Jupiter"] },
  };

  const handleNext = () => {
    const vehicleInfo = {
      vehicleType: selectedVehicle,
      category: selectedCategory,
      company: selectedCompany,
      model: selectedModel,
      buyingYear,
      vehicleNumber: vehicleNumber.join(" "), // Combine vehicle number parts
      availability,
    };
    onNext(vehicleInfo); // Pass vehicle info to Step3
  };

  const handleFileUpload = (file: File | File[] | null) => {
    onFileUpload("vehicleDocument", file);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 rounded-lg max-w-4xl mx-auto bg-white shadow-md"
    >
      <h1 className="text-2xl font-semibold mb-2">Step 2: Vehicle Information</h1>
      <p className="text-gray-600 mb-4">Please fill out the details about your vehicle</p>

      {/* Vehicle Type Dropdown */}
      <Dropdown
        label="Choose Vehicle Type"
        options={Object.keys(vehicleData)}
        selected={selectedVehicle}
        onSelect={(option) => setSelectedVehicle(option as VehicleType | "Select an option")}

      />

      {selectedVehicle !== "Select an option" && (
        <>
          <Dropdown
            label="Choose Category"
            options={vehicleData[selectedVehicle].categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Dropdown
              label={`${selectedVehicle} Company`}
              options={vehicleData[selectedVehicle].companies}
              selected={selectedCompany}
              onSelect={setSelectedCompany}
            />
            <Dropdown
              label={`${selectedVehicle} Model`}
              options={vehicleData[selectedVehicle].models}
              selected={selectedModel}
              onSelect={setSelectedModel}
            />
            <div className="flex flex-col mt-4">
              <label className="text-black font-medium mb-1">Buying Year</label>
              <input
                type="number"
                className="border border-gray-300 p-3 rounded-md"
                placeholder="Enter buying year"
                value={buyingYear}
                onChange={(e) => setBuyingYear(e.target.value)}
              />
            </div>
          </div>

          {/* Vehicle Number Input */}
          <div className="flex flex-col mt-5">
            <label className="text-black font-medium mb-1">Your {selectedVehicle} Number</label>
            <div className="flex gap-2 flex-wrap">
              {["HR", "00", "XX", "XXXX"].map((placeholder, index) => (
                <input
                  key={index}
                  className="border p-3 w-24 border-gray-300 rounded-md text-center"
                  placeholder={placeholder}
                  value={vehicleNumber[index]}
                  maxLength={index === 3 ? 4 : 2}
                  onChange={(e) => {
                    const newNumbers = [...vehicleNumber];
                    newNumbers[index] = e.target.value.toUpperCase();
                    setVehicleNumber(newNumbers);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Availability Date */}
          <div className="flex flex-col mt-5">
            <label className="text-black font-medium mb-1">Availability Date</label>
            <div className="flex flex-col md:flex-row gap-4 mt-3">
              <div className="flex flex-col">
                <label className="text-black font-medium mb-1">From</label>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-md"
                  value={availability.from}
                  onChange={(e) => setAvailability({ ...availability, from: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-black font-medium mb-1">To</label>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-md"
                  value={availability.to}
                  onChange={(e) => setAvailability({ ...availability, to: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="mt-6">
            <FileUpload label="Upload Vehicle Document" onFileUpload={handleFileUpload} multiple={false} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-row gap-4 mt-8">
            <button
              onClick={onPrev}
              className="bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400 transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Next Step
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Step2;
