import React from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import DarkModeToggle from './DarkModeToggle';
import DefaultButton from "./buttons/DefaultButton";
import LogoAnimation from "./animations/LogoAnimation";
import UserProfileBadge from "./UserProfileBadge";

const Navbar = () => {
  const navigate = useNavigate();
  
  const isLoggedin = useSelector((state) => state.user.isLoggedIn);
  
  return (
    <div className="flex items-center justify-center px-8 py-2">
      <div className="flex items-center justify-between w-full">
        <LogoAnimation />
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
          {
            isLoggedin && <UserProfileBadge />
          }
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;