import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "./Footer";

const LayOutDefault = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[##fcfdf0] dark:bg-slate-950 min-h-screen flex flex-col">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Header menuOpen={menuOpen} isMenuOpen={setMenuOpen} />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 ">
        <Outlet menuOpen={menuOpen} />
      </main>
      <BackToTop />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LayOutDefault;
