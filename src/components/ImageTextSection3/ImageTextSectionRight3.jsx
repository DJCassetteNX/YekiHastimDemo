import React from "react";

const ImageTextSectionRight3 = () => {
  return (
    <div className="max-w-[1110px]  lg:px-[100px]  lg:items-center mx-auto flex-col lg:flex lg:flex-row gap-6 ">
      {/* دیو سمت راست - متن */}
      <div className="flex px-[20px] lg:px-0 lg:w-[892px] h-auto lg:h-[250px] flex-col lg:flex-row lg:justify-between  ">
        <div className="w-full lg:w-8/12 h-full flex flex-col  justify-center">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-[30px] h-[51px] relative">
              <img
                src="/images/imagetextsection/Ellipse10.png"
                alt=""
                className="w-7 h-6 absolute bottom-2 left-0 z-10"
              />
              <p className="w-5 h-5 absolute bottom-7 right-2 z-20 text-right justify-start text-Primary-500 text-3xl font-semibold font-Abar_Low_FaNum leading-[51.20px]">
                ۳
              </p>
            </div>
            <div className="text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed pr-1">
              دریافت پیامک در همه مراحل
            </div>
          </div>
          <div className="w-full text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug">
            ما با شما از طریق پیامک در ارتباط خواهیم بود و کلیه گزارشات لازم را
            به‌‌دست شما می‌رسانیم.
          </div>
        </div>
        {/* دیو سمت چپ - عکس */}
        <div className="h-full flex justify-center rounded-lg ">
          <img
            src="/images/imagetextsection/give-sms.svg"
            alt="تصویر"
            className="w-[364px] h-[364px]  lg:w-[250px] lg:h-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageTextSectionRight3;
