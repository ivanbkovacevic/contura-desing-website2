import React from "react";
import { TESTING } from "../constant";
import Image from "next/image";
import style from "./Testing.module.scss";

const Testing = () => {
  return (
    <div className={style.wrapper}>
      <h2>Testing and iteration</h2>
      <p>{TESTING[0]}</p>
      <p>{TESTING[1]}</p>
      <div className={style.imageWrapper}>
        <div className={`${style.image} ${style.image1}`}>
          <Image
            src="/assets/images/productDevelopment/invisionBoardsImge.png"
            alt="invisionBoardsImge"
            fill
          />
        </div>
        <p>invision Board screenshoot</p>
      </div>
      <div className={style.imageWrapper}>
        <div className={`${style.image} ${style.image2}`}>
          <Image
            src="/assets/images/productDevelopment/jiraImage.png"
            alt="jiraimage"
            fill
          />
        </div>
        <p>jira screenshoot</p>
      </div>
      <div className={style.image3}>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image
              src="/assets/images/productDevelopment/zeplinImage.png"
              alt="zeplin"
              fill
            />
          </div>
          <p>zepllin.in illustration screen</p>
        </div>
      </div>
    </div>
  );
};

export default Testing;
