import React from "react";

const YearReport = () => {
  return (
    <div className="max-w-[1110px] mx-auto flex flex-col mb-[20px] ">
      {/* تیتر با خطوط */}
      <div className=" w-full h-[26px]  mx-auto flex justify-center  items-center ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          گزارشات سال 1403
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>
      {/* دیو پایینی: دو دیو کنار هم */}
      <div className=" w-full  h-[150px] lg:h-[77px] flex justify-center items-center mt-[40px] ">
        <div className=" w-1/3 h-full flex justify-end lg:justify-start items-center ">
          <div className="w-[143px] lg:w-full h-[120px] lg:h-full ml-[40px] flex-col items-center lg:flex lg:flex-row ">
            <div className="w-full lg:w-[60px] h-[47px]  flex justify-center mb-[10px] lg:mb-0 ">
              {" "}
              <div className="w-[47px] h-[47px] bg-[#00723B14] rounded-full flex justify-center items-center">
                <img src="/images/yearreport/heart.svg" alt="" />
              </div>
            </div>
            <div className="w-full  lg:pr-[30px]  ">
              <div className="w-full flex justify-center lg:justify-start  items-center gap-1  ">
                <h1 className="font-Abar_Low_FaNum text-[18px] font-semibold leading-[1.6] text-Text-Greyscale-800">
                  ۱۸۰۵۶
                </h1>
                <h1 className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-800">
                  نفر
                </h1>
              </div>
              <div className="w-full h-full ">
                <h1 className="flex text-center font-Abar_Low_FaNum font-regular text-[12px] leading-[1.6] text-Text-Greyscale-600  lg:whitespace-nowrap  ">
                  کمک کننده در سایت تا امروز
                </h1>
              </div>
            </div>
          </div>
        </div>
        <span className="w-[1px] h-[120px] lg:h-[47px] bg-Stroke-Greyscale-Greyscale-300 "></span>
        <div className=" w-1/3 h-full flex items-center lg:justify-end   ">
          <div className="w-[143px] h-[120px] lg:h-full lg:w-full   mr-[40px] lg:mr-[100px] flex-col justify-center lg:flex lg:flex-row  lg:items-center ">
            <div className="w-full lg:w-[60px] h-[47px]  flex justify-center mb-[10px] lg:mb-0">
              {" "}
              <div className="w-[47px]  h-[47px] bg-[#29AAE114] rounded-full flex justify-center items-center">
                <img src="/images/yearreport/home.svg" alt="" />
              </div>
            </div>
            <div className="w-full lg:h-[47px] lg:pr-[30px] ">
              <div className="w-full flex justify-center items-center lg:justify-start gap-1 ">
                <h1 className="font-Abar_Low_FaNum text-[18px] font-semibold leading-[1.6] text-Text-Greyscale-800">
                  15
                </h1>
                <h1 className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-800">
                  از
                </h1>
                <h1 className="font-Abar_Low_FaNum text-[18px] font-semibold leading-[1.6] text-Text-Greyscale-800">
                  1300
                </h1>
                <h1 className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-800">
                  خانه
                </h1>
              </div>
              <div className="w-full h-full ">
                <h1 className="flex text-center font-Abar_Low_FaNum font-regular text-[12px] leading-[1.6]  lg:whitespace-nowrap text-Text-Greyscale-600  ">
                  تعداد خانه های توپی ساخته شده
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearReport;
