import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../util/menu";
import Button from "../components/Button";
import { BiLogoGraphql, BiMenuAltRight, BiX } from "react-icons/bi";
import MobileMenu from "../components/MobileMenu";

const Header = ({ menuOpen, isMenuOpen }) => {
  return (
    <>
      <header className="fixed top-0 z-10 w-full px-4 py-4">
        <nav className="container text-white flex items-center justify-between rounded-full border-2 border-white/10 bg-white/5 p-2 backdrop-blur">
          <div className="flex items-center">
            <BiLogoGraphql className="cursor-pointer text-4xl text-white" />
          </div>
          <ul className="hidden space-x-4 md:flex">
            {menu.map((item, index) =>
              item.link.map((link, linkIndex) => (
                <li key={`${index}-${linkIndex}`}>
                  <NavLink to={link.path}>{link.text}</NavLink>{" "}
                </li>
              ))
            )}
          </ul>
          <div className="hidden md:block">
            <Button>Contact Me</Button>
          </div>

          {/* Menu Toggle Button */}
          <button>
            {menuOpen ? (
              <BiX className="text-2xl" />
            ) : (
              <BiMenuAltRight className="text-2xl" />
            )}
          </button>
        </nav>
      </header>
      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        isMenuOpen={isMenuOpen}
        menuItems={menu}
      />
    </>
  );
};

export default Header;
