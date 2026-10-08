import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const variants = {
    primary:
      "bg-[#59d102] text-white border-none hover:bg-[#6fe61a] dark:bg-[#0287a8] dark:text-white dark:hover:bg-[#03a0c5]",
    outline:
      "bg-transparent text-[#3f9a01] border-2 border-[#59d102] hover:bg-[#59d102]/15 dark:text-[#03a0c5] dark:border-[#03a0c5] dark:hover:bg-blue-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} px-4 py-2.5 rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
