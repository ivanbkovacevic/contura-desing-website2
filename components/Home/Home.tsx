import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import DesignStrategySection from "./DesignStrategySection/DesignStrategySection";
import Clients from "../Reusable/Clients/Clients";
import ButtonLink from "../Reusable/ButtonLink/ButtonLink";
import WorkSection from "./WorkSection/WorkSection";
import CompanyNumbers from "./CompanyNumbers/CompanyNumbers";
import OfferSection from "./OfferSection/OfferSection";
import FAQ from "./FAQ/FAQ";
import style from "./Home.module.scss";
import MySlider from "../Reusable/MySlider/MySlider";
import { SLIDES_HOME } from "../Reusable/MySlider/constant";

interface HomeProps {
  some?: string;
}

const Home = ({ some }: HomeProps) => {
  return (
    <div className={style.wrapper}>
      <HeroSection />
      <DesignStrategySection />
      <Clients backgroundtype="black" />
      <ButtonLink title="see more work" link="/work" />
      <WorkSection />
      <ButtonLink title="see more work" link="/work" />
      <CompanyNumbers />
      <ButtonLink title="About ConturaDesign" link="/about" position="left" />
      <OfferSection />
      <div className={style.sliderWrapper}>
        <MySlider slidesPerView={5} slidesListImages={SLIDES_HOME} />
      </div>
      <FAQ />
    </div>
  );
};

export default Home;
