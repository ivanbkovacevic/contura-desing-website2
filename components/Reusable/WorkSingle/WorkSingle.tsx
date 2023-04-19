import React from "react";
import Image from "next/image";
import cn from "classnames";
import { Work } from "./constant";
import style from "./WorkSingle.module.scss";
import { COLORS, ORDER } from "../../../utils/globalConstans";

const WorkSingle: React.FC<Work> = ({
  description,
  title,
  img,
  color,
  order,
  link,
}) => {
  const wrapperImgAndDescription = cn(
    style.wrapperImgAndDescription,
    { [style.orderImageUp]: order === ORDER.PICTURE_UP },
    { [style.orderImageDown]: order === ORDER.PICTURE_DOWN }
  );

  return (
    <a href={link} className={style.wrapper} target="_blank">
      <div key={title} className={wrapperImgAndDescription}>
        <div className={style.description} style={{ backgroundColor: color }}>
          <h3>{description}</h3>
        </div>
        <div className={style.image}>
          <Image src={img} fill alt={title} quality={100} />
        </div>
      </div>
      <p>{title}</p>
    </a>
  );
};

export default WorkSingle;
