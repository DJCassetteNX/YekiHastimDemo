import React, { useState } from "react";

const Photos = ({ project }) => {
  const [selectedImg, setSelectedImg] = useState(project.images[0]); // عکس اول به صورت پیش‌فرض

  return (
    <div className="w-full max-w-[1110px] mx-auto">
      <div className="w-full px-[20px] lg:px-0">
        {" "}
        {/* عکس اصلی */}
        <div className="w-full h-[343px] mb-6 object-cover">
          <img
            src={selectedImg}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        {/* بقیه عکس‌ها سه‌تا سه‌تا */}
        <div className="grid grid-cols-3 gap-4">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} - ${idx}`}
              className={`w-full h-32 object-cover rounded-xl cursor-pointer transition-transform duration-300 ${
                selectedImg === img
                  ? "ring-1 ring-Text-Components-Text-Form-Default-500 scale-105"
                  : "hover:scale-105"
              }`}
              onClick={() => setSelectedImg(img)} // تغییر عکس اصلی
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
