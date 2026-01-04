import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-center space-y-4 ${className}`}
    >
      <div className="relative inline-block">
        <h2
          className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white 
                       bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 
                       bg-clip-text text-transparent"
        >
          {title}
        </h2>

        {/* Decorative line */}
        <div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                       w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
                         rounded-full blur-sm opacity-75"
          />
        </div>
      </div>

      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
