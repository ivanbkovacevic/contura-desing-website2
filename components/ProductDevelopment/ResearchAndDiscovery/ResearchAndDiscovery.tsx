import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./ResearchAndDiscovery.module.scss";
import {
  RESEARCH_AND_DESIGN_PROCESS,
  RESEARCH_AND_DISCOVERY_HEADING,
  RESEARCH_AND_DISCOVERY_PARAGRAPH,
} from "../constant";

const ResearchAndDiscovery = () => {
  const researchAndDesignProcessParagraphs = () => {
    return RESEARCH_AND_DESIGN_PROCESS.map((item) => {
      const keyId = uuidv4();
      return <p key={keyId}>{item.paragraph}</p>;
    });
  };
  return (
    <div className={style.wrapper}>
      <h2>{RESEARCH_AND_DISCOVERY_HEADING}</h2>
      <p>{RESEARCH_AND_DISCOVERY_PARAGRAPH}</p>
      <div className={style.tableWrapper}>
        <div className={style.upperTable}>
          <div className={style.headingWrapper}>
            <h4>Research and Discovery Process</h4>
            <h6>Here's how we approached this step</h6>
          </div>
          <div className={style.steps}>
            <span>User Research</span>
            <span>Competitive Analysis</span>
            <span>Market Research</span>
            <span>Business Goals</span>
            <span>Defining the Problem</span>
          </div>
        </div>
        <div className={style.lowerTable}>
          {researchAndDesignProcessParagraphs()}
        </div>
      </div>
      <p>Help your team understand the strategy behind your research process</p>
    </div>
  );
};

export default ResearchAndDiscovery;
