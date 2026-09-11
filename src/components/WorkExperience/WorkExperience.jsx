import React, { useState } from "react";
import { motion } from "framer-motion";
import { WORK_EXPERIENCES } from "../../constants";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaHandPointRight } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

function WorkExperience() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 shadow-lg border-2 border-gray-300 dark:border-gray-600 rounded-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Kinh nghiệm làm việc" className="mb-6" />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[9px] sm:left-[11px] top-0 bottom-0 w-[2px] bg-[#03a0c5]" />

          {WORK_EXPERIENCES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="relative flex flex-col md:flex-row gap-3 sm:gap-6 mb-6 sm:mb-10 group"
            >
              <div className="flex-shrink-0 flex md:block items-start md:items-center">
                <div
                  className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#03a0c5] border-4 border-white dark:border-slate-900 mt-0 md:mt-6
                  group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Card */}
              <div
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 sm:p-6 w-full
                hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ml-2 sm:ml-4 mr-1"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex justify-between items-start gap-2 text-left focus:outline-none"
                >
                  <div className="flex gap-3 sm:gap-4 min-w-0">
                    {/* Logo */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>

                    <div className="min-w-0">
                      {/* Role */}
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white break-words">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400 break-words">
                        {item.company}
                      </p>

                      {/* Time */}
                      <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 dark:text-gray-500 mt-1">
                        {item.time}
                      </p>
                    </div>
                  </div>

                  <FaCircleChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 mt-1 sm:mt-2 shrink-0 transition-transform duration-300
                      ${
                        openId === item.id
                          ? "rotate-180 text-[#03a0c5]"
                          : "text-gray-400 dark:text-gray-300"
                      }
                      hover:text-[#03a0c5]`}
                  />
                </button>

                {/* Collapse content */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openId === item.id
                      ? "grid-rows-[1fr] mt-3 sm:mt-4"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {item.details.map((text, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-[#03a0c5] mt-1 shrink-0">
                            <FaHandPointRight />
                          </span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
