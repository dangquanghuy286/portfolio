import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { words } from "../../constants";
import { BiLogoMeta } from "react-icons/bi";

const Tape = () => {
  return (
    <section className="overflow-hidden py-24 lg:py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="-mx-[20%] -rotate-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 shadow-2xl [backface-visibility:hidden] will-change-transform">
          {/* Enhanced gradient with more vibrant colors and shadow */}
          {/* -mx-[15%] kéo băng tràn ra 2 bên để góc xoay không bao giờ lộ ra khi bị clip */}

          <div className="mask-gradient-right animate-scroll flex flex-none gap-6 py-4 pr-6">
            {/* Increased spacing for better readability */}

            {[...new Array(3)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <div
                    key={`${index}-${wordIndex}`}
                    className="inline-flex items-center gap-4 whitespace-nowrap"
                  >
                    <span className="text-base font-black uppercase text-white drop-shadow-lg tracking-wider antialiased">
                      {word}
                    </span>
                    <BiLogoMeta className="size-12 -rotate-12 text-white drop-shadow-lg" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tape;
