import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import NewComponent from "../../NewComponent/NewComponent";
import { useRef } from "react";
import SupButton from "../../SupButton/SupButton";

const Projects = () => {
  const projectRef = useRef(null);

  return (
    <>
      <Header projectHeroRef={projectRef} />
      <div
        ref={projectRef}
        className="w-full h-auto flex flex-colrelative z-5 mb-[66px]"
      >
        {/* دیو بالایی - عکس */}
        <div className="w-full ">
          <img
            src="./images/project/BG Image.png"
            alt="تصویر اصلی"
            className="w-full h-[516px] object-cover"
          />
        </div>
      </div>
      <NewComponent />
      <SupButton />
      <Footer />
    </>
  );
};

export default Projects;
