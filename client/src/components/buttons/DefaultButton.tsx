import React from "react";
import classNames from "classnames";

type DefaultButtonProps = {
  text: string;
  classes: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  textSize?: string;
  fontBold?: string;
  padding?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const DefaultButton = (props) => {
  
  return (
    <button
      className={classNames([
        props.classes,
        props.padding || "px-4 py-1",
        props.textSize || "text-lg",
        props.fontBold || "font-semibold",
        "text-white",
        "rounded",
        props.backgroundColor || "bg-vividCerulean",
        props.backgroundColorHover || "hover:bg-vividCeruleanDark",
        "hover:shadow-md",
        props.disabled ? "cursor-not-allowed bg-gray-400 hover:bg-gray-500" : "cursor-pointer",
      ])}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}


export default DefaultButton;