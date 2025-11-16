import React from "react";

const PaymentResultSelector = ({ goToSuccess, goToFaild, closeModal }) => {
  return (
    // لایه پس‌زمینه تار و نیمه شفاف که کل صفحه رو میپوشونه
    <div className="fixed inset-0 z-99 flex items-center justify-center min-h-screen">
      <div
        className="absolute inset-0 h-full bg-[#00000085]/52 backdrop-blur-[6px] pointer-events-auto cursor-pointer"
        aria-hidden="true"
        onClick={closeModal}
      />

      {/* کارت اصلی */}
      <div className="relative sm:w-[90%] lg:w-[640px] bg-Text-General-White h-auto p-8 w-full overflow-auto shadow-lg pointer-events-auto z-10 rounded-lg">
        {/* آیکون دمو */}
        <div className="w-full flex justify-center rounded-md mb-4">
          <div className="w-[80px] h-[80px] bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
        </div>

        {/* عنوان */}
        <div className="w-full flex justify-center mb-5">
          <h1 className="font-Abar_Low_FaNum font-bold text-[22px] text-Text-General-Text-Light text-center">
            Select Payment Result
          </h1>
        </div>

        {/* توضیح */}
        <div className="text-center mb-6">
          <p className="font-Abar_Low_FaNum text-[14px] leading-relaxed text-gray-600 mb-3">
            🚀 This is a demo version - in the main project, the payment gateway
            is active.
          </p>
          <p className="font-Abar_Low_FaNum text-[14px] leading-relaxed text-gray-600">
            Choose the payment result you want to simulate:
          </p>
        </div>

        {/* دکمه‌های انتخاب */}
        <div className="flex flex-col gap-4">
          {/* دکمه پرداخت موفق */}
          <button
            onClick={goToSuccess}
            className="w-full h-14 bg-green-600 hover:bg-green-700 rounded-[10px] flex justify-center items-center hover:shadow-lg transition-all duration-200"
          >
            <span className="text-white text-base font-medium font-Abar_Low_FaNum">
              ✅ Payment Successful
            </span>
          </button>

          {/* دکمه پرداخت ناموفق */}
          <button
            onClick={goToFaild}
            className="w-full h-14 bg-red-600 hover:bg-red-700 rounded-[10px] flex justify-center items-center hover:shadow-lg transition-all duration-200"
          >
            <span className="text-white text-base font-medium font-Abar_Low_FaNum">
              ❌ Payment Failed
            </span>
          </button>
        </div>

        {/* توضیح پایین */}
        <div className="mt-6 text-center">
          <p className="font-Abar_Low_FaNum text-[12px] leading-relaxed text-gray-500">
            In the real project, this selection is made automatically by the
            payment gateway.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentResultSelector;
