/* eslint-disable no-unused-vars */
import React from "react";
import { twMerge } from "tailwind-merge";

const AnimatedIcon = ({ Icon, className }) => {
  return (
    <div className={twMerge(`flex absolute`, className)}>
      <Icon className="text-white" size={50} />
    </div>
  );
};

export default AnimatedIcon;
