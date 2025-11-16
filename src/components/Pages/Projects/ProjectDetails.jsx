import Header from "../../Header/Header";
import InfoProjectDetails from "./InfoProjectDetails";
import TextTopProjectDetails from "./TextTopProjectDetail";
import SupButton from "../../SupButton/SupButton";
import Footer from "../../Footer/Footer";

const ProjectDetails = ({ projectId }) => {
  return (
    <div>
      <Header />
      <TextTopProjectDetails projectId={projectId} />
      <InfoProjectDetails projectId={projectId} />
      <SupButton />
      <Footer />
    </div>
  );
};

export default ProjectDetails;
