import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Step3: React.FC<{ onPrev: () => void; formData: any; vehicleInfo: any }> = ({ onPrev, formData, vehicleInfo }) => {
  const navigate = useNavigate();

  const submit = async () => {
    try {
      await axios.post("http://localhost:3000/insert-into-hosts-table", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
      });

      const endpoint = vehicleInfo.vehicleType === "Car"
        ? "/available-cars"
        : vehicleInfo.vehicleType === "Bike"
        ? "/available-bikes"
        : "/available-scooters";

      await axios.post(`http://localhost:3000${endpoint}`, vehicleInfo);

      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h1>Final Application</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phoneNumber}</p>
      <p>Address: {formData.address}</p>

      <h2>Vehicle Details</h2>
      <p>Vehicle Type: {vehicleInfo.vehicleType}</p>
      <p>Category: {vehicleInfo.category}</p>
      <p>Company: {vehicleInfo.company}</p>
      <p>Model: {vehicleInfo.model}</p>
      <p>Buying Year: {vehicleInfo.buyingYear}</p>
      <p>Number: {vehicleInfo.vehicleNumber}</p>
      <p>From: {vehicleInfo.availability.from}</p>
      <p>To: {vehicleInfo.availability.to}</p>

      <button onClick={onPrev} className="bg-black text-white p-3 rounded-[6px] hover:bg-gray-800 hover:cursor-pointer">Previous</button>
      <button onClick={submit} className="bg-black text-white p-3 rounded-[6px] hover:bg-gray-800 hover:cursor-pointer ">Submit</button>
    </div>
  );
};

export default Step3;
