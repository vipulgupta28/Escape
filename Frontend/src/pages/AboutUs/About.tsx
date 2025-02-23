import React from "react";
import AboutUs from "../../components/About/AbousUs";
import Navbar from "../../constants/navbar";
import Footer from "../../constants/footer";

const About:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <AboutUs/>
       <Footer/>
        </>
    )
    


}

export default About;