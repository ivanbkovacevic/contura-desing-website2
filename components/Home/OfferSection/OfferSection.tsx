import React from "react";
import style from "./OfferSection.module.scss";
import Image from "next/image";
import { OFFER_LIST } from "./constant";

const OfferSection = () => {
  const offerList = () => {
    return OFFER_LIST.map((item) => {
      return (
        <div className={style.offerSingle}>
          <p>{item.text}</p>
          <div className={style.image}>
            <Image src={item.img} fill alt={item.text} />
          </div>
        </div>
      );
    });
  };

  return (
    <section className={style.wrapper} data-centered="yes">
      {offerList()}
    </section>
  );
};

export default OfferSection;
