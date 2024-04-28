import React from "react";
import classNames from "classnames";

type DefaultPillsProps = {
  label: string;
  classes: string;
};

const DefaultPills = (props: DefaultPillsProps) => {
  return (
    <div className={classNames(['rounded', 'px-2', 'py-0.2', 'shadow', props.classes])}>
      <span className="text-sm">{props.label}</span>
    </div>
  );
};

export default DefaultPills;