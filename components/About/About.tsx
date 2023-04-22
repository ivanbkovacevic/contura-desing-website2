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
}

const About: React.FC<AboutProps> = () => {
  return (
    <div className={style.wrapper}>
      <section className={style.weAreConturaSection}>
        <WeAreContura />
      </section>
      <section className={style.watWeDoSection} data-centered="yes">
        <WhatWeDo />
      </section>
      <section className={style.capabilitesSection}>
        <Capabilites />
      </section>
      <section className={style.clientsSection}>
      <h3 className={style.title}  data-centered="yes">Clients</h3>
        <Clients backgroundtype="black" contentCentered="yes" page="about" list={CLIENTS}/>
      </section>
      <section className={style.slidersSection}>
        <div className={style.testemonialSlider}>
          <MySlider
            sliderType="testemonial"
            slidesPerView={1}
            slidesListTestemonial={SLIDES_TESTEMONIAL}
          />
        </div>
        <div className={style.workSliderSection}>
          <MySlider slidesPerView={5} slidesListImages={SLIDES_HOME} />
        </div>
        {/* <Form /> */}
      </section>
    </div>
  );
};

export default About;
