import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// Components
import DataExtraction from "../assets/illustrations/DataExtraction";
import DefaultInput from "./Forms/DefaultInput";
import DefaultButton from "./Button/DefaultButton";
import Typewriter from "./Typewritter";

// Stores
import { useSelector } from 'react-redux';

/*
 * Hero component
 *
 * @param searchTerm - Search term
 * @param onSearchTermChange - Function to handle search term change
 * @param onCompare - Function to handle comparison
 * 
 * @returns JSX.Element
 */
const Hero = ({searchTerm, onSearchTermChange, onCompare}) => {
  const preferedTheme = useSelector((state) => state.user.preferedTheme);
  
  const [formData, setFormData] = useState({
    search_term: "",
    filter: "",
    topN: 3,
    comparisonWebsites: ["Amazon", "Flipkart", "Snapdeal", "Alibaba"],
  });

  
  const handleSearch = (e) => {
    /*
    * Handle search form submission
    *
    * @param e - Event object
    */
    e.preventDefault();
    formData.search_term = searchTerm;
    formData.country = "IN";
    onCompare(formData);
  };
  
  return (
    <div className="flex flex-wrap-reverse items-center w-full h-screen md:justify-center lg:flex-nowrap">
      <div className="w-full mx-10 md:mx-20">
        <div className="flex flex-col items-start justify-center w-full gap-4">
          
          <Typewriter text='<span className="whitespace-nowrap">Elevate Your <span className="text-teleMagenta">E-commerce</span></span> Intelligence with ShopScout' delay={100} />
          <p className={classNames('text-lg leading-tight md:text-xl', {
            'text-lightWhite': preferedTheme === 'dark',
            'text-darkBlack': preferedTheme === 'light',
          })}>
            An advanced price comparison tool designed to simplify the process of comparing product prices across various websites.
          </p>
          <div className="flex flex-col items-start justify-center gap-4 mt-4 md:items-center md:flex-row ">
            <div className="flex items-center justify-center ">
              <DefaultInput
                placeholder={"Find the Best Deals"}
                onChange={(e) => onSearchTermChange(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <DefaultButton
                text="Search Now"
                backgroundColor="bg-vividCerulean"
                onClick={handleSearch}
              />
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

Hero.propTypes = {
  searchTerm: PropTypes.string,
  onSearchTermChange: PropTypes.func,
  onCompare: PropTypes.func,
};
export default Hero;