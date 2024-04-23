import React, { useState } from "react";
import { useSelector } from 'react-redux';

// Components
import LogoImg from "../assets/logo-no-background.png";
import DarkModeToggle from './DarkModeToggle';
import DefaultButton from "./Button/DefaultButton";

const Navbar = () => {
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  
  return (
    <div className="flex items-center justify-center px-8 py-2">
      <div className="flex items-center justify-between w-full">
        <div className="w-20 rounded-full">
          <img src={LogoImg} alt="logo" className="" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <DefaultButton
            text={ isLoggedin ? "Dashboard" : "Login" }
            backgroundColor={"bg-vividCerulean"}
          />
          {/* <a href="/signup" className="px-4 py-1 text-white rounded-full hover:text-gray-600 bg-lightGreen">
            Sign Up
          </a> */}
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;