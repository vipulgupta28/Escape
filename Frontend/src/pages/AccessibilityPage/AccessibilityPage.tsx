import React from "react";
import Navbar from "../../constants/navbar";
import Accessibility from "../../components/Accessibility/Accessibility";
import Footer from "../../constants/footer";

const AccessibilityPage:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <Accessibility/>
        <Footer/>
        </>
    )
}

export default AccessibilityPage