import React from "react";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Home = ({ menuOpen }) => {
  return (
    <section className="overflow-hidden">
      <div
        className={`container transition-all duration-300 ${
          menuOpen ? "px-10 blur-sm" : ""
        }`}
      >
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] gap-10">
          {/* HeroContent hiển thị trước trên mobile */}
          <div className="z-10 w-full md:w-1/2">
            <HeroContent />
          </div>

          {/* HeroImage dưới cùng */}
          <div className="w-full md:w-1/2">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
