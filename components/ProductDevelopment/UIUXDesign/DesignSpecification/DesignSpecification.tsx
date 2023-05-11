import React from "react";
import style from "./DesignSpecification.module.scss";
import { DESIGN_SPECIFICATION } from "../constant";
import Image from "next/image";

const DesignSpecification = () => {
  return (
    <div className={style.wrapper}>
      <h2>Design specification</h2>
      <ul>
        <li>{DESIGN_SPECIFICATION[0]}</li>
        <li>{DESIGN_SPECIFICATION[1]}</li>
      </ul>
      <div className={style.imageWrapper}>
        <div style={{ height: "92.5rem" }} className={style.image}>
          <Image
            src="/assets/images/productDevelopment/designSpecification.png"
            alt="designSpecification"
            fill
          />
        </div>
        <p>Example of a static specification</p>
      </div>
      <ul>
        <li>{DESIGN_SPECIFICATION[2]}</li>
      </ul>
    </div>
  );
};

export default DesignSpecification;
