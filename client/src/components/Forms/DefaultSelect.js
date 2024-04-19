import React from "react";
import PropTypes from "prop-types";

const DefaultSelect = ({ id, name, value, className, onChange, options }) => {
  return (
    <select
      id={id}
      name={name}
      className={className || "text-white m-0 bg-transparent border border-white rounded-full focus:border-teleMagenta focus:ring-0 py-3 px-6"}
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

DefaultSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })),
};

export default DefaultSelect;