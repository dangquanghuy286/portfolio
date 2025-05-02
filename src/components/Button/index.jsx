import React from "react";

const Button = ({ children, variant = "primary", className = "" }) => {
  const variants = {
    primary: "bg-[#0287a8] text-white border-none hover:bg-[#03a0c5]",
    outline:
      "bg-transparent text-[#03a0c5] border-2 border-[#03a0c5] hover:bg-blue-100",
  };

  return (
    <button
      className={`${variants[variant]} px-4 py-2 rounded-3xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
