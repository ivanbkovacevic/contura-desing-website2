import React from "react";
import WorkSingle from "../../Reusable/WorkSingle/WorkSingle";
import { Work } from "../../Reusable/WorkSingle/constant";
import style from "./WorkSection.module.scss";

interface WorkSectionProps {
  list: Work[];
}

const WorkSection: React.FC<WorkSectionProps> = ({list}) => {
  const workList = () => {
    return list.map((item) => {
      return (
        <WorkSingle
          description={item.description}
          title={item.title}
          subtitle={item.subtitle}
          img={item.img}
          color={item.color}
          order={item.order}
          key={item.title}
          link={item.link}
        />
      );
    });
  };

  return (
    <div className={style.wrapper}>
      {workList()}
    </div>
  );
};

export default WorkSection;
