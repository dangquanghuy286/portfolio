import React, { Fragment } from "react";
import { words } from "../../constants";
import { BiLogoMeta } from "react-icons/bi";

const Tape = () => {
  return (
    <section className="overflow-x-clip py-20 lg:py-24">
      <div className="-mx-1 -rotate-3 bg-gradient-to-r from-teal-300 to-[#03a0c5]">
        {/* Vùng chứa chính, có hiệu ứng nghiêng -3 độ và nền gradient từ xanh ngọc đến xanh dương nhạt */}

        <div className="mask-gradient-right animate-scroll flex flex-none gap-4 py-3 pr-4">
          {/* Vùng hiển thị nội dung cuộn ngang (có animation), flex hàng ngang, có khoảng cách giữa các phần tử */}

          {[...new Array(2)].map((_, index) => (
            // Trong React, Fragment là một thành phần đặc biệt được sử dụng để gộp nhiều phần tử con lại mà không sinh ra thêm thẻ DOM không cần thiết
            <Fragment key={index}>
              {/* Lặp lại toàn bộ dải từ `words` hai lần để tạo hiệu ứng cuộn liên tục */}

              {words.map((word, wordIndex) => (
                <div
                  key={`${index}-${wordIndex}`}
                  className="inline-flex items-center gap-4 whitespace-nowrap"
                >
                  {/* Mỗi từ là một nhóm gồm từ và biểu tượng Meta, nằm ngang và không xuống dòng */}

                  <span className="text-sm font-extrabold uppercase text-gray-800">
                    {word}
                  </span>
                  <BiLogoMeta className="size-10 -rotate-12 text-gray-800" />
                  {/* Icon Meta nghiêng 12 độ, kích thước lớn */}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tape;
