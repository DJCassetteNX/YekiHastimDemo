import React from "react";

const ProcessingModal = ({ isOpen, message = "در حال پردازش..." }) => {
  if (!isOpen) return null;

  // دکمه تست (فقط در development)
  if (process.env.NODE_ENV === "development") {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-[1px]">
        <div className="bg-white rounded-xl p-8 max-w-sm mx-4 shadow-2xl border border-gray-100">
          <div className="flex flex-col items-center space-y-6">
            {/* Spinner */}
            <div className="relative">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              <div
                className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "1.5s",
                }}
              ></div>
            </div>

            {/* Message */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 font-Abar_Low_FaNum mb-3">
                {message}
              </h3>
              <p className="text-sm text-gray-600 font-Abar_Low_FaNum">
                لطفاً صبر کنید...
              </p>
            </div>

            {/* Progress dots */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-Primary-500 rounded-full animate-bounce"></div>
              <div
                className="w-3 h-3 bg-Primary-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-Primary-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>

            {/* دکمه تست */}
            {/* <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
            >
              بستن (تست)
            </button> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md">
      <div className="bg-white rounded-xl p-8 max-w-sm mx-4 shadow-2xl border border-gray-100">
        <div className="flex flex-col items-center space-y-6">
          {/* Spinner */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-Primary-500 rounded-full animate-spin"></div>
            <div
              className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-300 rounded-full animate-spin"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
          </div>

          {/* Message */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 font-Abar_Low_FaNum mb-3">
              {message}
            </h3>
            <p className="text-sm text-gray-600 font-Abar_Low_FaNum">
              لطفاً صبر کنید...
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingModal;
