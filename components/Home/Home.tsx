import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import DesignStrategySection from "./DesignStrategySection/DesignStrategySection";
import Clients from "../Reusable/Clients/Clients";
import ButtonLink from "../Reusable/ButtonLink/ButtonLink";
import WorkSection from "./WorkSection/WorkSection";
import CompanyNumbers from "./CompanyNumbers/CompanyNumbers";
import OfferSection from "./OfferSection/OfferSection";
import Slider from "../Reusable/Slider/Slider";
import FAQ from "./FAQ/FAQ";
import style from "./Home.module.scss";
import { SLIDES_WORK } from "../Reusable/Slider/constant";

interface HomeProps {
  some?: string;
}

const Home = ({ some }: HomeProps) => {
  return (
    <div className={style.wrapper}>
      <HeroSection />
      <DesignStrategySection />
      <Clients backgroundtype="black" />
      <div className={style.linkBtn}>
        <ButtonLink title="see more work" link="/work" />
      </div>
      <WorkSection />
      <div className={style.linkBtn}>
        <ButtonLink title="see more work" link="/work" />
      </div>
      <CompanyNumbers />
      <div className={style.linkBtn}>
        <ButtonLink title="see more work" link="/work" />
      </div>
      <OfferSection />
      <div className={style.sliderWrapper}>
        <Slider
          variant={{
            slidesPerView: 5,
            slidesList: SLIDES_WORK,
            height: 20,
          }}
        />
      </div>
      <FAQ />
    </div>
  );
};

export default Home;
