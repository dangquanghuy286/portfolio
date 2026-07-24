/* eslint-disable no-unused-vars */
import React from "react";

const ProjectCart = ({ projects, index }) => {
  return (
    <div className="group cursor-pointer h-full overflow-hidden rounded-2xl border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-slate-900 p-6 md:flex md:items-start gap-6 shadow-lg transition-all duration-300 ease-in-out flex-col hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400 dark:hover:border-cyan-500">
      {/* Image Section */}
      <div className="w-full flex justify-center mb-5 md:mb-0">
        <div className="relative w-full overflow-hidden rounded-lg shadow-md">
          <a
            href={projects.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <img
              src={projects.image}
              alt={projects.title}
              className="w-full aspect-video object-cover rounded-lg transition-all duration-500 ease-in-out group-hover:scale-110"
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
      <div className="flex-1 flex flex-col gap-4 h-full">
        <a
          href={projects.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-space line-clamp-1 transition-all duration-300 group-hover:text-cyan-500 hover:text-cyan-500 dark:hover:text-cyan-400">
            {projects.title}
          </h2>
        </a>

        <hr className="border-t-2 dark:border-white/5 border-gray-200 transition-all duration-300 group-hover:border-cyan-400/50" />

        <p className="dark:text-white/70 text-gray-700 text-sm line-clamp-4">
          {projects.description}
        </p>

        <a
          href={projects.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block w-fit px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:from-purple-500 group-hover:to-cyan-500"
        >
          Xem chi tiết
        </a>
      </div>
    </div>
  );
};

export default ProjectCart;
