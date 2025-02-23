import React from "react";
import Navbar from "../../constants/navbar";
import RentCalculation from "../../components/RentCalculation/RentCalculation";
import Footer from "../../constants/footer";

const Rent:React.FC = () =>{

    return(
        <>
        <Navbar/>
        <RentCalculation/>
        <Footer/>
        </>
    )

}

export default Rent;