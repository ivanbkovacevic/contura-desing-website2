import React from "react";
import style from "./Testing.module.scss";
import { TESTING } from "../constant";
import Image from "next/image";

const Testing = () => {
  return (
    <div className={style.wrapper}>
      <h2>Testing and iteration</h2>
      <p>{TESTING[0]}</p>
      <p>{TESTING[1]}</p>
      <div className={style.imageWrapper}>
        <div style={{ height: "68.5rem" }} className={style.image}>
          <Image
            src="/assets/images/productDevelopment/invisionBoardsImge.png"
            alt="invisionBoardsImge"
            fill
          />
        </div>
        <p>invision Board screenshoot</p>
      </div>
      <div className={style.imageWrapper}>
        <div style={{ height: "59.2rem" }} className={style.image}>
          <Image
            src="/assets/images/productDevelopment/jiraImage.png"
            alt="jiraimage"
            fill
          />
        </div>
        <p>jira screenshoot</p>
      </div>
      <div className={style.imageWrapper}>
        <div
          style={{ height: "79.3rem", width: "141rem", marginLeft: "-22%" }}
          className={style.image}
        >
          <Image
            src="/assets/images/productDevelopment/zeplinImage.png"
            alt="zeplin"
            fill
          />
        </div>
        <p>zepllin.in illustration screen</p>
      </div>
    </div>
  );
};

export default Testing;
