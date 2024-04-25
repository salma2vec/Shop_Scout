import React from "react";
import PropTypes from "prop-types";

const DefaultInput = ({ type, name, className, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange || (() => {})}
      className={className || "w-full py-3 px-6 m-0 rounded border text-black placeholder:text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teleMagenta focus:border-transparent transition duration-300 ease-in-out"}
      required={required || false}
    />
  );
}

DefaultInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default DefaultInput;