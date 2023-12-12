import React, { useState } from "react";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="w-full h-screen flex items-center justify-center p-10 md:p-20">
      <div className="w-full ">
        <div className="flex flex-col gap-4 items-start justify-center w-full">
          <h1 className="font-bold text-4xl md:text-5xl leading-none max-w-2xl">
            Compare prices of products from different websites
          </h1>
          <p className="text-lg leading-tight md:text-xl">
            Search for a product and compare prices from your favorite websites
          </p>
          <div className="flex items-start md:items-center justify-center md:flex-row flex-col gap-4 mt-4 ">
            <div className="flex items-center justify-center ">
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Find a perfect product"
                className=" py-3 px-6 !mb-0 rounded-full border text-black placeholder:text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lightGreen focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-center">
              <a
                href="#products"
                className="py-3 px-6 rounded-full bg-lightGreen text-white font-bold"
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;