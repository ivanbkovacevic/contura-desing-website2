import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./ResearchStage.module.scss";
import Image from "next/image";
import { RESEARCH_STAGE, RESEARCH_STAGE_HEADING, RESEARCH_STAGE_LAST_PARAGRAPH } from "../constant";

const ResearchStage = () => {
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
  return (
    <div className={style.wrapper}>
      <h2>{RESEARCH_STAGE_HEADING}</h2>
      {researchStage()}
      <p>{RESEARCH_STAGE_LAST_PARAGRAPH}</p>
      <div className={style.imageWrapper}>
        <div style={{ height: "57.2rem" }} className={style.image}>
          <Image
            src="/assets/images/productDevelopment/designImage.png"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ResearchStage;
