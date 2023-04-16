import React from "react";
import { WORK_LIST } from "../../Reusable/WorkSingle/constant";
import WorkSingle from "../../Reusable/WorkSingle/WorkSingle";
import style from "./WorkSection.module.scss";

const WorkSection: React.FC = ({}) => {
  const workList = () => {
    return WORK_LIST.map((item) => {
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
