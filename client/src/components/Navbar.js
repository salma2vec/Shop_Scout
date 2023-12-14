import * as React from 'react';
import LogoImg from '../assets/logo-no-background.png';
import { useDarkMode } from '../DarkModeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'bg-black' : 'bg-white'}>
      <div className="flex items-center justify-center px-20 py-5">
        <div className="flex items-center justify-between w-full">
          <div className="w-24 rounded-full">
            <img src={LogoImg} alt="logo" className="" />
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="/login" className={isDarkMode ? 'text-gray-400' : 'text-black hover:text-gray-400'}>
              Login
            </a>
            <a
              href="/signup"
              className={
                isDarkMode
                  ? 'text-gray-600 bg-gray-800 rounded-full px-4 py-1'
                  : 'text-white hover:text-gray-600 bg-lightGreen rounded-full px-4 py-1'
              }
            >
              Sign Up
            </a>
            <button
              onClick={toggleDarkMode}
              className="bg-transparent border border-transparent rounded-full p-2"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;