import React from 'react';
import style from './AboutPage.module.scss'

interface AboutPageProps {
    some?: string;
  }

const AboutPage:React.FC<AboutPageProps> = ({some}) => {
  return (
    <div className={style.wrapper}>
      <h1>About Page contura design!</h1>
      <p></p>
    </div>
  );
};

export default AboutPage;