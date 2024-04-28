import React from "react";
import classNames from "classnames";

type DefaultInputProps = {
  type: string;
  name: string;
  classes: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  isValid: boolean;
  requiresValidation: boolean;
};

const DefaultInput = (props: DefaultInputProps) => {
  return (
    <input
      type={props.type || "text"}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange || (() => {})}
      className={classNames(props.classes || "w-full py-3 px-6 m-0 rounded border-2 text-black placeholder:text-gray-400 focus:outline-none  transition duration-300 ease-in-out",
        props.requiresValidation ? (props.isValid ? "focus:border-green-500" : "border-red-500") : "focus:border-teleMagenta"
      )}
      required={props.required || false}
    />
  );
}

export default DefaultInput;