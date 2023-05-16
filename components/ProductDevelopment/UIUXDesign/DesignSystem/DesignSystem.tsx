import React from "react";
import { DESIGN_SYSTEM } from "../constant";
import Image from "next/image";
import style from "./DesignSystem.module.scss";

const DesignSystem = () => {
  return (
    <div className={style.wrapper}>
      <h2>Design system</h2>
      <ul>
        <li>{DESIGN_SYSTEM[0]}</li>
      </ul>
      <div className={style.imageWrapper}>
        <div className={`${style.image} ${style.image1}`}>
          <Image
            src="/assets/images/productDevelopment/designSystemImage.png"
            alt="designsistem"
            fill
          />
        </div>
        <p>Design system example</p>
      </div>
      <ul>
        <li>{DESIGN_SYSTEM[1]}</li>
        <li>{DESIGN_SYSTEM[2]}</li>
      </ul>
      <div className={style.imageWrapper}>
      <div className={`${style.image} ${style.image2}`}>
          <Image
            src="/assets/images/productDevelopment/designSystem02Image.png"
            alt="designSystem02Image"
            fill
          />
        </div>
        <p>Components Library example</p>
      </div>
    </div>
  );
};

export default DesignSystem;
