import React, { useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css"; // Moved to _app.jsx

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const LookAtJazmourian = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

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
    <div className="max-w-[1110px] px-[20px] mx-auto flex flex-col mb-[42px]">
      {/* دیو بالایی - تیتر */}
      <div className=" w-full h-[26px]  mx-auto flex justify-center  items-center mb-[30px] ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          نگاهی به جازموریان
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>
      <div className="relative">
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
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={2} // این خط را اضافه کنید
          spaceBetween={40}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="lookAtJazmourianSwiper"
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <div className="h_iframe-aparat_embed_frame  ">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src={`https://www.aparat.com/video/video/embed/videohash/ykhc3i1/vt/frame?muted=true=${
                  activeIndex === 0 ? "true" : "false"
                }`}
                allow="autoplay"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src={`https://www.aparat.com/video/video/embed/videohash/uqwhpv5/vt/frame?muted=true=${
                  activeIndex === 1 ? "true" : "false"
                }`}
                allow="autoplay"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src={`https://www.aparat.com/video/video/embed/videohash/twjaf20/vt/frame?muted=true=${
                  activeIndex === 2 ? "true" : "false"
                }`}
                allow="autoplay"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h_iframe-aparat_embed_frame">
              <span style={{ display: "block", paddingTop: "57%" }}></span>
              <iframe
                src="https://www.aparat.com/video/video/embed/videohash/kxz95k8/vt/frame"
                allowFullScreen={true}
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <video
              src="https://swiperjs.com/demos/videos/nature-5.mp4"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src="https://swiperjs.com/demos/videos/nature-6.mp4"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src="https://swiperjs.com/demos/videos/nature-7.mp4"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src="https://swiperjs.com/demos/videos/nature-8.mp4"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src="https://swiperjs.com/demos/videos/nature-9.mp4"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default LookAtJazmourian;
