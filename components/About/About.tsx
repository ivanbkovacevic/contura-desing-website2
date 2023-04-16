import React from "react";
import WorkSection from "../Home/WorkSection/WorkSection";
import Clients from "../Reusable/Clients/Clients";
import Slider from "../Reusable/Slider/Slider";
import HeroSection from "./HeroSection/HeroSection";
import Capabilites from "./Capabilities/Capabilities";
import style from "./About.module.scss";
import { SLIDES_WORK } from "../Reusable/Slider/constant";

interface AboutProps {
  some?: string;
}

const About: React.FC<AboutProps> = ({ some }) => {
  return (
    <div className={style.wrapper}>
      <HeroSection />
      <WorkSection />
      <Capabilites />
      <Clients backgroundtype="black" centered="no" contentCentered="yes" />
      <div className={style.slidersWrapper}>
        <div className={style.testemonialSlider}>
          <Slider
            variant={{
              slidesPerView: 1,
              slidesList: SLIDES_WORK,
              height: 50,
            }}
          />
        </div>
        <div className={style.workSliderWrapper}>
          <Slider
            variant={{
              slidesPerView: 5,
              slidesList: SLIDES_WORK,
              height: 20,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
