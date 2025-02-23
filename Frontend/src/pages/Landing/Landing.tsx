import React from "react";
import Navbar from "../../constants/navbar";
import Hero from "../../components/Landing/HeroSection/hero";
import BecomeHost from "../../components/Landing/BecomeHost/becomeHost";
import Banner from "../../components/Landing/Banner/banner";
import AppDownload from "../../components/Landing/AppDownload/appDownload";
import Features from "../../components/Landing/Features/features";
import Footer from "../../constants/footer";

const Landing:React.FC = () =>{
    return(
        <main>
            <Navbar/>
            <Hero/>
            <BecomeHost/>
            <Banner/>
            <AppDownload/>
            <Features/>
            <Footer/>
        </main>
    )
}

export default Landing