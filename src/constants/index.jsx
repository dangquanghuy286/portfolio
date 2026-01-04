import projectImage from "../assets/project3.png";
import petImage from "../assets/thuongmaidientu.jpg";
import shoesImage from "../assets/image.png";
import goViet from "../assets/goviet.png";
import globetrek from "../assets/globetrek.jpg";
import cnpt from "../assets/CNPT.png";
import themeflat from "../assets/themeflat.png";
import { BiBrain, BiCodeAlt, BiPalette, BiRocket } from "react-icons/bi";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const iconClass = "text-xl text-gray-800 dark:text-gray-200";
// constants/workExperience.js
export const WORK_EXPERIENCES = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Themes Flat",
    logo: themeflat, // hoặc import image
    time: "08/2025 - 12/2025",
    details: [
      "Cắt và triển khai giao diện chuẩn UI/UX từ Figma/Sketch, đảm bảo đúng flow nghiệp vụ và trải nghiệm người dùng.",
      "Phát triển các component ReactJS reusable, tối ưu hiệu năng, và tuân thủ chuẩn code Evonto.",
      "Tích hợp API từ backend và đảm bảo dữ liệu hiển thị realtime, chính xác và mượt mà.",
      "Tối ưu responsive trên đa thiết bị và trình duyệt, nâng cao trải nghiệm người dùng.",
      "Thực hiện code review, refactor và áp dụng best practices để duy trì chất lượng frontend.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "CNPT",
    logo: cnpt,
    time: "05/2025 - 07/2025",
    details: [
      "Tham gia full quy trình phát triển FE: từ nhận thiết kế, cắt giao diện chuẩn UI/UX, đến triển khai đúng flow nghiệp vụ.",
      "Phát triển các component ReactJS/TailwindCSS reusable, tối ưu performance, và tuân thủ chuẩn code của công ty.",
      "Tích hợp API backend, đảm bảo dữ liệu hiển thị realtime, chính xác và mượt mà trên ứng dụng.",
      "Triển khai responsive trên đa thiết bị và trình duyệt, nâng cao trải nghiệm người dùng.",
      "Tham gia code review, refactor, và áp dụng best practices để đảm bảo chất lượng FE cao.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Website đặt giày",
    image: shoesImage,
    description:
      "Xây dựng website thương mại điện tử chuyên về giày dép với giao diện hiện đại bằng ReactJS  Tích hợp hệ thống đặt hàng, giỏ hàng, thanh toán trực tuyến. Thiết kế responsive, tối ưu trải nghiệm mua sắm trên mọi thiết bị. Cải thiện UI/UX với hiệu ứng tương tác mượt mà.",
    link: "https://github.com/khaipro09/ShoeStore",
  },
  {
    id: 2,
    title: "Website Thương Mại Điện Tử Thuê Nhà",
    image: petImage,
    description:
      "Xây dựng website thương mại điện tử lĩnh vực thuê nhà bằng HTML, SCSS, JavaScript kết hợp Bootstrap và WOW.js. Thiết kế giao diện responsive, tối ưu hiển thị đa thiết bị. Tích hợp animation khi scroll nhằm cải thiện UI/UX và tăng mức độ tương tác người dùng.",
    link: "https://github.com/dangquanghuy286/homelengo-01.git",
  },
  {
    id: 3,
    title: "Website Tour Du Lịch Tích Hợp AI Tư Vấn Lịch Trình",
    image: goViet,
    description:
      "Xây dựng nền tảng du lịch thông minh với AI tư vấn lịch trình cá nhân hóa. Phát triển Client-UI và Dashboard quản lý dữ liệu trực quan bằng ReactJS, TailwindCSS và Chart.js. Tích hợp chatbot AI gợi ý tour, lập kế hoạch chi tiết theo sở thích người dùng và hỗ trợ thanh toán trực tuyến qua VNPay.",
    link: "https://github.com/dangquanghuy286/BookTour.git",
  },
  {
    id: 4,
    title: "Realtime Chatbox Application",
    image: projectImage,
    description:
      "Xây dựng ứng dụng chat thời gian thực với giao diện hiện đại. Phát triển Client UI bằng ReactJS, shadcn/ui và Backend bằng Node.js. Tích hợp Socket.IO cho nhắn tin realtime, hỗ trợ gửi/nhận tin nhắn tức thì, trạng thái online và mang lại trải nghiệm người dùng mượt mà.",
    link: "https://github.com/dangquanghuy286/FullReact_NodeJs.git",
  },
  {
    id: 5,
    title: "Website Tour Du Lịch Tích Hợp AI",
    image: projectImage,
    description:
      "Phát triển website đặt tour du lịch tích hợp AI tư vấn lịch trình cá nhân hóa. Xây dựng Client-UI và dashboard quản trị bằng ReactJS và TailwindCSS, trực quan hóa dữ liệu với Chart.js như doanh thu, số lượng booking và hiệu suất tour. Tích hợp chatbot AI hỗ trợ gợi ý tour và thanh toán trực tuyến qua VNPay.",
    link: "https://github.com/dangquanghuy286/DASHBOARD.git",
  },
  {
    id: 6,
    title: "Website Tour Du Lịch Globetrek",
    image: globetrek,
    description:
      "Chỉnh sửa và nâng cấp giao diện website tour du lịch Globetrek sử dụng HTML, SCSS, JavaScript và Bootstrap. Tối ưu layout responsive, cải thiện UI/UX và hiệu ứng animation với WOW.js. Tích hợp Google Maps API để hiển thị vị trí và điểm đến du lịch trực quan.",
    link: "https://github.com/dangquanghuy286/globetrek.git",
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
    icon: <HiOutlineMail className={iconClass} />,
  },
  {
    id: 2,
    type: "Điện thoại",
    value: "+84 905920794",
    link: "tel:+84905920794",
    icon: <HiOutlinePhone className={iconClass} />,
  },
  {
    id: 3,
    type: "LinkedIn",
    value: "linkedin.com/dangquanghuy286",
    link: "https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-h%E1%BB%AFu-quang-huy-356889350/",
    icon: <FaLinkedin className={iconClass} />,
  },
  {
    id: 4,
    type: "GitHub",
    value: "github.com/dangquanghuy286",
    link: "https://github.com/dangquanghuy286",
    icon: <FaGithub className={iconClass} />,
  },
  {
    id: 5,
    type: "Địa chỉ",
    value: "Đà Nẵng, Việt Nam",
    link: "https://www.google.com/maps/place/Quảng+Nam",
    icon: <HiOutlineLocationMarker className={iconClass} />,
  },
];
export const words = [
  // Frontend core
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "NextJs",

  // Styling & UI
  "TailwindCSS",
  "SASS/SCSS",
  "BootStrap",
  "AntDesign",
  "Responsive Design",
  "UI/UX Basics",

  // Backend & APIs
  "NodeJs",
  "ExpressJs",
  "RESTful APIs",

  // Tools
  "Git",
  "GitHub",
  "Figma",
  "...",
];
