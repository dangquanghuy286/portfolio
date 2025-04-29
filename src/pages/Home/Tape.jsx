import React, { Fragment } from "react";
import { words } from "../../constants";
import { BiLogoMeta } from "react-icons/bi";

const Tape = () => {
  return (
    <section className="overflow-x-clip py-20 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-teal-300 to-[#03a0c5]">
        <div className="mask-gradient-right flex flex-none gap-4 py-3 pr-4">
          {[...new Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {words.map((word, wordIndex) => (
                <div
                  key={`${index}-${wordIndex}`}
                  className="inline-flex items-center gap-4"
                >
                  <span className="text-sm font-extrabold uppercase text-gray-800">
                    {word}
                  </span>
                  <BiLogoMeta className="size-10 -rotate-12 text-gray-800" />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tape;
