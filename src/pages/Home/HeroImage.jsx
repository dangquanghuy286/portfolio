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
    <div className="mask-gradient relative w-full max-w-[450px] overflow-hidden rounded-bl-full rounded-br-full border-r-[10px] border-[#03a0c5] bg-gray-700 md:h-[660px]">
      {/* <AnimatedIcon Icon={BiLogoReact} className="left-10 top-15" />
      <AnimatedIcon Icon={BiLogoCss3} className="left-5 top-40" />
      <AnimatedIcon Icon={BiLogoTailwindCss} className="right-5 top-20" />
      <AnimatedIcon Icon={BiLogoJavascript} className="right-5 top-40" /> */}
      <img
        src={userImage}
        alt="user"
        className="relative bottom-0 left-1/2 w-full max-w-[450px] -translate-x-1/2"
      />
    </div>
  );
};

export default HeroImage;
