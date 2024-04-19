import React, { useState } from "react";
import DataExtraction from "../assets/illustrations/DataExtraction";
import DefaultInput from "./Forms/DefaultInput";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-wrap-reverse items-center w-full h-screen md:justify-center lg:flex-nowrap">
      <div className="w-full mx-10 md:mx-20">
        <div className="flex flex-col items-start justify-center w-full gap-4">
          <h1 className="max-w-2xl text-4xl font-bold leading-none md:text-5xl drop-shadow">
            Elevate Your E-commerce Intelligence with ShopScout
          </h1>
          <p className="text-lg leading-tight md:text-xl">
            An advanced price comparison tool designed to simplify the process of comparing product prices across various websites.
          </p>
          <div className="flex flex-col items-start justify-center gap-4 mt-4 md:items-center md:flex-row ">
            <div className="flex items-center justify-center ">
              <DefaultInput
                placeholder={"Find the Best Deals"}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#products"
                className="px-6 py-3 font-bold text-white rounded-full bg-lightGreen"
              >
                Search Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-10 md:mx-20">
        <DataExtraction />
      </div>
    </div>
  );
}

export default Hero;