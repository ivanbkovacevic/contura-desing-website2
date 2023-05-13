import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./ResearchAndDiscovery.module.scss";
import {
  RESEARCH_AND_DESIGN_PROCESS,
  RESEARCH_AND_DISCOVERY_HEADING,
  RESEARCH_AND_DISCOVERY_PARAGRAPH,
} from "../constant";
import Image from "next/image";

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
      <div className={style.imageWrapper}>
        <div className={style.image}>
          <Image
            src="/assets/images/productDevelopment/researchImage.png"
            alt=""
            fill
          />
        </div>
        <p>
          Help your team understand the strategy behind your research process
        </p>
      </div>
    </div>
  );
};

export default ResearchAndDiscovery;
