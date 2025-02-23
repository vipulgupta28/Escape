import React from "react";
import Navbar from "../../constants/navbar";
import Insurance from "../../components/Insurance/Insurance";
import Footer from "../../constants/footer";

const InsurancePage:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <Insurance/>
        <Footer/>
        </>
    )
}

export default InsurancePage