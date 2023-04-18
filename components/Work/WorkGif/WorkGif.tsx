import Image from "next/image";
import React from "react";
import style from "./WorkGif.module.scss";

const WorkGif = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.image}>
        <Image src="/assets/images/workGifHigher.gif" fill alt="workgif" />
      </div>
    </section>
  );
};

export default WorkGif;
