import React from "react";
import PropTypes from "prop-types";

const DefaultButton = ({ text, color, onClick }) => {
  
  return (
    <button className={`px-4 py-1 text-white rounded-full ${color} hover:text-gray-400`} onClick={onClick}>
      {text}
    </button>
  );
}

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default DefaultButton;