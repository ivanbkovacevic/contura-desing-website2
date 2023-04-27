import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import DesignStrategySection from "./DesignStrategySection/DesignStrategySection";
import Clients from "../Reusable/Companies/Companies";
import ButtonLink from "../Reusable/ButtonLink/ButtonLink";
import WorkSection from "./WorkSection/WorkSection";
import CompanyNumbers from "./CompanyNumbers/CompanyNumbers";
import OfferSection from "./OfferSection/OfferSection";
import FAQ from "./FAQ/FAQ";
import MySlider from "../Reusable/MySlider/MySlider";
import { SLIDES_HOME } from "../Reusable/MySlider/constant";
import { WORK_LIST_HOME } from "../Reusable/WorkSingle/constant";
import Aside from "../Layout/Aside/Aside";
import { BIG_COMPANIES } from "../Reusable/Companies/constants";
import style from "./Home.module.scss";

interface HomeProps {}

const Home = () => {
  return (
    <div className={style.wrapper}>
      <section className={style.heroSection} data-centered="yes">
        <HeroSection />
      </section>
      <section className={style.designStrategySection} data-centered="yes">
        <DesignStrategySection />
      </section>
      <section className={style.clientsSection} data-centered="yes">
        <h3 className={style.title}>People & brands love it</h3>
        <Clients list={BIG_COMPANIES} companieType="bigCompanies" />
      </section>
      <section className={style.buttonLinkSection} data-centered="yes">
        <ButtonLink title="see more work" link="/work" />
      </section>
      <section className={style.workSectionSection} data-centered="yes">
        <WorkSection list={WORK_LIST_HOME} />
      </section>
      <section className={style.buttonLinkSection} data-centered="yes">
        <ButtonLink title="see more work" link="/work" />
      </section>
      <section className={style.companyNumbersSection} data-centered="yes">
        <CompanyNumbers />
      </section>
      <section className={style.buttonLinkSection} data-centered="yes">
        <ButtonLink title="About ConturaDesign" link="/about" position="left" />
      </section>
      <section className={style.sliderSection}>
        <MySlider slidesPerView={3} slidesListImages={SLIDES_HOME} />
      </section>
      <section className={style.offerSection} data-centered="yes">
        <OfferSection />
      </section>
      <section className={style.faqSection}>
        <FAQ />
      </section>
      <Aside />
    </div>
  );
};

export default Home;
