import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProjectDetails from "../Pages/Projects/ProjectDetails";

const NewComponent = () => {
  const buttons = [
    { id: 1, title: "همه" },
    { id: 2, title: "رفاه" },
    { id: 3, title: "سلامت" },
    { id: 4, title: "آموزش" },
    { id: 5, title: "بحران" },
  ];

  // const cards = [
  //   {
  //     id: 1,
  //     title: "کارت 1",
  //     leftContent: "محتوای چپ",
  //     image: "./images/newcomponent/1.png",
  //   },
  //   {
  //     id: 2,
  //     title: "کارت 2",
  //     leftContent: "بازگشت به مدرسه ۲",
  //     image: "./images/newcomponent/2.png",
  //   },
  //   {
  //     id: 3,
  //     title: "کارت 3",
  //     leftContent: "ساخت اورژانس چابهار",
  //     image: "./images/newcomponent/3.png",
  //   },
  //   {
  //     id: 4,
  //     title: "کارت 4",
  //     leftContent: "تجهیز خانه بهداشت آبگاه وانان",
  //     image: "./images/newcomponent/4.png",
  //   },
  //   {
  //     id: 5,
  //     title: "کارت 5",
  //     leftContent: "کمک رسانی به پناهجویان افغانستانی",
  //     image: "./images/newcomponent/5.png",
  //   },
  //   {
  //     id: 6,
  //     title: "کارت 6",
  //     leftContent: "پخش آب در میان روستا سیستان و بلوچستان",
  //     image: "./images/newcomponent/6.png",
  //   },
  //   {
  //     id: 7,
  //     title: "کارت 7",
  //     leftContent: "پخش شیرخشک در کابل",
  //     image: "./images/newcomponent/7.png",
  //   },
  //   {
  //     id: 8,
  //     title: "کارت 8",
  //     leftContent: "بیادت هستم ۳",
  //     image: "./images/newcomponent/8.png",
  //   },
  //   {
  //     id: 9,
  //     title: "کارت 9",
  //     leftContent: "با تو سفره ای رنگ میگیرد 3",
  //     image: "./images/newcomponent/9.png",
  //   },
  //   {
  //     id: 10,
  //     title: "کارت 10",
  //     leftContent: "پخش خرما",
  //     image: "./images/newcomponent/10.png",
  //   },
  //   {
  //     id: 11,
  //     title: "کارت 11",
  //     leftContent: "روشنایی معابر روستای بویینگ",
  //     image: "./images/newcomponent/11.png",
  //   },
  //   {
  //     id: 12,
  //     title: "کارت 12",
  //     leftContent: "با تو سفره ای رنگ میگیرد",
  //     image: "./images/newcomponent/12.png",
  //   },
  //   {
  //     id: 13,
  //     title: "کارت 1",
  //     leftContent: "محتوای چپ",
  //     image: "./images/newcomponent/1.png",
  //   },
  //   {
  //     id: 14,
  //     title: "کارت 2",
  //     leftContent: "بازگشت به مدرسه ۲",
  //     image: "./images/newcomponent/2.png",
  //   },
  //   {
  //     id: 15,
  //     title: "کارت 3",
  //     leftContent: "ساخت اورژانس چابهار",
  //     image: "./images/newcomponent/3.png",
  //   },
  //   {
  //     id: 16,
  //     title: "کارت 4",
  //     leftContent: "تجهیز خانه بهداشت آبگاه وانان",
  //     image: "./images/newcomponent/4.png",
  //   },
  //   {
  //     id: 17,
  //     title: "کارت 5",
  //     leftContent: "کمک رسانی به پناهجویان افغانستانی",
  //     image: "./images/newcomponent/5.png",
  //   },
  //   {
  //     id: 18,
  //     title: "کارت 6",
  //     leftContent: "پخش آب در میان روستا سیستان و بلوچستان",
  //     image: "./images/newcomponent/6.png",
  //   },
  //   {
  //     id: 19,
  //     title: "کارت 7",
  //     leftContent: "پخش شیرخشک در کابل",
  //     image: "./images/newcomponent/7.png",
  //   },
  //   {
  //     id: 20,
  //     title: "کارت 8",
  //     leftContent: "بیادت هستم ۳",
  //     image: "./images/newcomponent/8.png",
  //   },
  //   {
  //     id: 21,
  //     title: "کارت 9",
  //     leftContent: "با تو سفره ای رنگ میگیرد 3",
  //     image: "./images/newcomponent/9.png",
  //   },
  //   {
  //     id: 22,
  //     title: "کارت 10",
  //     leftContent: "پخش خرما",
  //     image: "./images/newcomponent/10.png",
  //   },
  //   {
  //     id: 23,
  //     title: "کارت 11",
  //     leftContent: "روشنایی معابر روستای بویینگ",
  //     image: "./images/newcomponent/11.png",
  //   },
  //   {
  //     id: 24,
  //     title: "کارت 12",
  //     leftContent: "با تو سفره ای رنگ میگیرد",
  //     image: "./images/newcomponent/12.png",
  //   },
  // ];
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error("Error fetching projects", err));
  }, []);
  // تقسیم آرایه به ۱۲تایی
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="w-full max-w-[1110px] mx-auto flex flex-col ">
      {/* دیو بالایی */}
      <Swiper
        spaceBetween={12}
        slidesPerView="auto"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1124: { slidesPerView: 5 },
        }}
        className="w-full !overflow-hidden mb-4"
      >
        {buttons.map((button) => (
          <SwiperSlide key={button.id} className="!w-fit">
            <button className="w-[147px] lg:w-[210px] min-w-[150px] px-3 py-2 bg-Surface-General-Surface-Greyscale-100 rounded-md hover:bg-Primary-50 transition-all duration-200 text-Text-Greyscale-800 hover:text-Primary-500 text-sm font-normal hover:font-semibold font-Abar_Mid_FaNum leading-snug whitespace-nowrap">
              {button.title}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* فاصله بین دو دیو */}
      <div className="h-[71px]"></div>

      {/* دیو پایینی */}
      <div className="w-full  mb-[66px]">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="NewComponentswiper"
          style={{ paddingBottom: "50px" }}
        >
          {/* اسلاید اول - کارت‌های 1 تا 12 */}
          {chunkArray(projects, 12).map((chunk, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[5px] gap-y-[35px]">
                {chunk.map((project) => (
                  <div
                    key={project.id}
                    className=" w-[363px] h-[340px] mx-auto bg-Surface-General-Surface-General-White rounded-lg outline-[1.50px] p-3 outline-offset-[-1.50px] outline-Stroke-Greyscale-Greyscale-300 inline-flex flex-col hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] transition-shadow duration-200"
                  >
                    {/* عکس */}
                    <div className="w-[339px] h-[211px] bg-gray-200 rounded-lg">
                      <img
                        src={project.images?.[0]}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* متن */}
                    <div className="flex h-[66px]  flex-row p-4">
                      <div className="flex items-center justify-start w-full">
                        <div className="text-center text-Text-General-Text-Light text-sm font-semibold font-Abar_Low_FaNum leading-snug">
                          {project.title}
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <div className=" text-Text-Greyscale-700 text-[10px] font-semibold font-Abar_Low_FaNum leading-none">
                          #زیرساختی
                        </div>
                      </div>
                    </div>

                    {/* دکمه */}
                    <div className="pt-0 ">
                      <Link
                        href={`/projects/${project.id}`}
                        className="w-full font-Abar_Low_FaNum bg-Primary-500 text-white rounded-lg px-3 py-2 hover:bg-Primary-600 transition-colors duration-200 block text-center"
                      >
                        مطالعه جزئیات پروژه
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewComponent;
