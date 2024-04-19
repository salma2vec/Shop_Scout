import React from "react";
import PropTypes from "prop-types";

const DefaultCheckbox = ({ id, className, name, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        type="checkbox"
        className={className || "mr-2"}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

DefaultCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default DefaultCheckbox;