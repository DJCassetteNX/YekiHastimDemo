const Sabt = ({ goToIam, closeModal }) => {
  return (
    // لایه پس‌زمینه تار و نیمه شفاف که کل صفحه رو میپوشونه
    <div className="fixed inset-0 z-99 flex items-center justify-center min-h-screen ">
      <div
        className="absolute inset-0  h-full bg-[#00000085]/52 backdrop-blur-[6px] pointer-events-auto cursor-pointer"
        aria-hidden="true"
        onClick={closeModal}
      />
      {/* کارت اصلی */}
      <div className=" w-[340px] h-[430px] relative bg-Text-General-White  p-5    overflow-auto  shadow-lg pointer-events-auto z-10">
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
            ثبت موفق
          </h1>
        </div>

        {/* توضیح */}
        <p className="font-Abar_Low_FaNum text-[14px] mx-[20px] text-center leading-relaxed text-gray-600 mb-5">
          از اینکه به ما پیوستید بی‌نهایت خوشحالیم. گزارش دادن از ما دعوت کردن
          دوستان دیگر از شما.
        </p>

        {/* دکمه ها */}
        <div className="w-full flex flex-col justify-center px-[20px] h-[150px] ">
          <button className="w-full bg-Surface-General-Surface-Others-Green rounded-lg text-Text-Buttons-White font-Abar_Low_FaNum font-bold text-[14px] h-[54px]">
            گزارش و پیگیری بلوک کمک شده
          </button>
          <button
            onClick={() => goToIam()}
            className="w-full bg-Secondary-900 rounded-lg text-Text-Buttons-White font-Abar_Low_FaNum font-bold text-[14px] h-[54px] mt-[15px]"
          >
            دریافت و اشتراک نشان حامی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sabt;
