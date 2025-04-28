import React from "react";
import { BiLogoGraphql } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <BiLogoGraphql className="cursor-pointer text-5xl " />
    </NavLink>
  );
};

export default Logo;
