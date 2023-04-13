import React from 'react';
import style from './Home.module.scss'
import HeroSection from './HeroSection/HeroSection';

interface HomeProps {
    some?: string;
  }

const Home = ({some}:HomeProps) => {
  return (
    <div className={style.wrapper}>
        <HeroSection />
    </div>
  );
};

export default Home;