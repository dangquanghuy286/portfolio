import React from "react";
import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const LayOutDefault = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div className="bg-slate-100 dark:bg-slate-950 h-screen overflow-x-clip antialiased flex justify-center items-center ">
        <div className="w-full max-w-5xl px-4 py-4">
          <Header menuOpen={menuOpen} isMenuOpen={setMenuOpen} />
          <Outlet menuOpen={menuOpen} />
        </div>
      </div>
    </div>
  );
};

export default LayOutDefault;
