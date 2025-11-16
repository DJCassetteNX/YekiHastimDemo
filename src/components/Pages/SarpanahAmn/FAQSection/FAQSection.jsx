import React from "react";

const FAQSection = () => {
  const faqItems = [
    {
      id: 1,
      question: "سازه توپی چیست؟",
      answer: "خالی",
    },
    {
      id: 2,
      question: "توپی از چه مصالحی ساخته می‌شود؟",
      answer:
        "بدنه توپی با مصالح رایج مانند بلوک، گچ و سیمان ساخته می‌شود و سقف آن با شاخه و برگ نخل و دیگر مصالح بومی تکمیل می‌گردد. این ترکیب، هم مقاومت سازه را بالا می‌برد و هم آن را با محیط طبیعی سازگار می‌کند.",
    },
    {
      id: 3,
      question: "آیا امکان نصب امکانات رفاهی مانند برق یا پنجره وجود دارد؟",
      answer: "خالی",
    },
    {
      id: 4,
      question: "چه مزایایی نسبت به کپرهای قدیمی دارد؟",
      answer: "خالی",
    },
    {
      id: 5,
      question: "آیا توپی با فرهنگ منطقه همخوانی دارد؟",
      answer: "خالی",
    },
    {
      id: 6,
      question: "چرا شکل کروی دارد؟",
      answer: "خالی",
    },
    {
      id: 7,
      question: "آیا ساخت توپی در حال حاضر اجرا می‌شود؟",
      answer: "خالی",
    },
  ];

  return (
    <div className="max-w-[1110px] mx-auto mb-[93px] mt-[30px]">
      <div className="w-full join join-vertical bg-base-100">
        {faqItems.map((item, index) => (
          <div
            key={item.id}
            className={`collapse collapse-plus join-item ${
              index !== faqItems.length - 1
                ? "border-b border-Stroke-Greyscale-Greyscale-300"
                : ""
            }`}
          >
            <input type="checkbox" />
            <div className="collapse-title text-Text-General-Text-Light text-sm font-semibold font-Abar_Low_FaNum leading-snug text-right">
              {item.question}
            </div>
            <div className="collapse-content text-Text-Greyscale-600 text-sm font-normal font-Abar_Low_FaNum leading-snug text-justify">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
