import projectImage from "../assets/dashboard.png";
import petImage from "../assets/thuongmaidientu.jpg";
import shoesImage from "../assets/image.png";
import goViet from "../assets/govietapp.png";
import globetrek from "../assets/globetrek.jpg";
import cnpt from "../assets/CNPT.png";
import themeflat from "../assets/themeflat.png";
import chatbot from "../assets/ChatAPP.png";
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
    logo: themeflat,
    time: "08/2025 - 03/2026",
    details: [
      "Chuyển đổi thiết kế Figma/Sketch thành giao diện ReactJS chuẩn pixel-perfect.",
      "Xây dựng các reusable components, tối ưu khả năng tái sử dụng và bảo trì mã nguồn.",
      "Tích hợp RESTful APIs, xử lý dữ liệu realtime và tối ưu trải nghiệm người dùng.",
      "Đảm bảo responsive trên Desktop, Tablet và Mobile theo chuẩn UI/UX.",
      "Thực hiện code review, refactor và tối ưu hiệu năng theo coding standards.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "CNPT",
    logo: cnpt,
    time: "05/2025 - 07/2025",
    details: [
      "Phát triển giao diện người dùng bằng ReactJS, TailwindCSS theo thiết kế Figma.",
      "Xây dựng reusable components và tối ưu hiệu suất hiển thị.",
      "Tích hợp API từ Backend, xử lý dữ liệu động và đồng bộ trạng thái ứng dụng.",
      "Triển khai responsive đa thiết bị và cải thiện trải nghiệm người dùng.",
      "Tham gia code review, sửa lỗi và tối ưu chất lượng mã nguồn.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Shoe Store E-Commerce",
    image: shoesImage,
    description:
      "Phát triển website thương mại điện tử bán giày bằng ReactJS với giao diện hiện đại và responsive. Xây dựng các chức năng quản lý sản phẩm, giỏ hàng, đặt hàng và thanh toán. Tối ưu UI/UX, cải thiện hiệu suất tải trang và mang đến trải nghiệm mua sắm mượt mà trên nhiều thiết bị.",
    link: "https://github.com/khaipro09/ShoeStore",
  },
  {
    id: 2,
    title: "Home Rental Website",
    image: petImage,
    description:
      "Phát triển website giới thiệu và thuê nhà bằng HTML, SCSS, JavaScript và Bootstrap. Thiết kế giao diện responsive, tối ưu trải nghiệm người dùng với hiệu ứng animation từ WOW.js và xây dựng bố cục trực quan, thân thiện trên mọi thiết bị.",
    link: "https://github.com/dangquanghuy286/homelengo-quanghuy.git",
  },
  {
    id: 3,
    title: "AI Travel Booking Platform",
    image: goViet,
    description:
      "Phát triển nền tảng đặt tour du lịch tích hợp AI bằng ReactJS, TailwindCSS và Spring Boot. Tích hợp Gemini AI để tư vấn lịch trình cá nhân hóa, n8n để tự động hóa quy trình, chatbot AI hỗ trợ khách hàng và thanh toán trực tuyến qua VNPay. Xây dựng Dashboard quản trị với Chart.js giúp theo dõi doanh thu, booking và hiệu suất tour theo thời gian thực.",
    link: "https://github.com/dangquanghuy286/BookTour.git",
  },

  {
    id: 4,
    title: "Realtime Chat Application",
    image: chatbot,
    description:
      "Xây dựng ứng dụng nhắn tin thời gian thực bằng ReactJS, Node.js, Express và Socket.IO. Phát triển giao diện với shadcn/ui, hỗ trợ gửi và nhận tin nhắn tức thì, trạng thái online, xác thực người dùng và mang lại trải nghiệm trò chuyện mượt mà.",
    link: "https://github.com/dangquanghuy286/FullReact_NodeJs.git",
  },
  {
    id: 5,
    title: "AI Travel Booking - Admin Dashboard",
    image: projectImage,
    description:
      "Xây dựng Dashboard quản trị cho hệ thống đặt tour du lịch tích hợp AI bằng ReactJS, TailwindCSS và Ant Design. Thiết kế giao diện quản trị hiện đại với thống kê doanh thu, booking, khách hàng và hiệu suất tour thông qua Chart.js. Phát triển các chức năng quản lý tour, danh mục, đơn đặt tour, người dùng, thanh toán VNPay, chatbot AI và phân quyền quản trị (Admin/Staff).",
    link: "https://github.com/dangquanghuy286/DASHBOARD.git",
  },
  {
    id: 6,
    title: "GlobeTrek Travel Website",
    image: globetrek,
    description:
      "Nâng cấp và tối ưu giao diện website du lịch GlobeTrek bằng HTML, SCSS, JavaScript và Bootstrap. Cải thiện UI/UX, tối ưu responsive trên đa thiết bị, bổ sung hiệu ứng animation và tích hợp Google Maps API để hiển thị vị trí và điểm đến trực quan.",
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
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "ReactJS",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "SCSS",
  "Bootstrap",
  "Ant Design",
  "Responsive Design",
  "Node.js",
  "Express.js",
  "REST API",
  "Socket.IO",
  "Chart.js",
  "Git",
  "GitHub",
  "Figma",
];
