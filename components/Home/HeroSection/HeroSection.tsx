import React from 'react';
import style from './HeroSection.module.scss'

interface HeroSectionProps {
    some?: string;
  }

const HeroSection:React.FC<HeroSectionProps> = ({some}) => {
  return (
    <div className={style.wrapper}>
      <h1>HeroSection!</h1>
      <p></p>
    </div>
  );
};

export default HeroSection;