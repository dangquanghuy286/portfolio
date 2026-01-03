import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { words } from "../../constants";
import { BiLogoMeta } from "react-icons/bi";

const Tape = () => {
  return (
    <section className="overflow-x-clip py-24 lg:py-32 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="-mx-1 -rotate-4 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 shadow-2xl">
          {/* Enhanced gradient with more vibrant colors and shadow */}

          <div className="mask-gradient-right animate-scroll flex flex-none gap-6 py-4 pr-6">
            {/* Increased spacing for better readability */}

            {[...new Array(3)].map((_, index) => (
              <Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <motion.div
                    key={`${index}-${wordIndex}`}
                    className="inline-flex items-center gap-4 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-base font-black uppercase text-white drop-shadow-lg tracking-wider">
                      {/* Enhanced typography with white text and drop shadow */}
                      {word}
                    </span>
                    <BiLogoMeta className="size-12 -rotate-12 text-white drop-shadow-lg" />
                    {/* Larger icon with white color and drop shadow */}
                  </motion.div>
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
