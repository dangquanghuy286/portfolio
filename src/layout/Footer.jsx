import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-lime-200 bg-[#f7fbe9] py-4 dark:border-gray-700 dark:bg-slate-900">
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        © {currentYear} Đặng Hữu Quang Huy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
