/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../Button";

const ProjectCart = ({ projects, index }) => {
  return (
    <div
      className="sticky overflow-hidden rounded-2xl border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-slate-900 p-6 md:flex md:items-center gap-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
      style={{ top: `calc(100px + ${index * 150}px)` }}
    >
      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white font-space">
          {projects.title}
        </h2>
        <hr className="border-t-2 dark:border-white/5 border-gray-200" />
        <p className="dark:text-white/70 text-gray-700 text-sm">
          {projects.description}
        </p>
        <Button className="w-fit px-4 py-2 text-sm whitespace-nowrap">
          Xem chi tiết
        </Button>
      </div>

      {/* Image Section */}
      <div className="mt-5 w-full md:w-1/3 md:mt-0">
        <img
          src={projects.image}
          alt={projects.title}
          className="h-60 w-full rounded-lg object-cover shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-2"
        />
      </div>
    </div>
  );
};

export default ProjectCart;
