import React from 'react';
import style from './Work.module.scss'

interface WorkProps {
    some?: string;
  }

const Work:React.FC<WorkProps> = ({some}) => {
  return (
    <div className={style.wrapper}>
      <h1>Work Page contura design!</h1>
      <p></p>
    </div>
  );
};

export default Work;