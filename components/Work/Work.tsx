import React from "react";
import WorkSection from "../Home/WorkSection/WorkSection";
import Clients from "../Reusable/Clients/Clients";
import { WORK_LIST_WORK } from "../Reusable/WorkSingle/constant";
import WorkGif from "./WorkGif/WorkGif";
import { CLIENTS } from "../Reusable/Clients/constants";
import style from "./Work.module.scss";

interface WorkProps {
  some?: string;
}

const Work: React.FC<WorkProps> = ({ some }) => {
  return (
    <div className={style.wrapper}>
      <h1 data-centered="yes">Work</h1>
      <section className={style.workSectionSection} data-centered="yes">
        <WorkSection list={WORK_LIST_WORK} />
      </section>
      <section className={style.workGifSection} data-centered="yes">
        <WorkGif />
      </section>
      <section className={style.clientsSection}>
        <h3 className={style.title} data-centered="yes">
          Clients
        </h3>
        <Clients backgroundtype="black" contentCentered="yes" list={CLIENTS} />
      </section>
    </div>
  );
};

export default Work;
