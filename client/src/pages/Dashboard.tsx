import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

// Components
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const preferedTheme = useSelector((state) => state.user.preferedTheme);

  const wrapperClasses = classNames('h-screen', 'flex', 'flex-col', 'transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });

  return (
    <div className={wrapperClasses}>
      <Navbar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;