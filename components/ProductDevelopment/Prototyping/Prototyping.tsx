import React from "react";
import style from "./Prototyping.module.scss";
import { PROTOTYPING } from "../constant";
import Image from "next/image";

const Prototyping = () => {
  return (
    <div className={style.wrapper}>
      <h2>Prototyping</h2>
      <ul>
        <li>{PROTOTYPING[0]}</li>
        <li>{PROTOTYPING[1]}</li>
      </ul>
      <div className={style.imageWrapper}>
        <div style={{ height: "57.7rem" }} className={style.image}>
          <Image
            src="/assets/images/productDevelopment/prototypingImage.png"
            alt="prototypingImage"
            fill
          />
        </div>
        <p>
          Help your team understand the strategy behind your prototype process
        </p>
      </div>
      <div className={style.imageWrapper}>
        <div style={{ height: "110rem" }} className={style.image}>
          <Image
            src="/assets/images/productDevelopment/figmaPrototypeImage.png"
            alt="figmaPrototypeImage"
            fill
          />
        </div>
        <p>Read more by website Figma</p>
      </div>
    </div>
  );
};

export default Prototyping;
