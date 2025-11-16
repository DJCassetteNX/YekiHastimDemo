import React, { useState } from "react";
// import "./styles.css";

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [openId, setOpenId] = useState(null);
  const faqItems = [
    {
      id: 1,
      question: " در ایران چه نظارتی بر سازمان های مردم نهاد وجود دارد؟",
      answer:
        "برای مشارکت در پروژه‌های ما، می‌توانید از طریق فرم تماس با ما در ارتباط باشید یا مستقیماً با شماره‌های موجود تماس بگیرید.",
    },
    {
      id: 2,
      question: "ما کی هستیم؟",
      answer:
        "کانون توسعه گران جوان «یکی هستیم» که به اختصار «یکی هستیم» خوانده می‌شود، سازمانی تخصصی، مردم نهاد، و ثبت شده در وزارت کشور است که از سال ۱۳۹۶ به همت جمعی از فعالان اجتماعی و حمایت خیرین در حوزه امدادرسانی و توسعه پایدار فعالیت خود را در جنوب شرقی کرمان در شهرستان جازموریان آغاز نموده است. «یکی هستیم» با نگاهی عمیق‌تر به مسئولیت اجتماعی هر فرد و یا نهاد نسبت به جامعه ی پیرامون خود، قصد دارد با احترام به فرهنگ بومی هر منطقه، زمینه رشد و پیشرفت را برقرار سازد.",
    },
    {
      id: 3,
      question: "مبلغ ساخت هر توپی چقدر است؟",
      answer:
        "ساخت هرتوپی در سال 1403 با مبلغ هشتاد میلیون تومان تخمین زده شده است. ",
    },
    {
      id: 4,
      question: "چطور می‌توانم داوطلب و یا حامی مستمر یکی هستیم باشم؟",
      answer:
        "برای مشارکت در پروژه‌ها به عنوان داوطلب فرم داوطلبین را پر نمایید، تا برای همراهی با شما تماس گرفته شود. همچنین برای حمایت مستمر از یکی هستیم با شماره‌های  ۲۲۷۵۳۹۵۳ و ۰۹۳۶۱۲۹۳۳۷۸ تماس بگیرید",
    },
    {
      id: 5,
      question:
        "درخواست خانواده‌های متقاضی مسکن جازموریان با چه اصولی ارزیابی و اولویت‌بندی می‌شود؟",
      answer:
        "خانواده‌های متقاضی #سرپناه_امن افرادی هستند که به دلیل مسائل مالی از تسهیلات مسکن که توسط اداره بنیاد مسکن، کمیته امام خمینی و بهزیستی برخوردار نیستند. گروه شناسایی یکی هستیم به کمک دهیاران و افراد معتمد بومی، به دیدار خانواده‌ها رفته و از میان ایشان، خانواده‌هایی که اشتیاق همراهی و مشارکت در اجرای پروژه را دارند به جلسات گفتگو دعوت می‌گردند. مشارکت در اجرا به معنای همراهی در کارگاه‌های تعاملی ظرفیت‌سازی، همراهی در جابه‎‌جایی مصالح، تامین آب مورد نیاز ساخت و ساز و تهیه در و پنجره (در برخی موارد که امکان مالی محدود وجود دارد) می‌باشد. ",
    },
    {
      id: 6,
      question: "موقعیت جغرافیایی جازموریان کجاست و جمعیت آن چقدر است؟",
      answer:
        "جازموریان در جنوب شرقی استان کرمان – در فاصله 380 کیلومتری از شهر کرمان و 300 کیلومتری از بندرعباس واقع شده است. مختصات جغرافیایی مرکز شهرستان (شهر زهکلوت): 27°47’56’’N58°35’09’’E می‌باشد و  از شمال شرقی با شهرستان ریگان، از شمال غربی با شهرستان عنبرآباد، از غرب یا شهرستان رودبار جنوب، از شرق یا شهرستان درگان (استان سیستان و بلوچستان)، و از جنوب با شهرستان قلعه گنج همسایه است. طبق آخرین آمار شبکه بهداشت و درمان شهرستان جازموریان در سال 1402 جمعیت شهرستان جازموریان: 55.384 نفر است. ",
    },
    {
      id: 7,
      question:
        "آیا خانواده‌ها نمی‌توانند از خانه‌های بنیاد مسکن استفاده کنند؟",
      answer:
        "در حال حاضر کسانی که در فهرست پروژه #سرپناه_امن قرار می‌گیرند، به دلیل مسائل مالی و عدم امکان پرداخت وام امکان استفاده از تسهیلات بنیاد مسکن را ندارند، اما داشتن خانه توپی این امکان را از ایشان سلب نخواهد کرد و می‌توانند در صورت امکان در آینده وام مسکن دریافت کنند.",
    },
    {
      id: 8,
      question:
        "مجوز ساخت خانه‌ها چگونه صادر می‌شود و تملک زمین‌ها پس از ساخت با چه کسی است؟",
      answer:
        "مجوز ساخت با هماهنگی بنیاد مسکن و توسط دهیاری صادر می‌گردد. در صورتی که خانواده زمینی از خود نداشته باشند، مالکیت یک قطعه زمین 300 الی 400 متر مربعی همراه با مجوز ساخت به خانواده‌ها واگذار می‌شود. و بر اساس این واگذاری خانواده می‌تواند در آینده از تسهیلات مسکن استفاده نماید. ",
    },
    {
      id: 9,
      question: "سیستم آبرسانی و برق رسانی به خانه‌ها چگونه است؟",
      answer:
        "خانه‌ها در طرح هادی روستا بنا می‌شوند، بنابراین از شبکه آبرسانی و برق‌رسانی روستا بهره مند می‌گردند. خانه‌های توپی بر اساس صلاحدید کارشناسی بنیاد مسکن منطقه، اجازه استفاده از برق و آب قانونی و ایمن را دارند. ",
    },
    {
      id: 10,
      question: " آیا خانه‌های توپی دستشویی و حمام دارند؟",
      answer:
        "با توجه به عرف و فرهنگ منطقه جازموریان، ساختمان‌ دستشویی و حمام در خانه ساخته نمی‌شوند، و با فاصله‌ای معین در محوطه حیاط هر خانه قرار می‌گیرند.  ",
    },
    {
      id: 11,
      question:
        "نظارت دولت بر سازمان‌های مردم نهاد به چه صورت است؟ آیا دولت در پروژه های یکی هستیم مشارکت دارد؟",
      answer:
        " دولت با صدور پروانه فعالیت به سازمان‌های مردم نهاد در حوزه‌های تخصصی امکان فعالیت می‌دهد. همچنینقابل ذکر است که دولت در پروژه‌های یکی هستیم مشارکت مالی ندارد اما در صدور مجوزات، همراه کردن دهیاری‌ها و معتمدین هر روستا و همچنین تسهیل کردن ارزیابی‌ها از پروژه حمایت می‌نماید. ",
    },
    {
      id: 12,
      question: "آیا امکان بازدید از امور مالی پروژه وجود دارد؟",
      answer:
        "گزارشات مالی به صورت منظم برای حامیان پروژه ارائه می‌گردند و امکان بازدید از امور مالی طبق قوانین سازمان، در حضور حسابدار برای حامیان مادی و معنوی پروژه وجود دارد. همچنین اظهارنامه مالیاتی یکی هستیم به صورت منظم و سالانه تنظیم و به ادارات مربوطه ارائه می‌گردد. که این اظهارنامه برای حامیان قابل رویت است.",
    },
    {
      id: 13,
      question: "What is this demo version?",
      answer:
        "This is a version of the main Yeki Hastim website prepared to showcase functionality and design. In this version, the real payment gateway has been removed and replaced with a payment process simulation. In the main project, all payment features and API connections are active.",
    },
  ];

  const displayedItems = showAll ? faqItems : faqItems.slice(0, 4);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-[1110px] mx-auto mb-[42px] bg-[#ffffff]">
      <div className=" w-full h-[26px]  mx-auto mr-[20px] lg:mr-0 flex justify-center  items-center ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          سوالات متداول
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>
      <div className="px-[20px] lg:px-[40px]">
        {displayedItems.map((item) => {
          return (
            <div
              key={item.id}
              className="h-auto flex flex-col justify-center transition-all duration-500 ease-linear border-b-[1px] border-Stroke-Greyscale-Greyscale-300"
            >
              <div
                className="w-full h-[44px] flex justify-between items-center transition-all duration-300 ease-linear cursor-pointer"
                onClick={() => toggle(item.id)}
              >
                <h1
                  className={`font-Abar_Low_FaNum font-semibold text-[14px] leading-[1.6] h-[22px] ${
                    openId === item.id
                      ? "text-Secondary-900"
                      : "text-Text-General-Text-Light"
                  }`}
                >
                  {item.question}
                </h1>
                <img
                  className={`flex justify-center items-center w-[20px] h-[20px] p-[4px] ${
                    openId === item.id ? "!hidden" : "!block"
                  }`}
                  src="./images/about/svg/plus.svg"
                  alt=""
                />
                <img
                  className={`flex justify-center items-center w-[20px] h-[20px] p-[4px] ${
                    openId === item.id ? "!block" : "!hidden"
                  }`}
                  src="./images/about/svg/minus.svg"
                  alt=""
                />
              </div>
              {openId === item.id && (
                <div>
                  <p className="font-Abar_Low_FaNum font-regular text-[14px] leading-[1.6] text-Text-Greyscale-600 pb-[20px]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* دکمه دیدن همه سوالات */}
      {faqItems.length > 4 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-[154px] h-[46px] p-[12px] bg-Secondary-900 text-Text-Buttons-White text-[14px] font-bold font-Abar_Low_FaNum rounded hover:shadow-lg transition-all duration-300 flex items-center justify-center"
          >
            {showAll ? "نمایش کمتر" : "دیدن همه سوالات"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQSection;
