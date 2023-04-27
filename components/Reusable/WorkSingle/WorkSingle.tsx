import React, { useEffect, useRef, useState } from "react";
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
  const elementRef = useRef(null);
  const [rectLeft, setRectLeft] = useState(null);
  const [rectTop, setRectTop] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: null, y: null });
  const [spanPosition, setSpanPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      setRectLeft(rect.left);
      setRectTop(rect.top);

      setSpanPosition({
        y: cursorPosition.y - (rectTop + 50),
        x: cursorPosition.x - rectLeft,
      });
    }
  }, [cursorPosition]);

  const wrapperImgAndDescription = cn(
    style.wrapperImgAndDescription,
    { [style.orderImageUp]: order === ORDER.PICTURE_UP },
    { [style.orderImageDown]: order === ORDER.PICTURE_DOWN }
  );

  function handleMouseMove(event: { clientX: any; clientY: any }) {
    const x = event.clientX;
    const y = event.clientY;
    setCursorPosition({ x, y });
  }

  return (
    <a href={link} className={style.wrapper} target="_blank">
      <div
        ref={elementRef}
        onMouseMove={handleMouseMove}
        data-aos="fade-up"
        data-aos-duration="1000"
        key={title}
        className={wrapperImgAndDescription}
      >
        <span
          style={{
            top: spanPosition.y,
            left: spanPosition.x,
          }}
        >
          Learn more
        </span>
        <div className={style.description} style={{ backgroundColor: color }}>
          <h3 style={{ color: descFontColor }}>{description}</h3>
        </div>
        <div className={style.image}>
          <Image src={img} fill alt={title} quality={100} />
        </div>
      </div>
      <p data-aos="fade-up" data-aos-delay="300">
        {title}
      </p>
      <p className={style.subtitle}>{subtitle}</p>
    </a>
  );
};

export default WorkSingle;
