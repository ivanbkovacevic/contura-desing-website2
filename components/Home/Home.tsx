import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import DesignStrategySection from './DesignStrategySection/DesignStrategySection';
import Clients from '../Reusable/Clients/Clients';
import LinkButton from '../Reusable/LinkButton/LinkButton';
import WorkSection from './WorkSection/WorkSection';
import CompanyNumbers from './CompanyNumbers/CompanyNumbers';
import style from './Home.module.scss'
import OfferSection from './OfferSection/OfferSection';

interface HomeProps {
    some?: string;
  }

const Home = ({some}:HomeProps) => {
  return (
    <div className={style.wrapper}>
        <HeroSection />
        <DesignStrategySection />
        <Clients backgroundtype='black' />
        <div className={style.linkBtn}>
          <LinkButton title="see more work" link="/work" />
        </div>
        <WorkSection />
        <div className={style.linkBtn}>
          <LinkButton title="see more work" link="/work" />
        </div>
        <CompanyNumbers />
        <div className={style.linkBtn}>
          <LinkButton title="see more work" link="/work" />
        </div>
        <OfferSection />
    </div>
  );
};

export default Home;