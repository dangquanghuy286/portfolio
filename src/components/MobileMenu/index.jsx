/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const MobileMenu = ({ isMenuOpen, menuOpen, menu }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-30 h-full w-3/4 transform border-r-2 border-white/15 bg-white/20 px-4 backdrop-blur transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mt-5">
        <Logo />
      </div>
      <hr className="my-3 border-2 border-white/5" />
      <ul className="mt-5 flex-col flex space-x-3 ">
        {menu.map((item, index) =>
          item.link.map((link, linkIndex) => (
            <li key={`${index}-${linkIndex}`}>
              <NavLink className="nav_item px-2 py-2 " to={link.path}>
                {link.text}
              </NavLink>{" "}
            </li>
          ))
        )}
      </ul>
      <Button>Contact Me</Button>
    </div>
  );
};

export default MobileMenu;
