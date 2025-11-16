import { useState } from "react";

const Vision = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="transition-all delay-300 ease-linear ">
      <div
        className=" flex justify-between pb-[15px] border-b-[1px] border-Border-Natural-400 transition-all delay-300 ease-linear"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] text-Text-General-Text-Light">
          بیانیه چشم انداز
        </h1>
        <img
          className={
            isOpen === false ? "flex justify-center items-center" : "hidden"
          }
          src="./images/about/svg/plus.svg"
          alt=""
        />
      </div>
      {isOpen && (
        <div>
          <div
            className=" flex justify-between text-Secondary-900 py-[15px] transition-all delay-300 ease-linear"
            onClick={() => setIsOpen(false)}
          >
            <h1 className="font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6]">
              سند ماموریت
            </h1>
            <img
              className=" flex justify-center items-center"
              src="./images/about/svg/minus.svg"
              alt=""
            />
          </div>
          <p className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600 pb-[20px]">
            ما برآنیم تا با ترویج فرهنگ مسئولیت اجتماعی و تلاش در زمینه های
            رفاه، آموزش، سلامت و معیشت به توسعه پایدار در جوامع محلی دست یابیم.
          </p>
        </div>
      )}
    </div>
  );
};

export default Vision;
