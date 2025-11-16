import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const FaceSupport = () => {
  const [imageErrors, setImageErrors] = useState({});

  const faces = [
    { id: 1, name: "چهره 1", logo: "./images/facesupport/Ellipse.svg" },
    { id: 2, name: "چهره 2", logo: "./images/facesupport/Ellipse.svg" },
    { id: 3, name: "چهره 3", logo: "./images/facesupport/Ellipse.svg" },
    { id: 4, name: "چهره 4", logo: "./images/facesupport/Ellipse.svg" },
    { id: 5, name: "چهره 5", logo: "./images/facesupport/Ellipse.svg" },
    { id: 6, name: "چهره 6", logo: "./images/facesupport/Ellipse.svg" },
    { id: 7, name: "چهره 7", logo: "./images/facesupport/Ellipse.svg" },
    { id: 8, name: "چهره 8", logo: "./images/facesupport/Ellipse.svg" },
    { id: 9, name: "چهره 9", logo: "./images/facesupport/Ellipse.svg" },
  ];

  return (
    <div className="max-w-[1110px] px-[20px] h-[119px] lg:h-[141px] mx-auto flex flex-col mb-[30px]   justify-between ">
      {/* دیو بالایی - تیتر */}
      <div className=" w-full h-[26px]  mx-auto flex justify-center  items-center ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          چهره ها
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
          {faces.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full flex items-center justify-center px-4 relative">
                <div className="w-[90px] h-[90px]  flex items-center justify-center">
                  {!imageErrors[item.id] ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-[65px] h-[65px] lg:w-[90px] lg:h-[90px]  object-contain"
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
                {/* SVG در پایین سمت راست */}
                <div className="absolute bottom-0 left-20 w-5 h-5">
                  <img src="./images/facesupport/Edit Square.svg" alt="edit" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FaceSupport;
