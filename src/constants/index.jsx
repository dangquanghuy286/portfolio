import projectImage from "../assets/project.png";
import { BiCodeAlt, BiMobileAlt, BiPalette, BiSearchAlt } from "react-icons/bi";

export const menuItems = [
  { label: "Trang chủ", href: "#" },
  { label: "Dự án", href: "#projects" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Dịch vụ", href: "#services" },
  { label: "Liên hệ", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Website Portfolio Cá Nhân",
    image: projectImage,
    description:
      "Một website portfolio cá nhân chuẩn responsive, sử dụng ReactJS và TailwindCSS để giới thiệu kỹ năng và dự án.",
  },
  {
    id: 2,
    title: "Website Thương Mại Điện Tử",
    image: projectImage,
    description:
      "Ứng dụng web bán hàng với chức năng xem sản phẩm, giỏ hàng, đăng nhập. Xây dựng bằng React, Node.js, Express và MongoDB.",
  },
  {
    id: 3,
    title: "Trang Quản Trị Admin",
    image: projectImage,
    description:
      "Dashboard quản lý dữ liệu, trực quan bằng ReactJS, TailwindCSS và Chart.js, dễ dàng tùy chỉnh và mở rộng.",
  },
];

export const services = [
  {
    title: "Lập trình Frontend",
    description:
      "Xây dựng website hiện đại, responsive với ReactJS, Next.js và TailwindCSS.",
    icon: BiCodeAlt,
  },
  {
    title: "Thiết kế giao diện UI/UX",
    description:
      "Thiết kế giao diện người dùng thân thiện và tối ưu trải nghiệm người dùng với Figma.",
    icon: BiPalette,
  },
  {
    title: "Phát triển ứng dụng di động",
    description:
      "Xây dựng ứng dụng di động đa nền tảng bằng React Native và Expo.",
    icon: BiMobileAlt,
  },
  {
    title: "Tối ưu SEO Website",
    description:
      "Cải thiện khả năng hiển thị website trên công cụ tìm kiếm thông qua tối ưu hóa SEO.",
    icon: BiSearchAlt,
  },
];

export const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "huydang2806@gmail.com",
    link: "mailto:huydang2806@gmail.com",
    icon: "📧",
  },
  {
    id: 2,
    type: "Điện thoại",
    value: "+84 905920794",
    link: "tel:+84905920794",
    icon: "📞",
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "linkedin.com/in/đặng-huy-356889350",
    link: "https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-huy-356889350/",
    icon: "🔗",
  },
  {
    id: 4,
    type: "GitHub",
    value: "github.com/dangquanghuy286",
    link: "https://github.com/dangquanghuy286",
    icon: "💻",
  },
];

export const words = [
  "React",
  "Next.js",
  "TailwindCSS",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express",
  "MongoDB",
  "SASS/SCSS",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
];
