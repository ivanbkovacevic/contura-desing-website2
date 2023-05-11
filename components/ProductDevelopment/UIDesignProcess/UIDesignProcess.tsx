import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./UIDesignProcess.module.scss";
import {
  UI_DESIGN_PROCESS,
  UI_DESIGN_PROCESS_HEADING,
  UI_DESIGN_PROCESS_LAST_PARAGRAPH,
} from "../constant";

const UIDesignProcess = () => {
  const uiDesignProcess = () => {
    return UI_DESIGN_PROCESS.map((item) => {
      const keyId = uuidv4();
      return <li key={keyId}>{item.li}</li>;
    });
  };
  return (
    <div className={style.wrapper}>
      <h2>{UI_DESIGN_PROCESS_HEADING}</h2>
      <ul>{uiDesignProcess()}</ul>
      <p>{UI_DESIGN_PROCESS_LAST_PARAGRAPH}</p>
    </div>
  );
};

export default UIDesignProcess;
