import React, { useState, useRef } from "react";
import ProcessingModal from "../ProcessingModal";

const VolunteersForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [activity, setActivity] = useState("");
  const [checked, setChecked] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    activity: "",
    general: "",
  });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const nameInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const activityInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ name: "", mobile: "", activity: "", general: "" });
    setSuccess("");

    let hasError = false;

    if (!name) {
      setErrors((prev) => ({ ...prev, name: "نام و نام خانوادگی الزامی است" }));
      hasError = true;
    }

    if (!mobile) {
      setErrors((prev) => ({ ...prev, mobile: "شماره موبایل الزامی است" }));
      hasError = true;
    } else {
      const mobileRegex = /^09\d{9}$/;
      if (!mobileRegex.test(mobile)) {
        setErrors((prev) => ({ ...prev, mobile: "شماره موبایل معتبر نیست" }));
        hasError = true;
      }
    }

    if (!activity) {
      setErrors((prev) => ({ ...prev, activity: "زمینه فعالیت الزامی است" }));
      hasError = true;
    }

    if (!checked) {
      setErrors((prev) => ({
        ...prev,
        general: "لطفاً پروتکل داوطلبین را تایید کنید",
      }));
      hasError = true;
    }

    if (hasError) return;

    // شبیه‌سازی ارسال درخواست برای دمو
    setLoading(true);
    setIsProcessing(true);

    setTimeout(() => {
      setName("");
      setMobile("");
      setActivity("");
      setChecked(true);
      setSuccess("Your volunteer request has been sent successfully ✅ (Demo)");
      setLoading(false);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* نام */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-right font-Abar_Low_FaNum">
          نام و نام خانوادگی <span className="text-red-500">*</span>
        </label>
        <input
          ref={nameInputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="مثال: مسعود حبیبی"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
      </div>

      {/* موبایل */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-right font-Abar_Low_FaNum">
          شماره موبایل <span className="text-red-500">*</span>
        </label>
        <input
          ref={mobileInputRef}
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="مثال: 09123456789"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.mobile && (
          <p className="text-red-500 text-xs">{errors.mobile}</p>
        )}
      </div>

      {/* زمینه فعالیت */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-right font-Abar_Low_FaNum">
          زمینه فعالیت <span className="text-red-500">*</span>
        </label>
        <input
          ref={activityInputRef}
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="زمینه فعالیت خود را وارد کنید"
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {errors.activity && (
          <p className="text-red-500 text-xs">{errors.activity}</p>
        )}
      </div>

      {/* چک‌باکس */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="checkbox checkbox-info"
        />
        <span className="text-sm font-Abar_Low_FaNum text-right">
          پروتکل داوطلبین و مرامنامه یکی هستیم را مطالعه نموده و رعایت خواهم
          نمود.
        </span>
      </div>

      {/* پیام خطای عمومی */}
      {errors.general && (
        <p className="text-red-500 text-xs">{errors.general}</p>
      )}

      {/* پیام موفقیت */}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      {/* دکمه */}
      <button
        type="submit"
        disabled={loading}
        className={`p-3 rounded-lg font-semibold font-Abar_Low_FaNum text-white bg-Secondary-900 hover:bg-Secondary-900/90 transition-all ${
          loading ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "در حال ارسال..." : "ارسال درخواست"}
      </button>

      {/* مودال پردازش */}
      <ProcessingModal
        isOpen={isProcessing}
        message="در حال ثبت درخواست داوطلبانه..."
      />
    </form>
  );
};

export default VolunteersForm;
