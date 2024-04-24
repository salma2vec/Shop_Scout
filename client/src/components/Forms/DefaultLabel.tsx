import React from "react";
import PropTypes from "prop-types";

const DefaultLabel = ({ htmlFor, className, text }) => {
  return (
    <label htmlFor={htmlFor} className={className || "m-0 whitespace-nowrap text-white"}>
      {text}
    </label>
  );
}

DefaultLabel.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default DefaultLabel;