import React, { useState, useRef } from "react";
import { useRouter } from "next/router";

const Success = ({ goToSabt, goToIam, authority, closeModal }) => {
  const router = useRouter();
  const navigate = router.push;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const mobileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // چک کردن خالی نبودن
    if (!name || !email || !mobile) {
      setError("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    // regex برای ایمیل
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("ایمیل معتبر وارد کنید.");
      return;
    }

    // regex برای موبایل (11 رقم و با 09 شروع بشه)
    const mobileRegex = /^09\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      setError("شماره موبایل معتبر وارد کنید.");
      return;
    }

    setError(""); // پاک کردن خطاها
    setLoading(true);

    // شبیه‌سازی ارسال اطلاعات برای دمو
    setTimeout(() => {
      setLoading(false);
      goToIam(); // نمایش مودال نشان حامی
    }, 1500);
  };
  return (
    // لایه پس‌زمینه تار و نیمه شفاف که کل صفحه رو میپوشونه
    <div className="fixed inset-0 z-99 flex items-center justify-center  min-h-screen  ">
      <div
        className="absolute inset-0  h-full bg-[#00000085]/52 backdrop-blur-[6px] pointer-events-auto cursor-pointer"
        aria-hidden="true"
        onClick={closeModal}
      />
      {/* کارت اصلی */}
      <div className="relative sm:w-[90%] lg:h-[507px]  bg-Text-General-White h-full p-5 w-full lg:w-[640px]   overflow-auto  shadow-lg pointer-events-auto z-10">
        {/* آیکون موفقیت */}
        <div className=" w-full flex justify-center rounded-md mb-4">
          <img
            className="w-[80px] h-[80px]"
            src="images/success/moafagh.svg"
            alt="موفق"
          />
        </div>

        {/* عنوان */}
        <div className="w-full flex justify-center mb-5">
          <h1 className="font-Abar_Low_FaNum font-bold text-[22px] text-Text-General-Text-Light">
            Payment Successful (Demo)
          </h1>
        </div>

        {/* توضیح */}
        <p className="font-Abar_Low_FaNum text-[14px] leading-relaxed text-gray-600 mb-5">
          به خانواده <span className="text-Primary-500">«یکی هستیم»</span> خوش
          آمدید. اکنون شما هم یکی از ما هستید. لطفاً نام و اطلاعات تماس‌تان را
          به ما بدهید تا با هم در تماس باشیم.
        </p>

        {/* فرم */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4  pt-[20px] overflow-hidden flex flex-col lg:flex-row lg:justify-between  "
        >
          {/* نام */}
          <div className="w-full  lg:pl-[10px]">
            <div>
              <label className="text-sm font-semibold font-Abar_Low_FaNum">
                نام و نام خانوادگی <span className="text-red-500">*</span>
              </label>
              <div
                className="h-[58px] mt-[10px] px-5 py-4 bg-[#EEEEEE] rounded-[10px] flex items-center gap-3 cursor-text"
                onClick={() => nameInputRef.current?.focus()}
              >
                <img
                  src="/images/annualreport/Profile.svg"
                  className="w-5 h-5"
                />
                <input
                  ref={nameInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-right text-xs font-semibold font-Abar_Low_FaNum focus:outline-none"
                  placeholder="مثال: مسعود حبیبی"
                />
              </div>
            </div>

            {/* ایمیل */}
            <div>
              <label className="text-sm font-semibold font-Abar_Low_FaNum">
                پست الکترونیکی <span className="text-red-500">*</span>
              </label>
              <div
                className="h-[58px] mt-[10px] px-5 py-4 bg-[#EEEEEE] rounded-[10px] flex items-center gap-3 cursor-text"
                onClick={() => emailInputRef.current?.focus()}
              >
                <img src="/images/success/email.svg" className="w-5 h-5" />
                <input
                  ref={emailInputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-right text-xs font-semibold font-Abar_Low_FaNum focus:outline-none"
                  placeholder="مثال: masoudhabibi@info.com"
                />
              </div>
            </div>
          </div>
          {/* موبایل */}
          <div className="w-full lg:pr-[10px]">
            {" "}
            <div>
              <label className="text-sm font-semibold font-Abar_Low_FaNum">
                شماره موبایل <span className="text-red-500">*</span>
              </label>
              <div
                className="h-[58px] mt-[10px] px-5 py-4 bg-[#EEEEEE] rounded-[10px] flex items-center gap-3 cursor-text"
                onClick={() => mobileInputRef.current?.focus()}
              >
                <img
                  src="/images/annualreport/Calling.svg"
                  className="w-5 h-5"
                />
                <input
                  ref={mobileInputRef}
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full text-right text-xs font-semibold font-Abar_Low_FaNum focus:outline-none"
                  placeholder="مثال: 09126595780"
                />
              </div>
            </div>
            {/* پیام خطا */}
            {error && (
              <div className="text-right absolute mt-2 mb-2 text-red-500 text-sm font-Abar_Low_FaNum">
                {error}
              </div>
            )}
            {/* دکمه ارسال */}
            <div className="w-full h-[130px] flex justify-center items-center ">
              <button
                type="submit"
                disabled={loading}
                className={`w-full  h-14 bg-Secondary-900 rounded-[10px] flex justify-center items-center hover: hover:shadow-lg transition-all duration-200 ${
                  loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg"
                }`}
              >
                <span className="text-white text-base font-medium font-Abar_Low_FaNum">
                  {loading
                    ? "Sending (Demo) ...."
                    : "Submit Information (Demo)"}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Success;
