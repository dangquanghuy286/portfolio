/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import DarkMode from "../DarkMode";

const MobileMenu = ({ isMenuOpen, menuOpen, menu }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-900 h-full w-3/4 transform border-r-2 dark:border-white/15 dark:bg-white/20 px-4 py-4 backdrop-blur transition-transform duration-300 bg-slate-900 border-slate-950 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center text-white ">
          <Logo />
        </div>
        <div className="w-12 h-12 flex items-center justify-center">
          <DarkMode />
        </div>
      </div>

      <hr className="my-3 border-2 border-white/5" />
      <ul className="mt-5 flex-col flex space-x-3 text-slate-50 ">
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
      <Button variant="outline" className="mt-5 py-2">
        Liên hệ với tôi
      </Button>
    </div>
  );
};

export default MobileMenu;
