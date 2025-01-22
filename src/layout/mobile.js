import React from "react";
import Navbar from "../components/Navbar/mobile";
import "../assets/styles/mobile.css";
import HeroSection from "../components/HeroSection/Mobile";
import MiniCraft from "../components/MiniCraft/mobile";
import Articles from "../components/Articles/mobile";
import WhyCoding from "../components/WhyCoding/Mobile";
import SuperStar from "../components/SuperStar/Mobile";
import VideoPopup from "../components/VideoPopup/Mobile";
import Projects from "../components/Project/Mobile";
import Curriculum from "../components/Curriculum/Mobile";
import OurTeacher from "../components/OurTeacher/Mobile";
import DownloadApp from "../components/DownloadApp/Mobile";
import Footer from "../components/Footer/Mobile";

const Mobile = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MiniCraft />
      <Articles />
      <WhyCoding />
      <SuperStar />
      <VideoPopup />
      <Projects />
      <Curriculum />
      <OurTeacher />
      <DownloadApp />
      <div>
        <div className="p-15 text-center mt-15">
          <h2 className="m-0">WhiteHat Jr has been Featured In</h2>
        </div>
        <div className="d-flex justify-center align-items-center pb-15">
          <a
            href="https://www.business-standard.com/article/pti-stories/whitehat-jr-aims-to-teach-indian-school-goers-coding-119041601283_1.html"
            target="_blank"
          >
            <div className="icon-footer icon-footer-1"></div>
          </a>
          <a
            href="https://techcrunch.com/2020/08/05/indias-byjus-acquires-whitehat-jr-for-300-million/"
            target="_blank"
          >
            <div className="icon-footer icon-footer-4"></div>
          </a>
          <a
            href="https://yourstory.com/2020/06/edtech-startup-whitehat-jr-kids-ai-coding-skills"
            target="_blank"
          >
            <div className="icon-footer icon-footer-3"></div>
          </a>
          <a
            href="https://www.cnbctv18.com/business/ed-tech-start-up-whitehat-jr-to-rope-in-2000-online-teachers-on-its-learning-platform-6136181.htm"
            target="_blank"
          >
            <div className="icon-footer icon-footer-2"></div>
          </a>
        </div>
      </div>
      <div className="divider divider-bg"></div>

      <Footer />
    </>
  );
};

export default Mobile;
