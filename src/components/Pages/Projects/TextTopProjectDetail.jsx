import React, { useEffect, useState } from "react";

const TextTopProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState(null);

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

  if (!project) return <div>در حال بارگذاری...</div>;
  return (
    <div>
      <div className="w-full mb-[50px] mt-[146px] lg:mt-[184px] ">
        <div className="w-full max-w-[1110px] mx-auto h-full ">
          <div
            className="w-full h-[26px] 
            px-[20px] lg:px-0
          flex flex-row justify-between 
      "
          >
            <h1 className="w-auto  h-full font-Abar_Low_FaNum font-bold text-[16px] leading-relaxed text-Primary-500 flex justify-center items-center ">
              {project.title}
            </h1>
            <h1
              className="w-auto h-full 
            flex justify-center items-center
            font-Abar_Low_FaNum font-semibold text-[10px] leading-relaxed text-Text-Greyscale-700 "
            >
              {Array.isArray(project.category)
                ? project.category.map((cat) => `#${cat}`).join("")
                : `#${project.category}`}
            </h1>
          </div>
          <div className="w-full h-full  px-[20px] lg:px-0">
            <p className="w-full h-auto mt-[30px]  font-Abar_Low_FaNum font-regular text-[14px] leading-relaxed text-Text-Greyscale-600 ">
              {project.information}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTopProjectDetails;
