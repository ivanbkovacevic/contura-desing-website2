import React from 'react';
import style from './DesignStrategySection.module.scss'
import Accordion from '../../Reusable/Accordion/Accordion';
import {ACCORDIONS} from '../../Reusable/Accordion/constants';

const DesignStrategySection:React.FC = ({}) => {
  const accordions = () => {
      return ACCORDIONS.map((item) => {
        return <Accordion title={item.title} content={item.content} />
      })
  };

  return (
    <div className={style.wrapper}>
        <div className={style.leftWrapper}>
          left
        </div>
        <div className={style.rightWrapper}>
          right
        {accordions()}
        </div>
    </div>
  );
};

export default DesignStrategySection;