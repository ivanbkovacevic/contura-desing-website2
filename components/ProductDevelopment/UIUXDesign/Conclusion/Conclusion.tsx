import React from 'react';
import style  from './Conclusion.module.scss';
import { CONCLUSION } from '../constant';

const Conclusion = () => {
  return (
    <div className={style.wrapper}>
        <h2>Conclusion</h2>
        <p>{CONCLUSION[0]}</p>
        <p>{CONCLUSION[1]}</p>
      </div>
  )
}

export default Conclusion