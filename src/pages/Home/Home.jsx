import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Home = ({ menuOpen }) => {
  return (
    <section className="overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 rounded-3xl"></div>

      <div
        className={`container max-w-8xl mx-auto transition-all duration-500 ease-out relative z-10 ${
          menuOpen ? "px-10 blur-sm scale-95" : "px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="relative flex flex-col-reverse w-full md:flex-row items-center justify-between min-h-[80vh] gap-12">
          {/* HeroContent */}
          <div className="z-10 w-full md:w-1/2">
            <HeroContent />
          </div>

          {/* HeroImage */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
