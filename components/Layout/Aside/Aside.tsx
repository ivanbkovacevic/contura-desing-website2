import React from "react";
import Image from "next/image";
import style from "./Aside.module.scss";

const Aside = () => {
  return (
    <section className={style.wrapper}>
      <Image
        src="/assets/images/newIllustrationMountainsAsia2.png"
        alt="moutins"
        fill
      />
    </section>
  );
};

export default Aside;
