import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

// Components
import Navbar from "./Navbar";

type LoadingProps = {
}

const Loading = (props: LoadingProps) => {
  const preferedTheme = useSelector((state) => state.user.preferedTheme);
  
  const wrapperClasses = classNames('h-screen', 'flex', 'flex-col', 'transition', 'transition-all', 'duration-500', 'ease-in-out', {
    'bg-darkBlack': preferedTheme === 'dark',
    'bg-lightWhite': preferedTheme === 'light',
  });
  
  return (
    <div className={classNames(wrapperClasses)}>
      <Navbar />
      <div className="flex items-center justify-center h-full">
        <div className="text-4xl font-bold text-lightWhite">Currently loading</div>
      </div>
    </div>
  );
};

export default Loading;