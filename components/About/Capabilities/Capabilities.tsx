import React from 'react';
import { CAPABILITIES_LIST } from './constants';
import style from './Capabilites.module.scss';


const Capabilites:React.FC = () => {
  const generateCapabilities = () => {
    return CAPABILITIES_LIST.map((item) => {
        return (
        <div className={style.singleCapabilitiWrapper}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
        )
    })
  };
  return (
    <section className={style.wrapper}>
      <div className={style.innerWrapper} >
        <div className={style.heading}>
           <h3>Capabilites</h3>
        </div>
        <div className={style.capabilitiesList}>
          {generateCapabilities()}
        </div>
      </div>
    </section>
  );
};

export default Capabilites;