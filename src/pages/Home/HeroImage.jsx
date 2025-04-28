import React from "react";
import userImage from "../../assets/avatar.png";
import AnimatedIcon from "../../components/AnimateIcon";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
const HeroImage = () => {
  return (
    <div
      className="mask-gradient absolute right-0 top-10 h-[550px]
    w-full overflow-hidden rounded-bl-full rounded-br-full border-r-[10px] border-blue-500 bg-gray-700 md:h-[660px] md:w-[450px]"
    >
      <AnimatedIcon
        Icon={BiLogoReact}
        className="left-10 top-24"
      ></AnimatedIcon>
      <AnimatedIcon Icon={BiLogoCss3} className="left-10 top-60"></AnimatedIcon>
      <AnimatedIcon
        Icon={BiLogoTailwindCss}
        className="right-5 top-30"
      ></AnimatedIcon>
      <AnimatedIcon
        Icon={BiLogoJavascript}
        className="right-5 top-60"
      ></AnimatedIcon>
      <img
        src={userImage}
        alt="user image"
        className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"
      />
    </div>
  );
};

export default HeroImage;
