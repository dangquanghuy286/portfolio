import React from "react";

const ContactDetailCard = ({ contact }) => {
  return (
    <div className="flex items-center gap-3">
      <span>{contact.icon}</span>
      {contact.link ? (
        <a
          href={contact.link}
          className="text-[#59d102] dark:text-[#03a0c5] hover:underline"
        >
          {contact.value}
        </a>
      ) : (
        <span className="text-gray-700 dark:text-white/70">
          {contact.value}
        </span>
      )}
    </div>
  );
};

export default ContactDetailCard;
