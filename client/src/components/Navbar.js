import React from "react";
import LogoImg from "../assets/logo-no-background.png";
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <div className="flex items-center justify-center px-20 py-5">
      <div className="flex items-center justify-between w-full">
        <div className="w-24 rounded-full">
          <img src={LogoImg} alt="logo" className="" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <a href="/login" className="text-white hover:text-gray-400">
            Login
          </a>
          <a href="/signup" className="text-white hover:text-gray-600 bg-lightGreen rounded-full px-4 py-1">
            Sign Up
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;