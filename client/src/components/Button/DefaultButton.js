import React from "react";
import PropTypes from "prop-types";

const DefaultButton = ({ text, backgroundColor, backgroundColorHover, onClick }) => {
  
  return (
    <button className={`px-4 py-1 text-white rounded-full ${backgroundColor} hover:${backgroundColorHover || "text-gray-100"} hover:text-gray-400`} onClick={onClick}>
      {text}
    </button>
  );
}

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  onClick: PropTypes.func,
};

export default DefaultButton;