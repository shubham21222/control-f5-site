import Image from "next/image";
import React from "react";
import MainLogo from "../assets/controlF5-logo.webp";
import NavBar from "../components/NavBar";
import ContentCard from "../components/ContentCard";
import TestiMonial from "../components/TestiMonial";
import PortFolio from "../components/PortFolio";
import SolvedProblems from "../components/SolvedProblems";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className="content_container flex justify-center flex-col items-center pt-[15vh]">
        <div className="text-[2.5vh] text-black">
          Go Beyond Your Wildest Dreams
        </div>
        <div className="text-[5vh] text-black font-[400]  pt-6">
          Take Your Digital Presence One Notch Higher
        </div>
        <div className="text-[2.8vh]  pt-4 text-center">
          ControlF5 is a leading web designing and development company and we
          adhere to the rules of making sure that our client’s digital presence
          takes off higher. We design and develop websites and web applications
          of different types. From small one-page or multipage websites to the
          complex website having at least two pages, we design them according to
          the requirement of our clients. Our team includes designers and
          developers who can complete any project at a speedy speed within a
          week. We have experts in creating high-quality Designs, working with
          the latest online technologies, flex fills and off-the-shelf software
          like CMS, GIS, etc.
        </div>
      </div>
      <ContentCard/>
      <TestiMonial/>
      <PortFolio/>
      <SolvedProblems/>
      <HeroSection/>
      <Footer/>
    </>
  );
};

export default MainPage;
