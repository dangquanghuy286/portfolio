import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
const BackToTop = () => {
  const [show, setShow] = useState(false);
  const [progressAngle, setProgressAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Total px
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Percent page scrolled
      const scrollPercent = (scrollTop / docHeight) * 100;
      // Convert percent to deg
      const borderAngle = (scrollPercent / 100) * 360;

      setProgressAngle(borderAngle);

      if (scrollTop > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 w-10 h-10 bg-transparent flex items-center justify-center text-[#03a0c5] text-xl cursor-pointer border-none rounded-full transition-all duration-300 ease-in-out z-[1000] ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{
        padding: 0,
      }}
    >
      <span
        className="absolute -top-[1px] -left-[1px] w-[calc(100%+2px)] h-[calc(100%+2px)] rounded-full border-[3px] border-[#03a0c5] z-[1] transition-all duration-300 ease-in-out"
        style={{
          maskImage: `conic-gradient(#03a0c5 ${progressAngle}deg, transparent 0)`,
          WebkitMaskImage: `conic-gradient(#03a0c5 ${progressAngle}deg, transparent 0)`,
        }}
      />
      <span className="text-base transition-all duration-300 ease-in-out">
        <FaArrowUp />
      </span>
    </button>
  );
};

export default BackToTop;
