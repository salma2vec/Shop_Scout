import React from "react";

const BannerEnv = () => {
  return (
    <div className="py-2 text-center text-white bg-red-400">
      <p className="text-lg">{`You're currently in the ${process.env.NODE_ENV} environement.`}</p>
    </div>
  );
};

export default BannerEnv;