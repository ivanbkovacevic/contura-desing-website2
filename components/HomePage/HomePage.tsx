import React from 'react';
import style from './HomePage.module.scss'

interface HomePageProps {
    some?: string;
  }

const HomePage = ({some}:HomePageProps) => {
  return (
    <div className={style.wrapper}>
        <h1>HomePage Contura design</h1>
    </div>
  );
};

export default HomePage;