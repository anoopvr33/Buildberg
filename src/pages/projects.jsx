import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectsSection from "../components/projectCard";
import OnGoing from "../components/ongoing";
import Guniting from "../components/guniting";

const Projects = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProjectsSection></ProjectsSection>
      <OnGoing></OnGoing>
      <Guniting></Guniting>
      <Footer></Footer>
    </div>
  );
};

export default Projects;
