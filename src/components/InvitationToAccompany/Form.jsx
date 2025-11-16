import React, { useState, useRef } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [activity, setActivity] = useState("");
  const [checked, setChecked] = useState(true);
  const [error, setError] = useState("");

  // refs برای هر input
  const nameInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const activityInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !mobile || !activity) {
      setError("لطفاً همه فیلدها را پر کنید.");
      return;
    }
    if (!checked) {
      setError("لطفاً پروتکل داوطلبین را تایید کنید.");
      return;
    }
    setError("");
    // ذخیره داده‌ها (مثلاً ارسال به سرور یا ذخیره محلی)
    console.log({ name, mobile, activity, checked });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col justify-start items-start gap-5">
        {/* نام و نام خانوادگی */}
        <div className="self-stretch h-24 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch text-right justify-center">
            <span className="text-Text-General-Text-Light text-sm font-semibold font-Abar_Low_FaNum leading-snug">
              نام و نام خانوادگی
            </span>
            <span className="text-Surface-General-Surface-Others-Red text-sm font-semibold font-Abar_Low_FaNum leading-snug">
              *
            </span>
          </div>
          <div
            className="h-[58px] self-stretch px-5 py-4 bg-[#EEEEEE] rounded-[10px] outline-1 outline-offset-[-1px] outline-[#F5F5F5] inline-flex justify-start items-center gap-3"
            onClick={() => nameInputRef.current && nameInputRef.current.focus()}
            style={{ cursor: "text" }}
          >
            <img
              src="/images/annualreport/Profile.svg"
              className="w-5 h-5 relative"
            />
            <input
              ref={nameInputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex text-right justify-center text-Text-General-Text-Light text-xs font-semibold font-Abar_Low_FaNum leading-snug focus:outline-none focus:border-none"
              placeholder="مثال: مسعود حبیبی"
            />
          </div>
        </div>
        {/* شماره موبایل */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch text-right justify-center">
            <span className="text-Text-General-Text-Light text-sm font-semibold font-Abar_Low_FaNum leading-snug">
              شماره موبایل
            </span>
            <span className="text-Surface-General-Surface-Others-Red text-sm font-semibold font-Abar_Low_FaNum leading-snug">
              *
            </span>
          </div>
          <div
            className="h-[58px] self-stretch px-5 py-4 bg-[#EEEEEE] rounded-[10px] outline-1 outline-offset-[-1px] outline-[#F5F5F5] inline-flex justify-start items-center gap-3"
            onClick={() =>
              mobileInputRef.current && mobileInputRef.current.focus()
            }
            style={{ cursor: "text" }}
          >
            <img
              src="/images/annualreport/Calling.svg"
              className="w-5 h-5 relative"
            />
            <input
              ref={mobileInputRef}
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="flex text-right justify-center text-Text-General-Text-Light text-xs font-semibold font-Abar_Low_FaNum leading-snug focus:outline-none focus:border-none"
              placeholder="مثال: 09126595780"
            />
          </div>
        </div>
        {/* زمینه فعالیت */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch text-right justify-center">
            <span className="text-Text-General-Text-Light text-sm font-semibold font-Abar_Low_FaNum leading-snug">
              زمینه فعالیت
            </span>
            <span className="text-Surface-General-Surface-Others-Red text-sm font-semibold font-Abar_Low_FaNum leading-snug">
              *
            </span>
          </div>
          <div
            className="self-stretch h-32 px-5 py-4 bg-[#EEEEEE] rounded-[10px] outline-1 outline-offset-[-1px] outline-[#F5F5F5] inline-flex justify-end items-start gap-3"
            onClick={() =>
              activityInputRef.current && activityInputRef.current.focus()
            }
            style={{ cursor: "text" }}
          >
            <input
              ref={activityInputRef}
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="flex-1 text-right justify-center text-Text-General-Text-Light text-xs font-semibold font-Abar_Low_FaNum leading-snug focus:outline-none focus:border-none"
              placeholder="زمینه فعالیت خود را وارد کنید"
            />
          </div>
        </div>
        {/* چک باکس */}
        <div className="self-stretch inline-flex justify-end items-start gap-2">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="checkbox checkbox-info hover:scale-110 transition-transform duration-200"
          />
          <div className="flex-1 text-right justify-center">
            <span className="text-Text-General-Brand text-sm font-semibold font-Abar_Low_FaNum underline leading-relaxed">
              پروتکل داوطلبین و مرامنامه یکی هستیم
            </span>
            <span className="text-Text-General-Text-Light text-sm font-semibold font-Abar_Low_FaNum leading-relaxed">
              {" "}
              را مطالعه نموده و موارد آن را رعایت خواهم نمود.
            </span>
          </div>
        </div>
        {/* پیام خطا */}
        {error && (
          <div className="self-stretch text-right text-red-500 text-sm font-Abar_Low_FaNum">
            {error}
          </div>
        )}
        {/* دکمه ارسال */}
        <button
          type="submit"
          className="self-stretch h-14 p-3.5 bg-Secondary-900 rounded-[10px] flex flex-col justify-center items-center gap-3 hover:scale-105 hover:shadow-lg transition-all duration-200"
        >
          <div className="self-stretch text-Text-Buttons-White text-base font-medium font-Abar_Low_FaNum leading-relaxed">
            ارسال درخواست
          </div>
        </button>
      </div>
    </form>
  );
};

export default Form;
