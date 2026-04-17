import React from "react";
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutHome";
import ContentSection from "../components/content";
import ServiceSection from "../components/serviceHome";
import Estimate from "../components/estimate";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar color={"nav-bg"}></Navbar>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ContentSection></ContentSection>
      <ServiceSection></ServiceSection>
      <Estimate></Estimate>
      <Footer></Footer>
    </div>
  );
};

export default Home;
