import { useState } from "react";
import Title from "./Title";
import ProcessingModal from "../ProcessingModal";

const Ask = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // استیت برای خطاها
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    message: "",
    general: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // پاک کردن خطاهای قبلی
    setErrors({ fullName: "", email: "", message: "", general: "" });

    let hasError = false;

    if (!fullName) {
      setErrors((prev) => ({
        ...prev,
        fullName: "نام و نام خانوادگی الزامی است",
      }));
      hasError = true;
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "ایمیل الزامی است" }));
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrors((prev) => ({ ...prev, email: "ایمیل معتبر وارد کنید" }));
        hasError = true;
      }
    }

    if (!message) {
      setErrors((prev) => ({ ...prev, message: "متن درخواست الزامی است" }));
      hasError = true;
    }

    if (hasError) return; // اگر خطا داشتیم، ارسال نشه

    try {
      console.log({ fullName, email, message });

      // شبیه‌سازی ارسال پیام برای دمو
      setLoading(true);
      setIsProcessing(true);

      setTimeout(() => {
        alert("Your message has been sent successfully ✅ (Demo)");
        setFullName("");
        setEmail("");
        setMessage("");
        setLoading(false);
        setIsProcessing(false);
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full my-[10px] flex justify-center top-[26px] py-[30px]">
      <div className="w-full px-[20px] desk:px-[25px] max-w-[1110px] xlarg:px-[40px]">
        <Title />

        <form onSubmit={handleSubmit}>
          <div className="lg:flex lg:justify-between py-[10px] gap-6">
            {/* نام */}
            <div className="flex-1">
              <label className="block h-[22px] font-Abar_Low_FaNum text-Text-General-Text-Light font-semibold text-[14px] mb-[6px]">
                نام و نام خانوادگی
              </label>
              <div className="bg-Stroke-Greyscale-Greyscale-200 w-full border-[1px] border-Surface-General-Surface-Greyscale-200 h-[58px] rounded-lg flex items-center">
                <img
                  className="w-[20px] h-[20px] mr-[20px]"
                  src="/images/ask/profile.svg"
                  alt=""
                />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-[22px] font-Abar_Low_FaNum text-[12px] pr-[10px] bg-transparent focus:outline-none"
                  placeholder="مسعود حبیبی"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-[12px] mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* ایمیل */}
            <div className="flex-1">
              <label className="block h-[22px] font-Abar_Low_FaNum text-Text-General-Text-Light font-semibold text-[14px] mb-[6px]">
                پست الکترونیکی
              </label>
              <div className="bg-Stroke-Greyscale-Greyscale-200 w-full border-[1px] border-Surface-General-Surface-Greyscale-200 h-[58px] rounded-lg flex items-center">
                <img
                  className="w-[20px] h-[20px] mr-[20px]"
                  src="/images/map/email.svg"
                  alt=""
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[22px] font-Abar_Low_FaNum text-grayword text-[12px] pr-[12px] bg-transparent focus:outline-none"
                  placeholder="info@masoudhabibi.art"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* پیام */}
          <div>
            <div className="flex items-center">
              <label className="h-[22px] font-Abar_Low_FaNum text-Text-General-Text-Light font-semibold text-[14px] my-[10px]">
                متن درخواست
              </label>
              <span className="text-red-500 text-[14px] flex justify-center items-center p-[5px]">
                *
              </span>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="resize-none bg-Stroke-Greyscale-Greyscale-200 lg:w-full border-[1px] rounded-lg w-full h-[121px] font-Abar_Low_FaNum text-[12px] pr-[10px] border-Surface-General-Surface-Greyscale-200 focus:outline-none"
              placeholder=""
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-[12px] mt-1">{errors.message}</p>
            )}
          </div>

          {/* خطای کلی */}
          {errors.general && (
            <p className="text-red-600 text-[14px] mt-3">{errors.general}</p>
          )}

          {/* دکمه */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="w-[158px] h-[54px] bg-[#FDB933] flex justify-center items-center rounded-lg text-white my-[30px] text-[16px] font-Abar_Low_FaNum font-bold disabled:opacity-60"
            >
              {loading ? "در حال ارسال..." : "ارسال درخواست"}
            </button>
          </div>
        </form>
      </div>

      {/* مودال پردازش */}
      <ProcessingModal isOpen={isProcessing} message="در حال ارسال پیام..." />
    </div>
  );
};

export default Ask;
