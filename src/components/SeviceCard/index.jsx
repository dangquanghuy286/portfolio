import React from "react";

const ServicesCard = ({ services }) => {
  return (
    <div
      className="flex flex-col gap-4 rounded-lg border-2 border-gray-300  dark:border-gray-600 dark:bg-slate-900 bg-slate-50  
      p-6 transition-shadow duration-300 hover:shadow-lg h-full"
    >
      <div className="flex justify-center">
        <services.icon
          className="rounded-full border-2 border-white/15 dark:bg-white/10 bg-gray-100/50 
          p-3 text-5xl text-[#03a0c5] dark:text-blue-300 transition-colors duration-200 
          hover:bg-blue-100 dark:hover:bg-[#03a0c5] w-16 h-16"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white/80 mb-2">
          {services.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-white/40 leading-relaxed">
          {services.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
