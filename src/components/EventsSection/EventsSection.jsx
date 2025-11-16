import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EventsSection = () => {
  const cards = [
    {
      id: 1,
      eventType: "ایونت بهار",
      title: "یک روز با بچه های فوق العاده ما",
      day: "۲۶",
      month: "خرداد",
    },
    {
      id: 2,
      eventType: "ایونت تابستان",
      title: "سفر به طبیعت زیبای جازموریان",
      day: "۱۵",
      month: "تیر",
    },
    {
      id: 3,
      eventType: "ایونت پاییز",
      title: "جشنواره هنر و خلاقیت کودکان",
      day: "۸",
      month: "مهر",
    },
  ];

  const EventCard = ({ card }) => (
    <div className="w-[364px] mx-auto pl-4 pr-4 py-7 bg-Secondary-900 rounded-lg flex flex-row justify-between items-center gap-2">
      <div className="flex flex-col items-center">
        <div className="text-Text-General-White text-4xl font-medium font-Abar_Mid_FaNum leading-10">
          {card.day}
        </div>
        <div className="text-Text-General-White text-sm font-medium font-Abar_Mid_FaNum uppercase">
          {card.month}
        </div>
      </div>

      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2.5">
          <div className="text-Text-General-White text-base font-medium font-Abar_Mid_FaNum uppercase">
            {card.eventType}
          </div>
          <div className="w-11 h-0 outline-1 outline-offset-[-0.50px] outline-Text-General-White"></div>
        </div>
        <div className="text-Text-General-White text-lg font-bold font-Abar_Mid_FaNum leading-7 text-right">
          {card.title}
        </div>
      </div>

      <img
        src="/images/eventsection/Arrow button.svg"
        alt="event"
        className="w-10 h-10"
      />
    </div>
  );

  return (
    <div className="max-w-[1110px] mx-auto mb-[42px] px-4">
      {/* تیتر */}
      <div className="w-full h-[26px] mx-auto flex justify-center items-center mb-6">
        <span className="hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px]"></span>
        <div className="text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap">
          رویدادها
        </div>
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>

      {/* اسلایدر */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="events-swiper"
        // centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: true },
          1124: { slidesPerView: 3, centeredSlides: false },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center">
            <EventCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventsSection;
