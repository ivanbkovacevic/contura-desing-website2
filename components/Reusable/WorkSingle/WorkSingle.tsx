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
  subtitle,
  img,
  color,
  order,
  link,
  descFontColor,
}) => {

  const wrapperImgAndDescription = cn(
    style.wrapperImgAndDescription,
    { [style.orderImageUp]: order === ORDER.PICTURE_UP },
    { [style.orderImageDown]: order === ORDER.PICTURE_DOWN }
  );

  return (
    <a href={link} className={style.wrapper} target="_blank">
      <div data-aos="fade-up" data-aos-duration="1000"  key={title} className={wrapperImgAndDescription}>
          <span>Learn more</span>
        <div className={style.description} style={{ backgroundColor: color }}>
          <h3 style={{ color: descFontColor }}>{description}</h3>
        </div>
        <div className={style.image}>
          <Image src={img} fill alt={title} quality={100}  />
        </div>
      </div>
      <p data-aos="fade-up" data-aos-delay="300">
        {title}
      </p>
      <p data-aos="fade-up" data-aos-delay="400">
        {subtitle}
      </p>
    </a>
  );
};

export default WorkSingle;
