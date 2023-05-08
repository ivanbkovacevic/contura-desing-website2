import React from "react";
import style from "./ProductDevelopment.module.scss";
import Image from "next/image";
import {
  PROCESS_STEPS,
  PROCESS_STEPS_HEADING,
  PROCESS_STEPS_LAST_PARAGRAPH,
  RESEARCH_STAGE,
  RESEARCH_STAGE_HEADING,
  RESEARCH_STAGE_LAST_PARAGRAPH,
} from "./constant";

const ProductDevelopment = () => {
  const processSteps = () => {
    return PROCESS_STEPS.map((item) => {
      return (
        <>
          <h4>{item.step}</h4>
          <p>{item.description}</p>
        </>
      );
    });
  };
  const researchStage = () => {
    return RESEARCH_STAGE.map((item) => {
      return (
        <p>
          <span>{item.span}</span>
          {item.paragraph}
        </p>
      );
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
    </div>
  );
};

export default ProductDevelopment;
