import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home.jsx";
import Projects from "../Pages/Projects/Projects.jsx";
import SarpanahAmn from "../Pages/SarpanahAmn/SarpanahAmn.jsx";
import Contact from "../Pages/ContactUs/Contact.jsx";
import AnnualReport from "../Pages/AnnualReport/AnnualReport.jsx";
import About from "../Pages/AboutUs/About.jsx";
import Sponsors from "../Pages/Sponsors/Sponsors.jsx";
import Volunteers from "../Pages/Volunteers/Volunteers.jsx";
import Empathy from "../Pages/Empathy/Empathy/Empathy.jsx";
import StandDetail from "../Pages/Empathy/Empathy/Stands/StandDetail.jsx";
import Faq from "../Pages/Faq/Faq.jsx";
import Header from "../Header/Header.jsx";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import ProjectDetails from "../Pages/Projects/ProjectDetails.jsx";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />

          <Route path="/sarpanahamn" element={<SarpanahAmn />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/annual-report" element={<AnnualReport />} />
          <Route path="/empathy" element={<Empathy />} />
          <Route path="/empathy/:id" element={<StandDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
