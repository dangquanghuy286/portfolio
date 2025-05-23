import React from "react";

const SectionTitle = ({ title, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="inline-block border-b-4 border-[#21b3d3] pb-2 font-cabin text-xl font-semibold text-[#0287a8] dark:text-white/60 uppercase tracking-widest">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
