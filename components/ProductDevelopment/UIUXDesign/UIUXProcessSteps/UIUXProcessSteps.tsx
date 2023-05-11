import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./UIUXProcessSteps.module.scss";
import {
  PROCESS_STEPS,
  PROCESS_STEPS_HEADING,
  PROCESS_STEPS_LAST_PARAGRAPH,
} from "../constant";

const UIUXProcessSteps = () => {
  const processSteps = () => {
    return PROCESS_STEPS.map((item) => {
      const keyId = uuidv4();
      return (
        <div key={keyId}>
          <h4>{item.step}</h4>
          <p>{item.description}</p>
        </div>
      );
    });
  };
  return (
    <div className={style.wrapper}>
      <h2>{PROCESS_STEPS_HEADING}</h2>
      {processSteps()}
      <p className={style.paragraphGreen}>{PROCESS_STEPS_LAST_PARAGRAPH}</p>
    </div>
  );
};

export default UIUXProcessSteps;
