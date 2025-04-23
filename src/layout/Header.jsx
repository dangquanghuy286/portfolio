import React from "react";
import { menuItems } from "../constants/index";
const Header = () => {
  return (
    <header className="text-white">
      <nav>
        <div></div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
