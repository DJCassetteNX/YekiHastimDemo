import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const SwiperSection = () => {
  const swiperRef = useRef(null);

  // آرایه تصاویر - می‌توانید تصاویر خود را اضافه کنید
  const images = [
    "/images/swipersection/Frame 1000003968.png",
    "/images/swipersection/Frame 1000004070.png",
    "/images/swipersection/Frame 1000004071.png",
    "/images/swipersection/Frame 1000003968.png",
    "/images/swipersection/Frame 1000004070.png",
    "/images/swipersection/Frame 1000004071.png",
  ];

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

  return (
    <div className="">
      <div className="max-w-[1110px] mx-auto my-[30px] relative">
        {/* دکمه‌های سفارشی */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-yellow-500/70 text-white  text-[20px] rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          ›
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-yellow-500/70 text-white  text-[20px] rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
        >
          ‹
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={5}
          slidesPerView={3}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className="SwiperSectionSwiper w-full h-full"
          breakpoints={{
            // برای صفحات کوچک‌تر
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: false,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="w-[320px] mx-auto h-[420px] rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`اسلاید ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSection;
