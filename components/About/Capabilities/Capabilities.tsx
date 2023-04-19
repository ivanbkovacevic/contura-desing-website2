import React from "react";
import { CAPABILITIES_LIST } from "./constants";
import style from "./Capabilites.module.scss";

const Capabilites: React.FC = () => {
  const generateCapabilities = () => {
    return CAPABILITIES_LIST.map((item) => {
      return (
        <div className={style.singleCapabilitiWrapper}>
          <h3>{item.title}</h3>
          <p>{item.description_1}</p>
          <p>{item.description_2}</p>
          <p>{item.description_3}</p>
          <p>{item.description_4}</p>
          <p>{item.description_5}</p>
        </div>
      );
    });
  };
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <div className={style.heading}>
          <h3>Capabilites</h3>
        </div>
        <div className={style.capabilitiesList}>{generateCapabilities()}</div>
      </div>
    </div>
  );
};

export default Capabilites;
