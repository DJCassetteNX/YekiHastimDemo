import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MemoriesSection = () => {
  const swiperRef = useRef(null);

  const goToPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const cards = [
    {
      id: 1,
      title: "ماموریت 1000 لبخند",
      description: "در فضای باز",
      image: "/images/memoriessection/Tint.png",
    },
    {
      id: 2,
      title: "گشت و گذار هفتگی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک",
      image: "/images/memoriessection/2.png",
    },
    {
      id: 3,
      title: "کارگاه نقاشی خلاقانه",
      description:
        "کودکان ما هنر خود را به نمایش گذاشتند و با رنگ‌ها بازی کردند",
      image: "/images/memoriessection/2.png",
    },
    {
      id: 4,
      title: "روزی با خانواده",
      description: "یک روز شاد با حضور خانواده‌ها و کودکان",
      image: "/images/memoriessection/2.png",
    },
  ];

  const MemoryCard = ({ card }) => (
    <div className="w-[280px] h-[280px] bg-black/60 mx-auto rounded-md overflow-hidden relative">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute right-4 top-16 flex flex-col items-start gap-2">
        <h3 className="text-white text-2xl font-extrabold font-IRANSansXFaNum leading-tight">
          {card.title}
        </h3>
        <p className="text-white text-xs font-normal font-IRANSansXFaNum leading-snug text-justify max-w-[180px]">
          {card.description}
        </p>
      </div>
      <button className="w-[140px] h-[40px] p-[10px] btn btn-sm btn-warning bg-Secondary-900 absolute left-1/2 bottom-3 -translate-x-1/2 font-Abar_Low_FaNum font-bold text-white hover:bg-[#ff8b00] transition-colors duration-300 text-xs">
        اطلاعات بیشتر
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-[1110px] mx-auto mb-[42px] relative">
      {/* تیتر */}
      <div className="w-full h-[26px] mx-auto mr-[20px] lg:mr-0 flex justify-center items-center mb-6">
        <span className="hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px]"></span>
        <div className="text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap">
          خاطراتی از پروژه های ما
        </div>
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>

      {/* دکمه‌های سفارشی */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-yellow-500/70 text-white text-[20px] rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        ›
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-yellow-500/70 text-white text-[20px] rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        ‹
      </button>

      {/* اسلایدر */}
      <Swiper
        ref={swiperRef}
        className="memories-swiper"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1350: { slidesPerView: 3.7 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="flex justify-center">
            <MemoryCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MemoriesSection;
