import * as React from 'react';
import LogoImg from '../assets/logo-no-background.png';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const animationProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: '50%',
        cy: '23%',
      },
      svg: {
        transform: 'rotate(40deg)',
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: '100%',
        cy: '0%',
      },
      svg: {
        transform: 'rotate(90deg)',
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  return (
    <div className={isDarkMode ? 'bg-black' : 'bg-white'}>
      <div className="flex items-center justify-center px-20 py-5">
        <div className="flex items-center justify-between w-full">
          <div className="w-24 rounded-full">
            <img src={LogoImg} alt="logo" className="" />
          </div>
          <div className="flex items-center justify-center gap-4">
            {/* Login and Sign Up Options */}
            <a href="/login" className={isDarkMode ? 'text-gray-400' : 'text-black hover:text-gray-400'}>
              Login
            </a>
            <a
              href="/signup"
              className={isDarkMode ? 'text-gray-600 bg-gray-800 rounded-full px-4 py-1' : 'text-white hover:text-gray-600 bg-lightGreen rounded-full px-4 py-1'}
            >
              Sign Up
            </a>

            {/* Dark Mode Toggle */}
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={24}
              animationProperties={animationProperties}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;