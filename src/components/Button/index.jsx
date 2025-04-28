import React from "react";

const Button = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-[#0287a8] text-white border-none hover:bg-[#03a0c5]",
    outline:
      "bg-transparent text-blue-400 border-2 border-blue-300 hover:bg-blue-100",
  };

  return (
    <button className={`${variants[variant]} px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
