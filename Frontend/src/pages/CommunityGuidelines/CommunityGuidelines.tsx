import React from "react";
import Guidelines from "../../components/Guidelines/Guidelines";
import Navbar from "../../constants/navbar";
import Footer from "../../constants/footer";

const CommunityGuidelines:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <Guidelines/>
        <Footer/>
        </>

    )
}

export default CommunityGuidelines;