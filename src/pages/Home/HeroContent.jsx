import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { openContactMail } from "../../util/contact";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-left space-y-6 md:max-w-lg lg:max-w-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
        className="space-y-2"
      >
        <p
          className="text-lg font-medium text-transparent bg-gradient-to-r 
                     from-blue-500 to-cyan-500 bg-clip-text"
        >
          👋 Xin chào, tôi là
        </p>
        <h1 className="text-2xl font-bold text-[#03a0c5] dark:text-cyan-400">
          Đặng Hữu Quang Huy
        </h1>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
        className="text-4xl lg:text-6xl font-bold leading-tight"
      >
        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=48&duration=4000&pause=1000&color=00c0d1&vCenter=true&width=600&lines=Frontend+Developer;QA+Tester;UI/UX+Designer;Web+Developer;Test+Engineer;Product+Designer"
          alt="Typing SVG"
          className="max-w-full h-auto"
        />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.3, ease: "easeOut" }}
        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md"
      >
        Đam mê xây dựng các giải pháp phần mềm
        <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-semibold">
          {" "}
          mở rộng và hiệu quả
        </span>
        . Tạo ra những trải nghiệm web tuyệt vời.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
      >
        <Button className="group" onClick={openContactMail}>
          <span className="flex items-center gap-2">
            Liên hệ với tôi
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </span>
        </Button>

        <a
          href="./DangHuuQuangHuy_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="group">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Tải CV
            </span>
          </Button>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.5, ease: "easeOut" }}
        className="flex items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
      >
        <div className="text-center">
          <div
            className="text-2xl font-bold text-transparent bg-gradient-to-r 
                         from-blue-500 to-purple-500 bg-clip-text"
          >
            6+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Dự án hoàn thành
          </div>
        </div>
        <div className="text-center">
          <div
            className="text-2xl font-bold text-transparent bg-gradient-to-r 
                         from-green-500 to-teal-500 bg-clip-text"
          >
            1+
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Năm kinh nghiệm
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
