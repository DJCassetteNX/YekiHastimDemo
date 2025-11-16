const EventsCampaigns = () => {
  return (
    <>
      <div className="w-full   flex justify-center items-center my-[58px]">
        <div className="w-full max-w-[1110px] h-full flex flex-col justify-center items-center gap-12.5">
          <div className="w-full mt-[20px] mx-auto flex flex-col">
            <div className=" w-full max-w-[1110px] h-[26px]   mx-auto flex justify-center   items-center ">
              <span className="  w-full h-[1px]  bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
              <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap bg-gre ">
                رویدادها و کمپین‌ها
              </div>{" "}
              <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
            </div>
          </div>
          <div className="self-stretch px-[20px] lg:px-0  flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-justify justify-start text-Text-Greyscale-800 text-sm font-bold font-Abar_Low_FaNum leading-snug">
              در راستای جذب حمایت و معرفی پروژه سرپناه امن، مجموعه‌ای از
              رویدادها و کمپین‌های موفق برگزار شده است:
            </div>
            <div className="self-stretch text-justify justify-start text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
              <div className="flex flex-row  justify-start items-center gap-2">
                <div
                  aria-label="status"
                  className="status status-neutral"
                ></div>
                <p>
                  {" "}
                  دو رویداد مهمانی شام در رستوران آولی با حضور ۴۰۰ مهمان (یلدای
                  ۱۴۰۲ و نوروز ۱۴۰۳)، که منجر به آشنایی شرکت‌ها و جذب حمایت برای
                  پروژه شد.
                </p>
              </div>
              <div className="flex flex-row  justify-start items-center gap-2">
                <div
                  aria-label="status"
                  className="status status-neutral"
                ></div>
                <p>
                  رویداد نقاشی تعاملی و نمایشگاه آثار بزرگمهر حسین‌پور در
                  اردیبهشت ۱۴۰۳، که در آن ۴۰ اثر از مجموعه "یک کاریکاتوریست در
                  حرمسرای ناصرالدین شاه" اهدا و به فروش رسید.
                </p>
              </div>
              <div className="flex flex-row  justify-start items-center gap-2">
                <div
                  aria-label="status"
                  className="status status-neutral"
                ></div>
                <p>
                  رویداد فروش آثار هنری رهام بابایی فرد در بهمن ۱۴۰۳، که شامل ۷۰
                  قطعه دست‌ساز اهدایی از این هنرمند بود.
                </p>
              </div>
              <div className="flex flex-row  justify-start items-center gap-2">
                <div
                  aria-label="status"
                  className="status status-neutral"
                ></div>
                <p>
                  حمایت از پروژه سرپناه امن در مکان‌های مختلف از جمله حراج
                  تهران، مرکز خرید پالادیوم، هدیش مال، کافه بیکری روستار،
                  رستوران هلوشف، رستوران بونو، باشگاه ورزشی گردان، شرکت بازلی،
                  باشگاه ورزشی تهران یوگا بوتیک، هواپیمایی وارش، و مزون نغمه
                  کیومرثی.
                </p>
              </div>
            </div>
            <div className="self-stretch text-justify justify-start text-Text-Greyscale-800 text-sm font-bold font-Abar_Low_FaNum leading-snug">
              این رویدادها نقش کلیدی در جلب مشارکت و جذب مسئولیت اجتماعی شرکت‌ها
              (CSR) برای توسعه و پایداری پروژه ایفا کرده‌اند.
            </div>
            <div className="self-stretch text-justify justify-start text-Text-Greyscale-800 text-sm font-normal font-Abar_Low_FaNum leading-snug">
              <div className="flex flex-row  justify-start items-center gap-2">
                <div
                  aria-label="status"
                  className="status status-neutral"
                ></div>
                <p>
                  {" "}
                  کمپین دیجیتال "ده خانه تا نوروز" برای جذب کمک مردمی برای تامین
                  هزینه های ساخت ده خانه توپی در اسفند ۱۴۰۳
                </p>
              </div>
              <div className="flex flex-row  justify-start items-center gap-2">
                <div
                  aria-label="status"
                  className="status status-neutral"
                ></div>
                <p>
                  کمپین مردمی برای جذب کمک برای ۲۰۰۰ بسته غذایی برای مناطق محروم
                  با حمایت برندهای مطرح
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCampaigns;
