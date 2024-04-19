import React from "react";
import PropTypes from "prop-types";

const DefaultInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="py-3 px-6 !mb-0 rounded-full border text-black placeholder:text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-lightGreen focus:border-transparent transition duration-300 ease-in-out"
    />
  );
}

DefaultInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DefaultInput;