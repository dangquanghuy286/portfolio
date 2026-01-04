/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import aboutImg from "../../assets/about.jpg";
import Button from "../../components/Button";
import { words } from "../../constants";

// Import icon từ react-icons
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineCode,
  HiOutlineTranslate,
} from "react-icons/hi";

const About = () => {
  return (
    <section className="py-14">
      <SectionTitle title="Về tôi" className="mb-6" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center py-8 px-4 sm:px-6 lg:px-8 
        bg-slate-50 dark:bg-slate-900 transition-colors duration-300 border-2 border-gray-300 dark:border-gray-600
        rounded-lg shadow-sm"
      >
        {/* Hình ảnh đại diện */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="Ảnh đại diện"
            className="rounded-full shadow-lg w-40 sm:w-52 md:w-60 h-auto object-cover border-2 border-black"
          />
        </motion.div>

        {/* Phần thông tin chi tiết */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Đặng Hữu Quang Huy
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Tôi là một lập trình viên web với niềm đam mê về công nghệ và thiết
            kế giao diện người dùng. Tôi đã tốt nghiệp ngành Công nghệ Thông tin
            tại Đại học Duy Tân.
          </p>
          <ul className="text-sm sm:text-base text-gray-600 dark:text-gray-400 space-y-2 mb-5">
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-xl text-gray-800 dark:text-gray-200" />
              <span>
                <strong>Email:</strong> huydang2806@gmail.com
              </span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-xl text-gray-800 dark:text-gray-200" />
              <span>
                <strong>Địa chỉ:</strong> Đà Nẵng, Việt Nam
              </span>
            </li>
            <li className="flex flex-wrap items-center gap-2">
              <HiOutlineCode className="text-xl text-gray-800 dark:text-gray-200" />
              <span>
                <strong className="w-full">Kỹ năng:</strong>
              </span>
              {words.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded-md text-gray-800 dark:text-gray-100"
                >
                  {skill}
                </span>
              ))}
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineTranslate className="text-xl text-gray-800 dark:text-gray-200" />
              <span>
                <strong>Ngôn ngữ:</strong> Tiếng Việt, Tiếng Anh
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
