import React, { useEffect, useState } from "react";
import Photos from "./Photos";

const InfoProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState(null);
  const [openSections, setOpenSections] = useState({}); // وضعیت هر بخش

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.projects.find(
          (proj) => proj.id === Number(projectId)
        );
        setProject(foundProject);
      })
      .catch((err) => console.error("Error fetching project", err));
  }, [projectId]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // فقط بخش موردنظر تغییر می‌کنه
    }));
  };

  if (!project) return <div>در حال بارگذاری...</div>;

  return (
    <div className="w-full h-auto  mb-[100px] flex-row">
      <div className="w-full flex flex-col lg:flex-row max-w-[1110px] mx-auto  gap-10   ">
        <div className="w-full px-[20px] lg:px-0 ">
          {/* بخش هدف */}
          <div className=" border-b-[1px] border-b-[#D9DBE9] my-[5px]">
            <div
              className=" flex items-center cursor-pointer"
              onClick={() => toggleSection("goal")}
            >
              <h1
                className={`w-full h-[44px] flex items-center font-Abar_Low_FaNum font-semibold text-[14px] leading-relaxed transition-colors ${
                  openSections.goal
                    ? "text-Secondary-900"
                    : "text-Text-General-Text-Light"
                }`}
              >
                هدف
              </h1>

              <img
                className="w-4 h-4 ml-2"
                src={
                  openSections.goal
                    ? "/images/about/svg/minus.svg"
                    : "/images/about/svg/plus.svg"
                }
                alt="toggle"
              />
            </div>
            {openSections.goal && (
              <div className="p-2">
                <h1 className="w-full h-auto font-Abar_Low_FaNum font-medium text-[14px] leading-relaxed text-gray-700">
                  {project.goal}
                </h1>
              </div>
            )}
          </div>
          {/* بخش منطقه اجرا */}
          <div className=" border-b-[1px] border-b-[#D9DBE9] my-[5px]">
            <div
              className=" flex items-center cursor-pointer"
              onClick={() => toggleSection("location")}
            >
              <h1
                className={`w-full h-[44px] flex items-center font-Abar_Low_FaNum font-semibold text-[14px] leading-relaxed transition-colors ${
                  openSections.location
                    ? "text-Secondary-900"
                    : "text-Text-General-Text-Light"
                }`}
              >
                منطقه اجرا:
              </h1>

              <img
                className="w-4 h-4 ml-2"
                src={
                  openSections.location
                    ? "/images/about/svg/minus.svg"
                    : "/images/about/svg/plus.svg"
                }
                alt="toggle"
              />
            </div>
            {openSections.location && (
              <div className="p-2">
                <h1 className="w-full h-auto font-Abar_Low_FaNum font-medium text-[14px] leading-relaxed text-gray-700">
                  {project.location.map((loc, index) => (
                    <div key={index}>{loc}</div>
                  ))}
                </h1>
              </div>
            )}
          </div>
          {/* بخش جامعه هدف */}
          <div className=" border-b-[1px] border-b-[#D9DBE9] my-[5px]">
            <div
              className=" flex items-center cursor-pointer"
              onClick={() => toggleSection("target")}
            >
              <h1
                className={`w-full h-[44px] flex items-center font-Abar_Low_FaNum font-semibold text-[14px] leading-relaxed transition-colors ${
                  openSections.target
                    ? "text-Secondary-900"
                    : "text-Text-General-Text-Light"
                }`}
              >
                جامعه هدف:
              </h1>

              <img
                className="w-4 h-4 ml-2"
                src={
                  openSections.target
                    ? "/images/about/svg/minus.svg"
                    : "/images/about/svg/plus.svg"
                }
                alt="toggle"
              />
            </div>
            {openSections.target && (
              <div className="p-2">
                <h1 className="w-full h-auto font-Abar_Low_FaNum font-medium text-[14px] leading-relaxed text-gray-700">
                  {project.targetSocial}
                </h1>
              </div>
            )}
          </div>
          {/* بخش زمان اجرا */}
          <div className=" border-b-[1px] border-b-[#D9DBE9] my-[5px]">
            <div
              className=" flex items-center cursor-pointer"
              onClick={() => toggleSection("time")}
            >
              <h1
                className={`w-full h-[44px] flex items-center font-Abar_Low_FaNum font-semibold text-[14px] leading-relaxed transition-colors ${
                  openSections.time
                    ? "text-Secondary-900"
                    : "text-Text-General-Text-Light"
                }`}
              >
                زمان شروع / پایان
              </h1>

              <img
                className="w-4 h-4 ml-2"
                src={
                  openSections.time
                    ? "/images/about/svg/minus.svg"
                    : "/images/about/svg/plus.svg"
                }
                alt="toggle"
              />
            </div>
            {openSections.time && (
              <div className="p-2">
                <h1 className="w-full h-auto font-Abar_Low_FaNum font-medium text-[14px] leading-relaxed text-gray-700">
                  شروع : {project.start}
                </h1>
                <h1 className="w-full h-auto font-Abar_Low_FaNum font-medium text-[14px] leading-relaxed text-gray-700">
                  پایان : {project.start}
                </h1>
              </div>
            )}
          </div>
          {/* بخش شرایط فعلی */}
          <div className=" border-b-[1px] border-b-[#D9DBE9] my-[5px]">
            <div
              className=" flex items-center cursor-pointer"
              onClick={() => toggleSection("status")}
            >
              <h1
                className={`w-full h-[44px] flex items-center font-Abar_Low_FaNum font-semibold text-[14px] leading-relaxed transition-colors ${
                  openSections.status
                    ? "text-Secondary-900"
                    : "text-Text-General-Text-Light"
                }`}
              >
                وضعیت فعلی
              </h1>

              <img
                className="w-4 h-4 ml-2"
                src={
                  openSections.status
                    ? "/images/about/svg/minus.svg"
                    : "/images/about/svg/plus.svg"
                }
                alt="toggle"
              />
            </div>
            {openSections.status && (
              <div className="p-2">
                <h1 className="w-full h-auto font-Abar_Low_FaNum font-medium text-[14px] leading-relaxed text-gray-700">
                  {project.status}
                </h1>
              </div>
            )}
          </div>
        </div>

        <div className="w-full  ">
          {/* عکس‌ها */}
          <Photos project={project} />
        </div>
      </div>
    </div>
  );
};

export default InfoProjectDetails;
