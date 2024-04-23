import React from "react";
import packageInfo from '../../package.json';

const BannerEnv = () => {
  return (
    <div className="py-2 text-center text-white bg-red-400">
      <p className="text-sm font-bold">{`You're currently in ${process.env.NODE_ENV} environement on version ${packageInfo.version}.`}</p>
    </div>
  );
};

export default BannerEnv;