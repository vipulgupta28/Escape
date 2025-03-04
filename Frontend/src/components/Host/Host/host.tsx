import React, { useState } from "react";
import { motion } from "framer-motion";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";

const Host: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [files, setFiles] = useState<{ [key: string]: File | File[] | null }>({});
  const [vehicleInfo, setVehicleInfo] = useState({}); // State for vehicle info

  const handleNext = (data: any) => {
    if (step === 2) {
      setVehicleInfo((prevInfo) => ({ ...prevInfo, ...data })); // Store vehicle data separately
    } else {
      setFormData((prevData) => ({ ...prevData, ...data })); // Store personal form data
    }
    setStep((prevStep) => prevStep + 1);
  };
  

  const handlePrev = () => {
    setStep((prevStep) => Math.max(1, prevStep - 1));
  };

  const handleFileUpload = (key: string, file: File | File[] | null) => {
    setFiles((prevFiles) => ({ ...prevFiles, [key]: file }));
  };

  const handleVehicleInfo = (data: any) => {
    setVehicleInfo((prevInfo) => ({ ...prevInfo, ...data }));
  };

  return (
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

      {/* Conditional Rendering Based on Step */}
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && (
        <Step2
          onNext={handleNext}
          onPrev={handlePrev}
          onFileUpload={handleFileUpload}
          onVehicleInfo={handleVehicleInfo} // Pass vehicle info handler
        />
      )}
      {step === 3 && (
        <Step3 onPrev={handlePrev} formData={formData} vehicleInfo={vehicleInfo} />
      )}
    </div>
  );
};

export default Host;
