import projectImage from "../assets/project3.png";
import petImage from "../assets/petshop.png";
import { BiBrain, BiCodeAlt, BiPalette, BiRocket } from "react-icons/bi";

export const projects = [
  {
    id: 1,
    title: "Website chấm trắc nghiệm",
    image: projectImage,
    description:
      "Xây dựng giao diện bằng ReactJS & Tailwind CSSThiết kế hệ thống lưu trữ câu hỏi, bài kiểm tra.Phát triển logic chấm điểm tự động.Tối ưu hiệu suất và xử lý lỗi.Cải thiện UI/UX, nâng cao hiệu suất và trải nghiệm người dùng.",
  },
  {
    id: 2,
    title: "Website Thương Mại Điện Tử",
    image: petImage,
    description:
      "+Công nghệ: HTML, SCSS, JavaScript, REACTJS .Thiết kế giao diện trực quan, responsive, tối ưu trải nghiệm người dùng trên nhiều thiết bị. Phát triển hiệu ứng UI/UX, cải thiện tính tương tác và thẩm mỹ cho sản phẩm.",
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
      "Xây dựng website hiện đại, responsive với ReactJS và TailwindCSS.",
    icon: BiCodeAlt,
  },
  {
    title: "Thiết kế giao diện UI/UX",
    description:
      "Thiết kế giao diện người dùng thân thiện và tối ưu trải nghiệm người dùng với Figma.",
    icon: BiPalette,
  },
  {
    title: "Học hỏi và tích hợp công nghệ mới",
    description:
      "Nhanh chóng tiếp cận và áp dụng các công nghệ Frontend mới như Next.js hoặc TypeScript để nâng cao chất lượng dự án.",
    icon: BiBrain,
  },
  {
    title: "Tối ưu hóa hiệu suất website",
    description:
      "Cải thiện tốc độ tải trang và trải nghiệm người dùng thông qua các kỹ thuật như lazy loading và tối ưu hóa hình ảnh.",
    icon: BiRocket,
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
  {
    id: 5,
    type: "Địa chỉ",
    value: "Quảng Nam ,Việt Nam",
    link: "https://www.google.com/maps/place/Quảng+Nam",
    icon: "📍",
  },
];

export const words = [
  "React",
  "TailwindCSS",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS/SCSS",
  "Git",
  "GitHub",
  "Figma",
  "BootStrap",
  "AntDesign",
  "Responsive Design",
  "UI/UX Basics",
  "RESTful APIs",
];
