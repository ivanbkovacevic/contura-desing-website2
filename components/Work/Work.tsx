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
      <WorkSection list={WORK_LIST_WORK} />
      <WorkGif />
      <Clients
        backgroundtype="black"
        centered="no"
        contentCentered="yes"
        title
      />
    </div>
  );
};

export default Work;
