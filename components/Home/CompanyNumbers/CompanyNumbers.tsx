import React, { useEffect, useState } from "react";
import style from "./CompanyNumbers.module.scss";

const CompanyNumbers = () => {
  const [countClients, setCountClients] = useState(0);
  const [countYears, setCountYears] = useState(0);

  useEffect(() => {
    const countdownIntervalClients = setInterval(() => {
      setCountClients(countClients => countClients + 1);
    }, 100);

    const countdownIntervalYears = setInterval(() => {
      setCountYears(countYears => countYears + 1);
    }, 1000);

    if (countClients === 110) {
      clearInterval(countdownIntervalClients);
    }
    if (countYears === 10) {
      clearInterval(countdownIntervalYears);
    }

    return () => {
      clearInterval(countdownIntervalClients);
      clearInterval(countdownIntervalYears);
    };
  }, [countClients]);

  return (
    <div className={style.wrapper}>
      <div className={style.description}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro
          quaerat aperiam, repellendus esse rerum dolorum, perferendis saepe
          eius dolorem mollitia accusantium quidem ea nam corporis quam ipsa
          laboriosam in voluptates error inventore fugiat debitis consequatur
          minima. Beatae, vel magni et aliquam illum pariatur hic recusandae
          laboriosam optio, perferendis provident.
        </p>
      </div>
      <div className={style.numbersWrapper}>
        <p>{countClients}+</p>
        <p>the clients</p>
        <p>10+</p>
        <p>Years in bussines</p>
      </div>
    </div>
  );
};

export default CompanyNumbers;
