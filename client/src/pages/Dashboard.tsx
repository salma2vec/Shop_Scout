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
      <div className={classNames(
        'flex', 'flex-col', 'p-2', 'mx-10', 'rounded', 'shadow',
        preferedTheme === 'dark' ? 'bg-lighterDark' : 'bg-darkerWhite',
      )}>
        <h1 className={classNames(
          preferedTheme === 'dark' ? 'text-lightWhite' : 'text-darkBlack',
        )}>Dashboard</h1>
        <div>
          <span>Last searchs</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;