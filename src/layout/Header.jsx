import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../util/menu";
import Button from "../components/Button";
import MobileMenu from "../components/MobileMenu";
import Logo from "../components/Logo";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import DarkMode from "../components/DarkMode";

const Header = ({ menuOpen, isMenuOpen }) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 w-full px-4 py-4">
        <nav className="w-full max-w-7xl mx-auto dark:text-white text-black flex items-center justify-between rounded-full border-2 border-gray-200 dark:border-white/10 bg-white/5 p-2 backdrop-blur">
          {/* Logo Section */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden space-x-4 md:flex">
            {menu.map((item, index) =>
              item.link.map((link, linkIndex) => (
                <li key={`${index}-${linkIndex}`}>
                  <NavLink className="nav_item" to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              ))
            )}
          </ul>

          {/* Right Section: Dark Mode & Button */}
          <div className="flex items-center justify-between gap-4">
            <div className="hidden md:block">
              <DarkMode />
            </div>
            <div className="hidden md:block">
              <Button variant="outline">Liên hệ với tôi</Button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="text-4xl dark:text-white md:hidden"
            onClick={() => isMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <BiX className="text-2xl" />
            ) : (
              <BiMenuAltRight className="text-2xl" />
            )}
          </button>
        </nav>
      </header>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 bg-slate-950 opacity-50"
          onClick={() => isMenuOpen(!menuOpen)}
          aria-label="Close Menu"
        />
      )}

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} isMenuOpen={isMenuOpen} menu={menu} />
    </>
  );
};

export default Header;
