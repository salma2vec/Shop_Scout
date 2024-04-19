import React from "react";
import PropTypes from "prop-types";

const DefaultButton = ({ text, color }) => {
  
  return (
    <button className={`px-4 py-1 text-white rounded-full ${color} hover:text-gray-400`}>
      {text}
    </button>
  );
}

DefaultButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default DefaultButton;