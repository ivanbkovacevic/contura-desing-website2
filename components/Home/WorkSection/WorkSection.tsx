import React from "react";
import { WORK_LIST } from "../../Reusable/WorkSingle/constant";
import WorkSingle from "../../Reusable/WorkSingle/WorkSingle";
import style from "./WorkSection.module.scss";

interface WorkSectionProps {
  list: any[]
}

const WorkSection: React.FC<WorkSectionProps> = ({list}) => {
  const workList = () => {
    return list.map((item) => {
      return (
        <WorkSingle
          description={item.description}
          title={item.title}
          img={item.img}
          color={item.color}
          order={item.order}
          key={item.title}
        />
      );
    });
  };

  return (
    <section className={style.wrapper} data-centered="yes">
      {workList()}
    </section>
  );
};

export default WorkSection;
