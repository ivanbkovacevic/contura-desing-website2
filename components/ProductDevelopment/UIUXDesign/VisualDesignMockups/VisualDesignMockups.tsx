import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { VISUAL_DESIGN_MOCKUPS, VISUAL_DESIGN_PARAGRAPH } from "../constant";
import style from "./VisualDesignMockups.module.scss";

const VisualDesignMockups = () => {
  const visualDesignMockups = () => {
    return VISUAL_DESIGN_MOCKUPS.map((item) => {
      const keyId = uuidv4();
      return <li key={keyId}>{item.li}</li>;
    });
  };
  return (
    <div className={style.wrapper}>
      <h2>Visual Design mockups</h2>
      <ul>{visualDesignMockups()}</ul>
      <div className={`${style.imageWrapper} ${style.image1}`}>
        <div className={style.image}>
          <Image
            src="/assets/images/productDevelopment/hocImage.png"
            alt="hoc image"
            fill
          />
        </div>
        <p>Visual directions example</p>
      </div>
      <div className={`${style.imageWrapper} ${style.image2}`}>
        <div className={style.image}>
          <Image
            src="/assets/images/productDevelopment/forwardizeImage.png"
            alt="forwardizeImage"
            fill
          />
        </div>
        <p>Visual directions example</p>
      </div>
      <p>{VISUAL_DESIGN_PARAGRAPH}</p>
      <div className={`${style.imageWrapper} ${style.image3}`}>
        <div className={style.image}>
          <Image
            src="/assets/images/productDevelopment/roundtripImage.png"
            alt="roundtripImage"
            fill
          />
        </div>
        <p>Applied visual style example</p>
      </div>
      <div className={`${style.imageWrapper} ${style.image4}`}>
        <div className={style.image}>
          <Image
            src="/assets/images/productDevelopment/medicaImage.png"
            alt="medica"
            fill
          />
        </div>
        <p>Applied visual style example</p>
      </div>
    </div>
  );
};

export default VisualDesignMockups;
