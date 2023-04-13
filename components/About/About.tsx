import React from 'react';
import style from './About.module.scss'

interface AboutProps {
    some?: string;
  }

const About:React.FC<AboutProps> = ({some}) => {
  return (
    <div className={style.wrapper}>
      <h1>About Page contura design!</h1>
      <p></p>
    </div>
  );
};

export default About;