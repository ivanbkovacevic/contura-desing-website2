import React from "react";
import style from "./Work.module.scss";
import WorkSection from "../Home/WorkSection/WorkSection";
import Clients from "../Reusable/Clients/Clients";
import { WORK_LIST_WORK } from "../Reusable/WorkSingle/constant";
import WorkGif from "./WorkGif/WorkGif";

interface WorkProps {
  some?: string;
}

const Work: React.FC<WorkProps> = ({ some }) => {
  return (
    <div className={style.wrapper}>
      <h1 data-centered="yes">Work</h1>
      <section className={style.workSectionWrapper} data-centered="yes">
        <WorkSection list={WORK_LIST_WORK} />
      </section>
      <section className={style.workGifWrapper} data-centered="yes">
        <WorkGif />
      </section>
      <section className={style.clientsWrapper}>
        <Clients backgroundtype="black" contentCentered="yes" title />
      </section>
    </div>
  );
};

export default Work;
