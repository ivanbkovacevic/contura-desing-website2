import React from "react";
import WorkSection from "../Home/WorkSection/WorkSection";
import Clients from "../Reusable/Clients/Clients";
import MySlider from "../Reusable/MySlider/MySlider";
import WeAreContura from "./WeAreContura/WeAreContura";
import Capabilites from "./Capabilities/Capabilities";
import style from "./About.module.scss";
import { SLIDES_HOME } from "../Reusable/MySlider/constant";

interface AboutProps {
  some?: string;
}

const About: React.FC<AboutProps> = ({ some }) => {
  return (
    <div className={style.wrapper}>
      <WeAreContura />
      <WorkSection />
      <Capabilites />
      <Clients title backgroundtype="black" centered="no" contentCentered="yes" />
      <div className={style.slidersWrapper}>
        <div className={style.testemonialSlider}>
          <MySlider
            variant={{
              slidesPerView: 1,
              slidesList: SLIDES_HOME,
            }}
          />
        </div>
        <div className={style.workSliderWrapper}>
          <MySlider
            variant={{
              slidesPerView: 5,
              slidesList: SLIDES_HOME,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
