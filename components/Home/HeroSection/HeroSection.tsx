import React from 'react';
import style from './HeroSection.module.scss'

interface HeroSectionProps {
    some?: string;
  }

const HeroSection:React.FC<HeroSectionProps> = ({some}) => {
  return (
    <div className={style.wrapper}>
        <div className={style.centralPart}>
            <div className={style.headingWrappr}>
                <h1>Creating brands impossible to resist!</h1>
                <h4>We create world-class digital products, web design, and branding. professionals who will help your business reach the top.</h4>
            </div>
        </div>
    </div>
  );
};

export default HeroSection;