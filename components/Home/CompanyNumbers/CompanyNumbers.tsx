import React from "react";
import style from "./CompanyNumbers.module.scss";

const CompanyNumbers = () => {
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
        <p>1000+</p>
        <p>the clients</p>
        <p>10+</p>
        <p>Years in bussines</p>
      </div>
    </div>
  );
};

export default CompanyNumbers;
