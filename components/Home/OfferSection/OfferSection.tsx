import React from "react";
import style from "./OfferSection.module.scss";
import Image from "next/image";
import { OFFER_LIST } from "./constant";

const OfferSection = () => {
  const offerList = () => {
    return OFFER_LIST.map((item) => {
      return (
        <div className={style.offerSingle} key={item.text}>
          <p>{item.text}</p>
          <div className={style.image}>
            <Image src={item.img} fill alt={item.text} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className={style.wrapper}>
      {offerList()}
    </div>
  );
};

export default OfferSection;
