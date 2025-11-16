import React from "react";

const ImageTextSectionLeft4 = () => {
  return (
    <div className="max-w-[1110px]  px-[20] lg:px-[100px] mx-auto  item-center lg:flex lg:flex-row lg:justify-between lg:items-center gap-6 ">
      <div className="flex px-[20px]  lg:px-0 lg:w-[892px] h-auto lg:h-[250px] flex-col-reverse   lg:flex-row lg:justify-between  ">
        <div className="h-[364px] lg:w-[250px] lg:h-[250px]  mt-[20px]  lg:mt-0 flex justify-center   rounded-lg ">
          <img
            src="/images/imagetextsection/give-sign.svg"
            alt="تصویر"
            className="w-[364px] h-[364px] lg:w-[250px] lg:h-[250px] object-cover"
          />
        </div>
        {/* دیو سمت راست - متن */}
        <div className="w-full lg:w-8/12  h-full flex   flex-col lg:pr-[50px]  justify-center ">
          <div className="w-full flex  flex-row gap-2 items-center ">
            <div className="w-[30px] h-[51px] relative">
              <img
                src="/images/imagetextsection/Ellipse10.png"
                alt=""
                className="w-7 h-6 absolute bottom-2 left-0 z-10"
              />
              <p className="w-5 h-5 absolute bottom-7 right-2 z-20 text-right justify-start text-Primary-500 text-3xl font-semibold font-Abar_Low_FaNum leading-[1.6]">
                ۴
              </p>
            </div>
            <div className="text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed pr-1">
              دریافت نشان حامی
            </div>
          </div>
          <div className="w-full text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-relaxed text-justify">
            پس از پرداخت مبلغ اهدایی شما و ثبت اطلاعات شما؛ نشانی از طرف{" "}
            <span className="text-Primary-500 font-semibold">«یکی هستیم»</span>{" "}
            به رسم یادبود تقدیم شما می‌شود. اگر دوست داشتید، این نشان را با
            دوستان و آشنایان خود در شبکه‌های اجتماعی به اشتراک بگذارید تا آنها
            را نیز به این کار خیر دعوت کنید و شما هم سفیر مردم جازموریان باشید و
            با ما یکی شوید.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSectionLeft4;
