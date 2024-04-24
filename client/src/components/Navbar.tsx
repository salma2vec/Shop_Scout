import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import LogoImg from "../assets/logo-no-background.png";
import DarkModeToggle from './DarkModeToggle';
import DefaultButton from "./Button/DefaultButton";

const Navbar = () => {
  const navigate = useNavigate();
  
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  
  return (
    <div className="flex items-center justify-center px-8 py-2">
      <div className="flex items-center justify-between w-full">
        <div className="w-20 rounded-full">
          <button className="cursor-pointer" onClick={() => navigate("/")}>
            <img src={LogoImg} alt="logo" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <DefaultButton
            text={ isLoggedin ? "Dashboard" : "Login" }
            backgroundColor={"bg-vividCerulean"}
            onClick={() => {
              if (isLoggedin) {
                navigate('/dashboard');
              } else {
                navigate('/login');
              }
            }}
          />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;