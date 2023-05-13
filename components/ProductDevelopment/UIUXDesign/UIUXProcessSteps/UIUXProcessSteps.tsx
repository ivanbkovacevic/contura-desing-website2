import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./UIUXProcessSteps.module.scss";
import {
  PROCESS_STEPS,
  PROCESS_STEPS_HEADING,
  PROCESS_STEPS_LAST_PARAGRAPH,
} from "../constant";
import Link from "next/link";
import Image from "next/image";

const UIUXProcessSteps = () => {
  const processSteps = () => {
    return PROCESS_STEPS.map((item) => {
      const keyId = uuidv4();
      return (
        <div key={keyId}>
          <Link href={`#${item.step}`}>{item.step}</Link>
          <p>{item.description}</p>
        </div>
      );
    });
  };
  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <div className={style.image}>
          <Image
            src="/assets/images/productDevelopment/designImage.png"
            alt=""
            fill
          />
        </div>
      </div>
      <h2>{PROCESS_STEPS_HEADING}</h2>
      {processSteps()}
      <p className={style.paragraphGreen}>{PROCESS_STEPS_LAST_PARAGRAPH}</p>
    </div>
  );
};

export default UIUXProcessSteps;
