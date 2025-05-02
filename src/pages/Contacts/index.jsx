import React from "react";
import SectionTitle from "../../components/SectionTitle";
import contactImg from "../../assets/contact.svg";
import { contactDetails } from "../../constants";
import ContactDetailCard from "../../components/ContactDetailsCard";

const Contact = () => {
  return (
    <section className="w-full px-4 py-16 dark:bg-slate-950">
      <SectionTitle title="Liên hệ tôi" className="mb-6" />
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-2 border-gray-300 bg-slate-50 dark:border-gray-600 
        rounded-lg  dark:bg-gray-900 p-6 sm:p-8 transition-colors duration-300 shadow-sm"
      >
        {/* Contact Image */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>

        {/* Contact Details and Form */}
        <div className="flex flex-col gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
