import Image from "next/image";
import React from "react";
import style from "./WorkGif.module.scss";

const WorkGif = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <Image src="/assets/images/workGifHigherCroped.gif" fill alt="workgif" />
      </div>
    </div>
  );
};

export default WorkGif;
