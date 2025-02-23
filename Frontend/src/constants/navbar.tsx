import React from "react";
import {Link}from "react-router-dom"

const Navbar: React.FC = () => {
  return (
    <nav className=" text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center ">
       
       <Link to="/">
        <h1 className="text-3xl font-bold selection:bg-white selection:text-black ml-15 hover:cursor-pointer">
          Escape
        </h1>
        </Link>

        <div className="font-medium flex flex-row gap-10 selection:bg-white selection:text-black">
          <Link to='/howitworks' className="p-2 hover:cursor-pointer hover:bg-white hover:text-black  animation duration-400 rounded-[70px]">How it Works</Link>
          <Link to='/help' className="p-2 hover:cursor-pointer hover:bg-white hover:text-black  animation duration-400 rounded-[70px]">Help Center</Link>
          <Link to='/becomeahost' className="p-2 hover:cursor-pointer hover:bg-white hover:text-black  animation duration-400 rounded-[70px]">Become a Host</Link>
          <a className="p-2 hover:cursor-pointer hover:bg-white hover:text-black  animation duration-400 rounded-[70px]">English</a>
        </div>
        
        <div className="hidden md:flex space-x-6 mr-15 selection:bg-black selection:text-white">
       <Link to='/login'> <button className="px-4 py-2 rounded-[6px] border bg-white text-black hover:cursor-pointer hover:bg-gray-300">
            Login
        </button>
        </Link>
       
       <Link to='/signup'>
        <button className="px-4 py-2 rounded-[6px] border bg-white text-black hover:cursor-pointer hover:bg-gray-300">
            Sign Up
        </button>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
