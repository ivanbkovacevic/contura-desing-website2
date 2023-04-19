import React from "react";
import style from "./WeAreContura.module.scss";

interface WeAreConturaProps {
  some?: string;
}

const WeAreContura: React.FC<WeAreConturaProps> = ({ some }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.centralPart}>
        <h1>Hey, we're ConturaDesign</h1>
        <h4>
          We create world-class digital products, web design, and branding.
          professionals who will help your business reach the top.
        </h4>
      </div>
    </div>
  );
};

export default WeAreContura;
