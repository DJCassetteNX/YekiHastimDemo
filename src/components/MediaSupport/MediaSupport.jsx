import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const MediaSupport = () => {
  const [imageErrors, setImageErrors] = useState({});

  const media = [
    { id: 1, name: "رسانه 1", logo: "./images/mediasupport/new/1.png" },
    { id: 2, name: "رسانه 2", logo: "./images/mediasupport/new/2.png" },
    { id: 3, name: "رسانه 3", logo: "./images/mediasupport/new/3.png" },
    { id: 4, name: "رسانه 4", logo: "./images/mediasupport/new/4.png" },
    { id: 5, name: "رسانه 5", logo: "./images/mediasupport/new/5.png" },
    { id: 6, name: "رسانه 6", logo: "./images/mediasupport/new/6.png" },
    { id: 7, name: "رسانه 7", logo: "./images/mediasupport/new/7.png" },
    { id: 8, name: "رسانه 8", logo: "./images/mediasupport/new/8.png" },
    { id: 9, name: "رسانه 9", logo: "./images/mediasupport/new/9.jpg" },
  ];

  return (
    <div className="max-w-[1110px] px-[20px] h-[119px] lg:h-[141px] mx-auto flex flex-col mb-[30px]   justify-between ">
      {/* دیو بالایی - تیتر */}
      <div className=" w-full h-[26px]  mx-auto flex justify-center items-center  ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          رسانه‌ها
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>

      {/* دیو پایینی - اسلایدر */}
      <div className="w-full h-[68px] mt-[20px]  lg:h-[90px] ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={8}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 8 },
          }}
          speed={1000}
          allowTouchMove={false}
          className="h-full"
        >
          {media.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full flex items-center justify-center px-4">
                <div className="w-[90px]  h-[90px] flex items-center justify-center">
                  {!imageErrors[item.id] ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-[90px] h-[90px]  object-contain"
                      onError={() =>
                        setImageErrors((prev) => ({ ...prev, [item.id]: true }))
                      }
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600 font-abar-low-fanum">
                        {item.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MediaSupport;
