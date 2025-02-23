import Blog from "../../components/Blog/Blog";
import React from "react";
import Navbar from "../../constants/navbar";
import Footer from "../../constants/footer";

const Blogs:React.FC = () =>{
    return(
        <>
        <Navbar/>
        <Blog/>
        <Footer/>
        </>
    )
}

export default Blogs