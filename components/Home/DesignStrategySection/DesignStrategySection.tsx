import React from 'react';
import Accordion from '../../Reusable/Accordion/Accordion';
import Image from 'next/image';
import { DESIGN_STRATEGY_LIST } from './constants';
import style from './DesignStrategySection.module.scss'

const DesignStrategySection:React.FC = ({}) => {
  const accordions = () => {
      return DESIGN_STRATEGY_LIST.map((item) => {
        return <Accordion key={item.title} title={item.title} content={item.content} />
      })
  };

  return (
    <section className={style.wrapper} data-centered='yes'>
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
          <div className={style.accordionsWrapper}>
            {accordions()}
          </div>
        </div>
    </section>
  );
};

export default DesignStrategySection;