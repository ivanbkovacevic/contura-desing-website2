import React from 'react';
import style from './DesignStrategySection.module.scss'
import Accordion from '../../Reusable/Accordion/Accordion';
import {ACCORDIONS} from '../../Reusable/Accordion/constants';
import Image from 'next/image';

const DesignStrategySection:React.FC = ({}) => {
  const accordions = () => {
      return ACCORDIONS.map((item) => {
        return <Accordion title={item.title} content={item.content} />
      })
  };

  return (
    <div className={style.wrapper}>
        <div className={style.leftWrapper}>
          <h3 className={style.heading}>We create world-class digital products, web design, and branding. </h3>
          <div className={style.image}>
            <Image
              src='/assets/images/prolece.png'
              alt="prolece"
              fill
              />
          </div>
        </div>
        <div className={style.rightWrapper}>
          <div className={style.accordionWrapper}>
            {accordions()}
          </div>
        </div>
    </div>
  );
};

export default DesignStrategySection;