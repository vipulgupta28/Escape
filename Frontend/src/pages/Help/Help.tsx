import React from "react";
import Navbar from "../../constants/navbar";
import TopBanner from "../../components/Help/TopBanner/TopBanner";
import FAQ from "../../components/Help/FAQ/faq";
import Footer from "../../constants/footer";

const Help:React.FC = () =>{

    return(
        <>
        <Navbar/>
        <TopBanner/>
        <FAQ/>
        <Footer/>
        </>
    )

}
export default Help;