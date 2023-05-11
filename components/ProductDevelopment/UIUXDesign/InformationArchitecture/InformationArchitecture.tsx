import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./InformationArchitecture.module.scss";
import {
  INFORMATION_ARCHITECTURE,
  INFORMATION_ARCHITECTURE_HEADING,
  INFORMATION_ARCHITECTURE_PARAGRAPH,
} from "../constant";
import Image from "next/image";

const InformationArchitecture = () => {
  const informationArchitecture = () => {
    return INFORMATION_ARCHITECTURE.map((item) => {
      const keyId = uuidv4();
      return <li key={keyId}>{item.li}</li>;
    });
  };
  return (
    <div className={style.wrapper}>
      <h2>{INFORMATION_ARCHITECTURE_HEADING}</h2>
      <p>{INFORMATION_ARCHITECTURE_PARAGRAPH}</p>
      <div className={style.imageWrapper}>
        <div style={{ height: "96.7rem" }} className={style.image}>
          <Image
            src="/assets/images/productDevelopment/informationArhitectureImage.png"
            alt=""
            fill
          />
        </div>
        <p>
          Help your team understand the strategy behind your Information
          Architecture process
        </p>
      </div>
      <ul>{informationArchitecture()}</ul>
    </div>
  );
};

export default InformationArchitecture;
