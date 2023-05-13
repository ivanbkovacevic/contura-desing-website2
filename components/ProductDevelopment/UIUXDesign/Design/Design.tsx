import React from "react";
import { DESIGN_HEADING, DESIGN_PARAGRAPH } from "../constant";
import Image from "next/image";
import style from "./Design.module.scss";

const Design = () => {
  return (
    <div className={style.wrapper}>
      <h2>{DESIGN_HEADING}</h2>
      <p>{DESIGN_PARAGRAPH}</p>
      <div className={style.imageWrapper}>
        <div className={style.image}>
          <Image
            src="/assets/images/productDevelopment/designImage.png"
            alt=""
            fill
          />
        </div>
        <p>Read more by website Figma</p>
      </div>
    </div>
  );
};

export default Design;
