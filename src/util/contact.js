import { contactDetails } from "../constants"; // chỉnh lại đường dẫn cho đúng với project của bạn

export const openContactMail = () => {
  const email = contactDetails.find((c) => c.type === "Email")?.value;
  if (!email) return;

  const subject = encodeURIComponent("Liên hệ từ Portfolio");
  const body = encodeURIComponent(
    "Xin chào Huy,\n\nTôi muốn trao đổi với bạn về...",
  );

  window.open(
    `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`,
    "_blank",
    "noopener,noreferrer",
  );
};
