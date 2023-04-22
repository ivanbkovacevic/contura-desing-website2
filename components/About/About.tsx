import React from "react";
import Clients from "../Reusable/Clients/Clients";
import MySlider from "../Reusable/MySlider/MySlider";
import WeAreContura from "./WeAreContura/WeAreContura";
import Capabilites from "./Capabilities/Capabilities";
import { SLIDES_HOME, SLIDES_TESTEMONIAL } from "../Reusable/MySlider/constant";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Form from "./Form/Form";
import { CLIENTS } from "../Reusable/Clients/constants";
import style from "./About.module.scss";

interface AboutProps {
  some?: string;
}

const About: React.FC<AboutProps> = ({ some }) => {
  return (
    <div className={style.wrapper}>
      <section className={style.weAreConturaWrapper}>
        <WeAreContura />
      </section>
      <section className={style.watWeDoWrapper} data-centered="yes">
        <WhatWeDo />
      </section>
      <section className={style.capabilitesWrapper}>
        <Capabilites />
      </section>
      <section className={style.clientsWrapper}>
        <Clients title backgroundtype="black" contentCentered="yes" list={CLIENTS} />
      </section>
      <section className={style.slidersWrapper}>
        <div className={style.testemonialSlider}>
          <MySlider
            sliderType="testemonial"
            slidesPerView={1}
            slidesListTestemonial={SLIDES_TESTEMONIAL}
          />
        </div>
        <div className={style.workSliderWrapper}>
          <MySlider slidesPerView={5} slidesListImages={SLIDES_HOME} />
        </div>
        {/* <Form /> */}
      </section>
    </div>
  );
};

export default About;
