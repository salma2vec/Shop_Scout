import React from "react";
import LogoImg from "../assets/logo-no-background.png";
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center px-8 py-2" style={}>
      <div className="flex items-center justify-between w-full">
        <div className="w-20 rounded-full">
          <img src={LogoImg} alt="logo" className="" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="/login" className="text-white hover:text-gray-400">
            Login
          </a>
          <a href="/signup" className="px-4 py-1 text-white rounded-full hover:text-gray-600 bg-lightGreen">
            Sign Up
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;