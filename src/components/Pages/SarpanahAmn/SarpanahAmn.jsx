import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import FourImageGrid from "./FourImageGrid";
import Title from "./Title";
import FAQSection from "./FAQSection/FAQSection";
import SupButton from "../../SupButton/SupButton";

const SarpanahAmn = () => {
  return (
    <>
      <Header />
      <div className="w-full    flex justify-center items-center mt-[150px] mb-[56px]">
        <div className="max-w-[1110px] mx-[20px] xl:mx-0  h-full flex flex-col justify-center items-start gap-[31px]  ">
          <p className=" text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-[1.6]">
            پروژه سرپناه امن
          </p>
          <p className=" text-Text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug w-full">
            سرپناه امن شالوده‌‌ی اساسی برای دستیابی به ارتقا سطح رفاه، سطح
            بهداشت، امنیت، امکان یادگیری و آموزش به حساب می‌آید. با تامین این
            نیاز اولیه می توان به افزایش سطح کیفیت زندگی، امید و مشارکت جامعه و
            نهایتا توسعه پایدار امیدوار بود.
          </p>
        </div>
      </div>
      {/* کارت سفارشی */}
      <div className="w-full  flex  flex-col gap-[25px]">
        {/* کارت اول */}
        <div className="max-w-[1110px] mx-auto  ">
          <div className="max-w-[1110px] mx-[20px] lg:mx-0 flex flex-col lg:flex-row p-4 bg-Surface-General-Surface-General-White rounded-[20px]  outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 gap-4 ">
            <div className="w-full flex flex-col justify-center items-start gap-[23px]">
              <p className="text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed">
                پروژه سرپناه امن: ایجاد فضایی امن و پایدار برای خانواده‌ها
              </p>
              <p className="text-Text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug text-justify">
                پروژه «سرپناه امن» با هدف تأمین امنیت و رفاه برای خانواده‌هایی
                که در شهرستان جازموریان در کپر و خانه‌های ناامن ساکن هستند، با
                تأکید بر ساخت فضاهای زندگی ایمن و پایدار در راستای ارتقاء کیفیت
                زندگی آنان طراحی شد. این پروژه با توجه به شرایط آسیب‌پذیر جامعه
                و نیاز به یک تغییر واقعی، و همچنین با در نظر گرفتن اهمیت سازه
                کپر به عنوان یک میراث معماری و اجتماعی، تلاش می‌کند تا با
                رویکردی انسان‌گرا و جامعه‌محور، گام به گام به سوی ساخت آینده‌ای
                بهتر و امن تر پیش رود.
              </p>
            </div>
            <img
              src="/images/sarpanahamn/image1.jpg"
              className=" w-[328px] md:w-[390px] lg:w-[454px] h-[275px] object-contain mx-auto"
              alt=""
            />
          </div>
          {/* کارت دوم */}
          <div className="max-w-[1110px] mx-auto mt-[30px] ">
            <div className="max-w-[1110px] mx-[20px] lg:mx-0 flex flex-col-reverse lg:flex-row p-4 bg-Surface-General-Surface-General-White rounded-[20px]  outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 gap-4 ">
              <img
                src="/images/sarpanahamn/image2.jpg"
                className=" w-[328px] md:w-[390px] lg:w-[454px] h-[275px] object-contain mx-auto"
                alt=""
              />
              <div className="w-full flex flex-col justify-center items-start gap-[23px]">
                <p className="text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed ">
                  نیازسنجی و شناسایی مشکلات: از روستا به روستا
                </p>
                <p className="text-Text-Greyscale-600  text-sm font-normal font-Abar_Low_FaNum leading-snug text-justify">
                  پروژه «سرپناه امن» با شروع از نیازسنجی دقیق و مشارکتی آغاز شد.
                  تیم ما از همان ابتدا با درک اهمیت دیدگاه‌های جامعه هدف، فرایند
                  شناسایی نیازها را به شکل مشارکتی طراحی کرد. این نیازسنجی شامل
                  مصاحبه‌ها، نظرسنجی‌ها و بازدیدهای میدانی و از همه مهم تر زیست
                  واقعی در روستاها و مناطق آسیب‌پذیر بود. ما با حضور در هر
                  روستا، نه تنها مشکلات آنجا را شناسایی کردیم، بلکه یاد گرفتیم
                  چگونه می‌توانیم از مشارکت و توانمندی‌های مردم برای بهبود شرایط
                  استفاده کنیم. این فرایند ما را به روش‌های جدید و مؤثری برای
                  طراحی و اجرای پروژه هدایت کرد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-[30px] mb-[56px] ">
        <div className="max-w-[1110px] mx-[20px] lg:mx-0  h-full flex flex-col justify-center items-center gap-[31px]  ">
          <p className=" text-Primary-500  text-base font-bold font-Abar_Low_FaNum leading-relaxed">
            متود و روش‌های اجرایی
          </p>
          <p className=" text-Text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-relaxed w-full">
            سرپناه امن شالوده‌‌ی اساسی برای دستیابی به ارتقا سطح رفاه، سطح
            بهداشت، امنیت، امکان یادگیری و آموزش به حساب می‌آید. با تامین این
            نیاز اولیه می توان به افزایش سطح کیفیت زندگی، امید و مشارکت جامعه و
            نهایتا توسعه پایدار امیدوار بود.
          </p>
        </div>
        <div className="">
          <img
            src="/images/sarpanahamn/image3.jpg"
            alt=""
            className="max-w-[1110px] w-[364px]  sm:w-[550px] md:w-[700px] lg:w-full   h-[348px] object-cover mt-[30px]   rounded-[10px]"
          />
        </div>
      </div>
      {/* گرید ۱×۴ */}
      <div className="w-full flex justify-center  items-center">
        <div className=" max-w-[1110px] w-full  flex mx-auto justify-center items-center my-8">
          <div className="  h-full grid grid-cols-2 lg:grid-cols-4 gap-[50px] lg:gap-[90px]  items-center justify-center mx-auto">
            <div className="h-full w-[187px] rounded flex  flex-col items-center justify-center ">
              <div className="w-full h-[70px]  flex justify-center ">
                <div className="w-[52px] h-[52px] rounded-full bg-[#EBF9F3] flex justify-center items-center ">
                  <img
                    src="/images/sarpanahamn/green.svg"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-1">
                <p className="text-Surface-General-Surface-Others-Green text-3xl font-900 font-Abar_Low_FaNum leading-10">
                  ۱۳۰۰
                </p>
                <p className="text-Surface-General-Surface-Others-Green text-sm font-extrabold font-Abar_Low_FaNum leading-snug">
                  خانواده
                </p>
              </div>
              <p className="w-[150px] text-Text-Greyscale-700 text-center text-sm font-semibold font-Abar_Low_FaNum leading-snug ">
                تعداد خانواده هایی که در ابتدای پروژه معرفی شدند.
              </p>
            </div>
            <div className="h-full w-[187px] rounded  flex flex-col items-center ">
              <div className="w-full h-[70px] flex justify-center ">
                <div className="w-[52px] h-[52px] rounded-full bg-[#FFEFEE] flex justify-center items-center ">
                  <img
                    src="/images/sarpanahamn/red.svg"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-1">
                <p className="text-Surface-General-Surface-Others-Red text-3xl font-900 font-Abar_Low_FaNum leading-10">
                  ۳۹۰
                </p>
                <p className="text-Surface-General-Surface-Others-Red text-sm font-extrabold font-Abar_Low_FaNum leading-snug">
                  خانواده
                </p>
              </div>
              <p className="w-[150px] text-Text-Greyscale-700 text-center text-sm font-semibold font-Abar_Low_FaNum leading-snug ">
                تعداد خانواده هایی که شرایطشان بررسی شده.
              </p>
            </div>
            <div className="h-full w-[187px] rounded flex flex-col items-center ">
              <div className="w-full h-[70px]  flex justify-center ">
                <div className="w-[52px] h-[52px] rounded-full bg-[#EEF2FF] flex justify-center items-center ">
                  <img
                    src="/images/sarpanahamn/blue.svg"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-1">
                <p className="text-Surface-General-Surface-Others-Blue text-3xl font-900 font-Abar_Low_FaNum leading-10">
                  ۲۲۳
                </p>
                <p className="text-Surface-General-Surface-Others-Blue text-sm font-extrabold font-Abar_Low_FaNum leading-snug">
                  خانواده
                </p>
              </div>
              <p className="w-[150px] text-Text-Greyscale-700 text-center text-sm font-semibold font-Abar_Low_FaNum leading-snug ">
                تعداد خانواده هایی که در اولویت قرار گرفتند.
              </p>
            </div>
            <div className="h-full w-[187px] rounded flex  flex-col items-center">
              <div className="w-full h-[70px]  flex justify-center ">
                <div className="w-[52px] h-[52px] rounded-full bg-[#F7ECFF] flex justify-center items-center mb-[15px]">
                  <img
                    src="/images/sarpanahamn/purple.svg"
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-1">
                <p className="text-Surface-General-Surface-Others-Purple text-3xl font-900 font-Abar_Low_FaNum leading-10">
                  ۱۳۳
                </p>
                <p className="text-Surface-General-Surface-Others-Purple text-sm font-extrabold font-Abar_Low_FaNum leading-snug">
                  خانواده
                </p>
              </div>
              <p className="w-[180px] text-Text-Greyscale-700 text-center text-sm font-semibold font-Abar_Low_FaNum leading-snug ">
                تعداد خانواده هایی که تا کنون صاحب سرپناه امن شدند.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex  flex-col gap-[25px]">
        {/* کارت سوم */}
        <div className="max-w-[1110px] mx-[20px] lg:mx-auto flex flex-col lg:flex-row  p-4 bg-Surface-General-Surface-General-White rounded-[20px]  outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 gap-4 ">
          <div className="w-full flex flex-col justify-center items-start gap-[23px] lg:p-[20px]">
            <p className="text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed">
              ارزیابی و بهبود مستمر: انعطاف‌پذیری و رشد در کنار جامعه
            </p>
            <p className="text-Text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug text-justify">
              در پروژه «سرپناه امن»، ما همواره به ارزیابی مستمر و بهبود روندها
              پایبند بوده‌ایم. ارزیابی‌ها نه تنها در سطح فنی و ساختاری بلکه در
              سطح اجتماعی و فرهنگی نیز انجام می‌شود. این ارزیابی‌ها به ما کمک
              کرده تا روش‌های اجرایی خود را بازنگری کرده و در صورت نیاز، تغییرات
              لازم را اعمال کنیم. این فرایند مداوم ما را به سمت یادگیری و اصلاح
              حرکت داده است تا بتوانیم بهترین خدمت را به جامعه هدف ارائه دهیم.
            </p>
          </div>
          <img
            src="/images/sarpanahamn/image4.jpg"
            className=" w-[328px] md:w-[390px] lg:w-[454px] h-[275px] object-contain mx-auto"
            alt=""
          />
        </div>
        {/* کارت چهارم */}
        <div className="max-w-[1110px] mx-[20px] lg:mx-auto flex flex-col-reverse lg:flex-row  p-4 bg-Surface-General-Surface-General-White rounded-[20px]  outline-2 outline-offset-[-2px] outline-Stroke-Greyscale-Greyscale-200 gap-4 ">
          <img
            src="/images/sarpanahamn/image5.jpg"
            className=" w-[328px] md:w-[390px] lg:w-[454px] h-[275px] object-contain mx-auto"
            alt=""
          />
          <div className="w-full flex flex-col justify-center items-start gap-[23px] lg:p-[20px]">
            <p className="text-Primary-500 text-base font-bold font-Abar_Low_FaNum leading-relaxed">
              چالش‌ها و آینده پروژه
            </p>
            <p className="text-Text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug text-justify">
              با وجود پیشرفت‌های چشمگیر، هنوز چالش‌هایی مانند تأمین منابع مالی و
              هماهنگی‌های نهادهای مختلف وجود دارد. اما ما با توجه به تجربه‌های
              به دست آمده از تعامل مستقیم با جامعه و انعطاف‌پذیری در مسیر اجرای
              پروژه، به خوبی آماده مواجهه با این چالش‌ها هستیم. در آینده‌ای
              نزدیک، امیدواریم تمامی خانواده‌ها که نیازمند سرپناهی امن هستند،
              این امکان را داشته باشند که فضایی پایدار و مناسب برای زندگی خود
              پیدا کنند.
            </p>
            <p className="text-Text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug text-justify">
              پروژه «سرپناه امن» همچنان در حال گسترش است و ما در کنار
              یادگیری‌های پیوسته، متعهد به ادامه مسیر و تکمیل پروژه در سطحی
              وسیع‌تر هستیم.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full max-w-[1110px] h-[26px]  my-[50px] mx-auto flex justify-center  items-center ">
        <span className="  w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          گالری عکس‌های سرپناه امن
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>
      <FourImageGrid
        images={[
          "/images/sarpanahamn/image4.jpg",
          "/images/sarpanahamn/image1.jpg",
          "/images/sarpanahamn/image6.jpg",
          "/images/sarpanahamn/image2.jpg",
        ]}
      />
      <div className=" w-full max-w-[1110px] h-[26px]  my-[50px] mx-auto flex justify-center  items-center ">
        <span className="  w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          سوالات پرتکرار درباره سازه‌های «توپی»
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>
      <FAQSection />
      <SupButton />
      <Footer />
    </>
  );
};

export default SarpanahAmn;
