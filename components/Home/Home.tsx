import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import DesignStrategySection from "./DesignStrategySection/DesignStrategySection";
import Clients from "../Reusable/Clients/Clients";
import ButtonLink from "../Reusable/ButtonLink/ButtonLink";
import WorkSection from "./WorkSection/WorkSection";
import CompanyNumbers from "./CompanyNumbers/CompanyNumbers";
import OfferSection from "./OfferSection/OfferSection";
import FAQ from "./FAQ/FAQ";
import MySlider from "../Reusable/MySlider/MySlider";
import { SLIDES_HOME } from "../Reusable/MySlider/constant";
import { WORK_LIST_HOME } from "../Reusable/WorkSingle/constant";
import style from "./Home.module.scss";

interface HomeProps {
  some?: string;
}

const Home = ({ some }: HomeProps) => {
  return (
    <div className={style.wrapper}>
      <section className={style.heroWrapper} data-centered="yes">
        <HeroSection />
      </section>
      <section className={style.designStrategyWrapper} data-centered="yes">
        <DesignStrategySection />
      </section>
      <section className={style.clientsWrapper} data-centered="yes">
        <Clients />
      </section>
      <section className={style.buttonLinkWrapper} data-centered="yes">
        <ButtonLink title="see more work" link="/work" />
      </section>
      <section className={style.workSectionWrapper} data-centered="yes">
        <WorkSection list={WORK_LIST_HOME} />
      </section>
      <section className={style.buttonLinkWrapper} data-centered="yes">
        <ButtonLink title="see more work" link="/work" />
      </section>
      <section className={style.companyNumbersWrapper} data-centered="yes">
        <CompanyNumbers />
      </section>
      <section className={style.buttonLinkWrapper} data-centered="yes">
        <ButtonLink title="About ConturaDesign" link="/about" position="left" />
      </section>
      <section className={style.sliderWrapper}>
        <MySlider slidesPerView={5} slidesListImages={SLIDES_HOME} />
      </section>
      <section className={style.offerWrapper} data-centered="yes">
        <OfferSection />
      </section>
      <section className={style.faqWrapper}>
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
