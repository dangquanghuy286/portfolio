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
        <div className="relative flex h-screen flex-col-reverse items-center md:flex-row">
          <HeroImage />
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Home;
