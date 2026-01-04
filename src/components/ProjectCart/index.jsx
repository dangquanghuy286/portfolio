/* eslint-disable no-unused-vars */
import React from "react";

const ProjectCart = ({ projects, index }) => {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-slate-900 p-6 md:flex md:items-center gap-6 shadow-lg transition-all duration-300 ease-in-out flex-col">
      {/* Image Section */}
      <div className="w-full flex justify-center mb-5 md:mb-0">
        <div className="w-full h-60 relative">
          <a
            href={projects.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={projects.image}
              alt={projects.title}
              className="w-full h-full rounded-lg object-cover shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-2"
              style={{
                imageRendering: "-webkit-optimize-contrast",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                transform: "translateZ(0)",
              }}
            />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-space">
          {projects.title}
        </h2>

        <hr className="border-t-2 dark:border-white/5 border-gray-200" />

        <p className="dark:text-white/70 text-gray-700 text-sm">
          {projects.description}
        </p>

        {/* Link styled as Button with hover effect */}
        <a
          href={projects.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-fit px-5 py-2 text-sm font-medium text-white 
                     bg-gradient-to-r from-blue-500 to-purple-500 rounded-full 
                     shadow-md transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-xl hover:from-purple-500 hover:to-blue-500"
        >
          Xem chi tiết
        </a>
      </div>
    </div>
  );
};

export default ProjectCart;
