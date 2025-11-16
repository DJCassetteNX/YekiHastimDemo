import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const VideoTestimonials = () => {
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef({});
  const swiperRef = useRef(null);

  const handleVideoHover = (videoId, isHovering) => {
    const videoElement = videoRefs.current[videoId];
    if (videoElement && !videoElement.isAparat) {
      if (isHovering) {
        videoElement.play();
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
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

  const videos = [
    {
      id: 1,
      name: "ویدئو 1",
      videoUrl:
        "https://www.aparat.com/video/video/embed/videohash/lqvjr9d/vt/frame?muted=true",
      isAparat: true,
    },
    {
      id: 2,
      name: "ویدئو 2",
      videoUrl:
        "https://www.aparat.com/video/video/embed/videohash/tjh3d91/vt/frame?muted=true",
      isAparat: true,
    },
    {
      id: 3,
      name: "ویدئو 3",
      videoUrl:
        "https://www.aparat.com/video/video/embed/videohash/vle0008/vt/frame?muted=true",
      isAparat: true,
    },
    {
      id: 4,
      name: "ویدئو 4",
      videoUrl:
        "https://www.aparat.com/video/video/embed/videohash/xsiz5ex/vt/frame?muted=true",
      isAparat: true,
    },
  ];

  return (
    <div className="max-w-[1110px] px-[20px] mx-auto flex flex-col mb-[42px]  ">
      {/* عنوان */}
      <div className=" w-full h-[26px]  mx-auto flex justify-center items-center mb-[30px] ">
        <span className=" hidden lg:block w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 ml-[20px] "></span>
        <div className=" text-base font-bold font-Abar_Low_FaNum text-Primary-500 leading-relaxed whitespace-nowrap ">
          درباره ما چه می گویند
        </div>{" "}
        <span className="w-full h-[1px] bg-Stroke-Greyscale-Greyscale-300 mr-[20px]"></span>
      </div>
      {/* اسلایدر */}
      <div className="w-full relative">
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
          spaceBetween={25}
          breakpoints={{
            320: { slidesPerView: 1 },

            640: { slidesPerView: 1.5 },
            700: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          className="video-testimonials-swiper"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                {video.isAparat ? (
                  <iframe
                    src={video.videoUrl}
                    allow="autoplay"
                    allowFullScreen
                    title={`video-${video.id}`}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                ) : !videoErrors[video.id] ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                      if (el) el.isAparat = false;
                    }}
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    onError={() =>
                      setVideoErrors((prev) => ({ ...prev, [video.id]: true }))
                    }
                    muted
                    loop
                    preload="metadata"
                    onMouseEnter={() => handleVideoHover(video.id, true)}
                    onMouseLeave={() => handleVideoHover(video.id, false)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-sm text-gray-600 font-abar-low-fanum">
                      {video.name}
                    </span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoTestimonials;
