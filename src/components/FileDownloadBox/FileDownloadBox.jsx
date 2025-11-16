import React, { useState } from "react";

const FileDownloadBox = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-full max-w-[1110px]  mx-auto h-[147px] flex justify-center items-center my-[58px]">
        <div className="w-auto h-full flex flex-col justify-center items-center gap-6.5">
          <img src="/images/annualreport/Frame.png" alt="" />
          <button
            className="self-stretch h-10 px-3 py-2 bg-Secondary-900 rounded-md inline-flex justify-center items-center gap-2.5 hover:scale-105 hover:shadow-lg transition-all duration-200"
            onClick={() => setShowModal(true)}
          >
            <img src="/images/annualreport/Frame1.png" alt="" />
            <div className="text-center justify-center text-Text-Buttons-White text-sm font-bold font-Abar_Low_FaNum leading-snug">
              دانلود pdf کامل گزارش سالانه
            </div>
          </button>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center gap-4 min-w-[300px]">
            <div className="text-base font-bold font-Abar_Low_FaNum text-center mb-2">
              دانلود فایل گزارش سالانه
            </div>
            <a
              href="/files/yekihastim.pdf"
              download
              className="bg-Secondary-900 text-Text-Buttons-White px-6 py-2 rounded hover:scale-105 hover:shadow-lg transition-all duration-200 font-Abar_Low_FaNum"
            >
              دانلود فایل
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 text-sm text-gray-500 hover:text-gray-700 hover:text-bold hover:text-[16px] font-Abar_Low_FaNum"
            >
              بستن
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileDownloadBox;
