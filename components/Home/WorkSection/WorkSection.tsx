import React from 'react';
import { WORK_LIST } from '../../Reusable/WorkSection/constant';
import WorkSingle from '../../Reusable/WorkSection/WorkSingle';
import style from './WorkSection.module.scss'

const WorkSection:React.FC = ({}) => {
    const workList = () => {
        return WORK_LIST.map((item) => {
          return (
            <WorkSingle 
                description={item.description}
                title={item.title}
                img={item.img}
                color={item.color}
                order={item.order} 
            />
          )
        })
    };

  return (
    <div className={style.wrapper}>
       {workList()}
    </div>
  );
};

export default WorkSection;