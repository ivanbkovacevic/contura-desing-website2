import React from "react";
import style from "./WeAreContura.module.scss";

interface WeAreConturaProps {
  some?: string;
}

const WeAreContura: React.FC<WeAreConturaProps> = ({ some }) => {
  return (
    <section className={style.wrapper} data-centered="yes">
      <div className={style.centralPart}>
          <h1>Hey, we're ConturaDesign</h1>
          <h4>
            We create world-class digital products, web design, and branding.
            professionals who will help your business reach the top.
          </h4>
      </div>
    </section>
  );
};

export default WeAreContura;
