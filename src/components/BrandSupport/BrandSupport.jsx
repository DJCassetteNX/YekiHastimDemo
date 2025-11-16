import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const BrandSupport = () => {
  const [imageErrors, setImageErrors] = useState({});
  const brands = [
    { id: 1, name: "برند 1", logo: "./images/brandsupport/new/1.png" },
    { id: 2, name: "برند 2", logo: "./images/brandsupport/new/2.png" },
    { id: 3, name: "برند 3", logo: "./images/brandsupport/new/3.png" },
    { id: 5, name: "برند 4", logo: "./images/brandsupport/new/4.png" },
    { id: 6, name: "برند 5", logo: "./images/brandsupport/new/5.png" },
    { id: 4, name: "برند 6", logo: "./images/brandsupport/new/6.png" },
    { id: 7, name: "برند 7", logo: "./images/brandsupport/new/7.jpg " },
    { id: 8, name: "برند 8", logo: "./images/brandsupport/new/8.png" },
    { id: 9, name: "برند 9", logo: "./images/brandsupport/new/9.png" },
  ];

  return (
    <div className="max-w-[1110px] px-[20px] h-[119px] lg:h-[141px] mx-auto flex flex-col mb-[30px] mt-[400px] lg:mt-[300px]   justify-between   ">
      {/* دیو بالایی - تیتر */}
      <div className=" w-full h-[26px]  mx-auto flex justify-center items-center ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          حمایت برندها و افراد مطرح از ما
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>

      {/* دیو پایینی - اسلایدر */}
      <div className="w-full h-[68px] mt-[20px]  lg:h-[90px]  ">
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
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="h-full flex items-center justify-center px-4">
                <div className="w-[90px]  h-[90px] flex items-center justify-center">
                  {!imageErrors[brand.id] ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-[90px] h-[90px] object-contain"
                      onError={() =>
                        setImageErrors((prev) => ({
                          ...prev,
                          [brand.id]: true,
                        }))
                      }
                    />
                  ) : (
                    <div className="w-full h-full  bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-600 font-abar-low-fanum">
                        {brand.name}
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

export default BrandSupport;
