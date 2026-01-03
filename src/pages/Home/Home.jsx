import React from "react";
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Home = ({ menuOpen }) => {
  return (
    <section className="overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20 rounded-3xl"></div>

      <div
        className={`container max-w-7xl mx-auto transition-all duration-500 ease-out relative z-10 ${
          menuOpen ? "px-10 blur-sm scale-95" : "px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className="relative flex flex-col-reverse w-full md:flex-row items-center justify-between min-h-[80vh] gap-12">
          {/* HeroContent with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-10 w-full md:w-1/2"
          >
            <HeroContent />
          </motion.div>

          {/* HeroImage with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
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
