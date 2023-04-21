import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import style from "./CompanyNumbers.module.scss";
import Counter from "./Counter/Counter";

const CompanyNumbers = () => {
  const [showCounter, setShowCounter] = useState(false);
  const handleEnter = () => {
    setShowCounter(true);
  };

  return (
    <Waypoint onEnter={handleEnter}>
      <div className={style.wrapper}>
        <div className={style.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            porro quaerat aperiam, repellendus esse rerum dolorum, perferendis
            saepe eius dolorem mollitia accusantium quidem ea nam corporis quam
            ipsa laboriosam in voluptates error inventore fugiat debitis
            consequatur minima. Beatae, vel magni et aliquam illum pariatur hic
            recusandae laboriosam optio, perferendis provident.
          </p>
        </div>
        <div className={style.numbersWrapper}>{showCounter && <Counter />}</div>
      </div>
    </Waypoint>
  );
};

export default CompanyNumbers;
