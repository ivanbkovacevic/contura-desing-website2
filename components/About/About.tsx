import React from 'react';
import WorkSection from '../Home/WorkSection/WorkSection';
import Clients from '../Reusable/Clients/Clients';
import Slider from '../Reusable/Slider/Slider';
import HeroSection from './HeroSection/HeroSection';
import Capabilites from './Capabilities/Capabilities';
import style from './About.module.scss'

interface AboutProps {
    some?: string;
  }

const About:React.FC<AboutProps> = ({some}) => {
  return (
    <div className={style.wrapper}>
      <HeroSection />
      <WorkSection />
      <Capabilites />
      <Clients backgroundtype='black' centered="no" />
      <Slider variant={{slidesPerView: 1}} />
      <Slider variant={{slidesPerView: 5}}/>
    </div>
  );
};

export default About;