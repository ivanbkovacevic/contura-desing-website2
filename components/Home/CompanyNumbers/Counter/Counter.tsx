import React, { useEffect, useState } from "react";
import cn from 'classnames';
import style from "./Counter.module.scss";

const Counter = () => {
  const [countClients, setCountClients] = useState(0);
  const [countYears, setCountYears] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountClients((countClients) => countClients + 10);
      setCountYears((countYears) => countYears + 0.1);
    }, 20);

    if (countClients >= 1000 || countYears >= 10) {
      clearInterval(countdownInterval);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countClients]);

  const numbersStyle = cn(
    {[style.colorGreen]: countClients >= 1000},
    {[style.colorBlack]: countClients < 1000},
  );

  return (
    <div className={style.numbersWrapper}>
      <p className={numbersStyle}>{countClients}+</p>
      <p>the clients</p>
      <p className={numbersStyle}>{Math.round(countYears)}+</p>
      <p>Years in bussines</p>
    </div>
  );
};

export default Counter;
