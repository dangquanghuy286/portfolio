import React, { useState } from "react";
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
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionTitle title="Kinh nghiệm làm việc" className="mb-6" />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line chỉ hiển thị trên md trở lên */}
          <div className="hidden md:block absolute left-3 top-0 bottom-0 w-[2px] bg-[#03a0c5]" />

          {WORK_EXPERIENCES.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col md:flex-row gap-6 mb-10 group transition-all duration-300"
            >
              {/* Dot */}
              <div className="flex-shrink-0 flex md:block items-start md:items-center">
                <div
                  className="relative z-10 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#03a0c5] border-4 border-white dark:border-slate-900 mt-0 md:mt-6
                                group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Card */}
              <div
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 w-full 
                              hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex justify-between items-start text-left focus:outline-none"
                >
                  <div className="flex gap-4">
                    {/* Logo */}
                    <div className="w-16 h-16 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                      {item.logo && (
                        <img
                          src={item.logo}
                          alt={item.company}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                        {item.company}
                      </p>
                      <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 mt-1">
                        {item.time}
                      </p>
                    </div>
                  </div>

                  <FaCircleChevronDown
                    className={`w-6 h-6 mt-2 transition-transform duration-300 
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
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === item.id ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <ul className="space-y-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
                    {item.details.map((text, index) => (
                      <li key={index} className="flex items-stretch gap-2">
                        <span className="text-[#03a0c5] mt-1">
                          <FaHandPointRight />
                        </span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
