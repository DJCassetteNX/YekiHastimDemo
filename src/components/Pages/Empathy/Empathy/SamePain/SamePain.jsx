const SamePain = () => {
  return (
    <div className="w-full flex mt-[30px] flex-col gap-7.5">
      <div className="w-full mx-auto transition-all duration-300 ease-linear">
        <h1 className="w-[300px] h-auto font-Abar_Low_FaNum text-[16px]  font-bold text-Primary-500  px-[20px]  lg:px-[45px] ">
          مرهمی مشترک
        </h1>
      </div>
      <div className="">
        <div className=" md:flex md:flex-row ">
          <p className="w-full font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600 pb-[30px] px-[20px]  lg:px-[45px] ">
            در «یکی هستیم»، باور داریم که خانواده، دوستی و اجتماع، ریشه‌های
            زندگی‌اند. وقتی یکی از این پیوندها در سوگ می‌نشیند، تمام تار و پود
            یک جامعه به درد می‌آید. ما عمق این اندوه را می‌فهمیم. و شاید، همدلی
            با خانواده‌ای دیگر—که خود در تلاشی بی‌صدا برای زیستن‌اند—بتواند
            مرهمی باشد، هم برای آن‌ها، هم برای زخمی که سوگ در دل شما به جا
            گذاشته است.
          </p>

          <img
            className=" rounded-lg  w-[364px] md:w-[450px] lg:w-[506px] mx-auto md:mx-[20px] lg:mx-[35px]  object-cover "
            src="/images/symbol-empathy/01-stands.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SamePain;
