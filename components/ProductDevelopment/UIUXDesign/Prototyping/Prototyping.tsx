import React from "react";
import { PROTOTYPING } from "../constant";
import Image from "next/image";
import style from "./Prototyping.module.scss";

const Prototyping = () => {
  return (
    <div className={style.wrapper}>
      <h2>Prototyping</h2>
      <ul>
        <li>{PROTOTYPING[0]}</li>
        <li>{PROTOTYPING[1]}</li>
      </ul>
      <div className={`${style.imageWrapper} ${style.image1}`}>
        <div className={style.image}>
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
      <div className={`${style.imageWrapper} ${style.image2}`}>
        <div className={style.image}>
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
