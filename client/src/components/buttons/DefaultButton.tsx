import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DefaultButton = ({ text, backgroundColor, backgroundColorHover, padding, onClick }) => {
  
  return (
    <button className={classNames(`${padding || "px-4 py-1"} text-white rounded ${backgroundColor || "bg-vividCerulean"} ${backgroundColorHover || "hover:bg-vividCeruleanDark"} hover:shadow-md`)} onClick={onClick}>
      {text}
    </button>
  );
}

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  padding: PropTypes.string,
  onClick: PropTypes.func,
};

export default DefaultButton;