import React from "react";

const ShelterSupport = () => {
  return (
    <div className="max-w-[1110px] px-[20px] mx-auto flex flex-col gap-6 mb-[42px]">
      {/* دیو بالایی - عنوان */}
      <div className=" w-full h-[26px]  mx-auto flex justify-center  items-center ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          فرایند حمایت از سرپناه امن
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>

      {/* دیو پایینی - متن */}
      <div className="w-full text-justify text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug">
        برای کمک به مردم شریف جازموریان که از ابتدایی ترین امکان زیستن یعنی
        داشتن سرپناه امن محرم هستند؛ حتی کوچک‌ترین کمک نقدی شما هم وقتی با جمع
        عظیمی از خیرین دیگری چون شما همراه شود دریایی می‌شود که می‌تواند مشکل
        کپرنشینی در جازموریان را برای همیشه حل کند. لطفاً صدای مردم جازموریان
        باشید و ما را به دوستان و آشنایان خود معرفی کنید.
      </div>
    </div>
  );
};

export default ShelterSupport;
