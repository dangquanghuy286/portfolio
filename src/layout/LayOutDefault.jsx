import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop/BackToTop";

const LayOutDefault = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#fafce8] dark:bg-slate-950 min-h-screen flex flex-col">
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
      <footer className="w-full bg-slate-200 dark:bg-slate-900 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Đặng Hữu Quang Huy. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LayOutDefault;
