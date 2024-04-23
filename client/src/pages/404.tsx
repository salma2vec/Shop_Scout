import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Stores
import { setPreferedTheme } from '../stores/userStore';

// Components
import Navbar from "../components/Navbar";

const NotFound = () => {

  const preferedTheme = useSelector((state) => state.user.preferedTheme);
  
  const wrapperClasses = classNames('flex', 'flex-col', 'h-screen', 'transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });
  
  return (
    <div className={wrapperClasses}>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className={classNames([preferedTheme === 'dark' ? 'text-lighterWhite': 'text-darkerBlack', 'text-6xl', 'font-bold', 'shadow'])}>404</h1>
        <p className={classNames([preferedTheme === 'dark' ? 'text-lighterWhite': 'text-darkerBlack', 'text-xl', 'font-bold', 'shadow'])}>It seems that you're lost, try a different url or <Link to={"/"} className="text-teleMagenta">go home</Link></p>
      </div>
    </div>
  );
};

export default NotFound;