import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FourImageGrid = ({ images }) => {
  return (
    <div className="w-full h-[270px] flex justify-center items-center mb-5">
      <div className="max-w-[1110px] h-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={img}
                  alt={`image-${idx}`}
                  className="w-80 h-64 rounded-lg object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FourImageGrid;
