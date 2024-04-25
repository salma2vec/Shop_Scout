import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

const Footer = () => {

  const preferedTheme = useSelector((state) => state.user.preferedTheme);
  
  return (
    <div className={classNames(['flex', 'justify-center', {
      'bg-lighterBlack text-lighterWhite': preferedTheme === 'dark',
      'bg-lightWhite text-darkerBlack': preferedTheme === 'light',
      }]
    )}>
      <div className="">
        <p className={classNames('font-bold ', 'shadow', 'text-md', {
          'text-lighterWhite': preferedTheme === 'dark',
          'text-darkerBlack': preferedTheme === 'light',
          }
        )}>ShopScout 2024</p>
      </div>
    </div>
  );
};

export default Footer;