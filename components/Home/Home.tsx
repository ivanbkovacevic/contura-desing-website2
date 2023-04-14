import React from 'react';
import style from './Home.module.scss'
import HeroSection from './HeroSection/HeroSection';
import DesignStrategySection from './DesignStrategySection/DesignStrategySection';
import Clients from '../Reusable/Clients/Clients';
import LinkButton from '../Reusable/LinkButton/LinkButton';

interface HomeProps {
    some?: string;
  }

const Home = ({some}:HomeProps) => {
  return (
    <div className={style.wrapper}>
        <HeroSection />
        <DesignStrategySection />
        <Clients backgroundtype='black' />
        <div>
          <LinkButton title="see more work" link="/" />
        </div>
    </div>
  );
};

export default Home;