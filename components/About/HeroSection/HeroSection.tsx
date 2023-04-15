import React from 'react';
import style from './HeroSection.module.scss'

interface HeroSectionProps {
    some?: string;
  }

const HeroSection:React.FC<HeroSectionProps> = ({some}) => {
  return (
    <section className={style.wrapper} data-centered='yes'>
        <div className={style.centralPart}>
            <div className={style.headingWrappr}>
                <h1>Hey, we're ConturaDesign</h1>
                <h4>We create world-class digital products, web design, and branding. professionals who will help your business reach the top.</h4>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;