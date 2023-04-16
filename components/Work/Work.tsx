import React from "react";
import style from "./Work.module.scss";
import WorkSection from "../Home/WorkSection/WorkSection";
import Clients from "../Reusable/Clients/Clients";

interface WorkProps {
  some?: string;
}

const Work: React.FC<WorkProps> = ({ some }) => {
  return (
    <div className={style.wrapper}>
      <h1>Work Page contura design!</h1>
      <WorkSection />
      <Clients backgroundtype="black" />
      <p></p>
    </div>
  );
};

export default Work;
