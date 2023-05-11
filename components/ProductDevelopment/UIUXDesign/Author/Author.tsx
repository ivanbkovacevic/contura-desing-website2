import React from "react";
import Image from "next/image";
import style from "./Author.module.scss";

const Author = () => {
  return (
    <div className={style.wrapper}>
      <Image
        src="/assets/images/productDevelopment/authorIgor.png"
        alt=""
        width={75}
        height={75}
      />
      <div>
        <h6>Igor Mijucic</h6>
        <p>CEO & Product Designer</p>
      </div>
    </div>
  );
};

export default Author;
