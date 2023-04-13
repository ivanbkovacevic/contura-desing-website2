import React from 'react';
import style from './DesignStrategySection.module.scss'

const DesignStrategySection:React.FC = ({}) => {
  return (
    <div className={style.wrapper}>
        <div className={style.leftWrapper}>
          left
        </div>
        <div className={style.rightWrapper}>
          right
        </div>
    </div>
  );
};

export default DesignStrategySection;