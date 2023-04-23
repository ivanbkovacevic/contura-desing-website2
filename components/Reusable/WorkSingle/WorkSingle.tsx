import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import cn from "classnames";
import { Work } from "./constant";
import { ORDER } from "../../../utils/globalConstans";
import style from "./WorkSingle.module.scss";

const WorkSingle: React.FC<Work> = ({
  description,
  title,
  img,
  color,
  order,
  link,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  const wrapperImgAndDescription = cn(
    style.wrapperImgAndDescription,
    { [style.orderImageUp]: order === ORDER.PICTURE_UP },
    { [style.orderImageDown]: order === ORDER.PICTURE_DOWN }
  );

  return (
    <a href={link} className={style.wrapper} target="_blank">
      <div data-aos="fade-up" key={title} className={wrapperImgAndDescription}>
        <div className={style.description} style={{ backgroundColor: color }}>
          <h3>{description}</h3>
        </div>
        <div className={style.image}>
          <Image src={img} fill alt={title} quality={75} unoptimized />
        </div>
      </div>
      <p data-aos="fade-up" data-aos-delay="300">
        {title}
      </p>
    </a>
  );
};

export default WorkSingle;
