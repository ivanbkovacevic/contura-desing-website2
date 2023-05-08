import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import useId from "react";
import style from "./ProductDevelopment.module.scss";
import {
  PROCESS_STEPS,
  PROCESS_STEPS_HEADING,
  PROCESS_STEPS_LAST_PARAGRAPH,
  RESEARCH_AND_DESIGN_PROCESS,
  RESEARCH_AND_DISCOVERY_HEADING,
  RESEARCH_AND_DISCOVERY_PARAGRAPH,
  RESEARCH_STAGE,
  RESEARCH_STAGE_HEADING,
  RESEARCH_STAGE_LAST_PARAGRAPH,
  UI_DESIGN_PROCESS,
  UI_DESIGN_PROCESS_HEADING,
  UI_DESIGN_PROCESS_LAST_PARAGRAPH,
} from "./constant";

const ProductDevelopment = () => {
  const processSteps = () => {
    return PROCESS_STEPS.map((item) => {
      const keyId = uuidv4();
      return (
        <div key={keyId}>
          <h4>{item.step}</h4>
          <p>{item.description}</p>
        </div>
      );
    });
  };
  const researchStage = () => {
    return RESEARCH_STAGE.map((item) => {
      const keyId = uuidv4();

      return (
        <p key={keyId}>
          <span>{item.span}</span>
          {item.paragraph}
        </p>
      );
    });
  };
  const uiDesignProcess = () => {
    return UI_DESIGN_PROCESS.map((item) => {
      const keyId = uuidv4();

      return <li key={keyId}>{item.li}</li>;
    });
  };
  const researchAndDesignProcessParagraphs = () => {
    return RESEARCH_AND_DESIGN_PROCESS.map((item) => {
      const keyId = uuidv4();

      return <p key={keyId}>{item.paragraph}</p>;
    });
  };
  return (
    <div className={style.wrapper}>
      <div className={style.processSteps}>
        <h2>{PROCESS_STEPS_HEADING}</h2>
        {processSteps()}
        <p className={style.paragraphGreen}>{PROCESS_STEPS_LAST_PARAGRAPH}</p>
      </div>
      <div className={style.researchStage}>
        <h2>{RESEARCH_STAGE_HEADING}</h2>
        {researchStage()}
        <p>{RESEARCH_STAGE_LAST_PARAGRAPH}</p>
      </div>
      <div className={style.uiDesignProcess}>
        <h2>{UI_DESIGN_PROCESS_HEADING}</h2>
        <ul>{uiDesignProcess()}</ul>
        <p>{UI_DESIGN_PROCESS_LAST_PARAGRAPH}</p>
      </div>
      <div className={style.researchAndDiscovery}>
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
      </div>
    </div>
  );
};

export default ProductDevelopment;
