import Image from "next/image";
import React from "react";
import style from "./WorkGif.module.scss";

const WorkGif = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <Image src="/assets/images/workGif01.gif" fill  unoptimized alt="workgif" />
      </div>
    </div>
  );
};

export default WorkGif;
