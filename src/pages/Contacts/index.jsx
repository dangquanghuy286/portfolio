/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion"; // Import thư viện tạo hiệu ứng
import SectionTitle from "../../components/SectionTitle";
import contactImg from "../../assets/contact.svg";
import { contactDetails } from "../../constants";
import ContactDetailCard from "../../components/ContactDetailsCard";

const Contact = () => {
  return (
    <section className="py-14">
      <SectionTitle title="Liên hệ tôi" className="mb-6" />

      {/* Khối chứa toàn bộ nội dung liên hệ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Bắt đầu ẩn và trượt xuống 50px
        whileInView={{ opacity: 1, y: 0 }} // Khi cuộn đến, hiện ra và trượt về đúng vị trí
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation kéo dài 0.8s, mượt dần
        viewport={{ once: true }} // Chỉ thực hiện animation 1 lần khi vào khung nhìn
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-2 border-gray-200 dark:border-gray-600 
        rounded-lg bg-slate-50 dark:bg-gray-900 p-6 sm:p-8 transition-colors duration-300 shadow-sm"
      >
        {/* Ảnh minh hoạ phần liên hệ */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }} // Bắt đầu nhỏ và mờ
          whileInView={{ scale: 1, opacity: 1 }} // Hiện rõ và trở về kích thước thật
          transition={{ duration: 0.6, delay: 0.2 }} // Trễ 0.2s, kéo dài 0.6s
          className="flex justify-center"
        >
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="w-full max-w-sm h-auto object-contain"
          />
        </motion.div>

        {/* Nội dung liên hệ và danh sách chi tiết */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Bắt đầu lệch phải và ẩn
          whileInView={{ x: 0, opacity: 1 }} // Trượt vào từ phải và hiện ra
          transition={{ duration: 0.6, delay: 0.3 }} // Trễ 0.3s, kéo dài 0.6s
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <h1 className="font-cabin text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white/80">
              Gửi tin nhắn cho tôi
            </h1>
            <p className="text-gray-600 dark:text-white/60 text-base sm:text-lg">
              Nếu bạn có thắc mắc hoặc câu hỏi, hãy liên hệ với tôi!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {contactDetails.map((contact, index) => (
              <ContactDetailCard key={contact.id || index} contact={contact} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
