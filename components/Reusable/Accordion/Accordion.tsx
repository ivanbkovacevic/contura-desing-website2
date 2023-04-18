import React, { useState } from "react";
import cn from "classnames";
import style from "./Accordion.module.scss";
import Image from "next/image";

interface AccordionProps {
  title: string;
  content: string;
  show: boolean;
  accClicked: () => void;
}
const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  show,
  accClicked,
}) => {
  const contentStyle = cn(style.content, { [style.colapsed]: show === false });
  const buttonStyle = cn({ [style.btnExpanded]: show });
  const arrowStyle = cn(style.arrow, { [style.arrowExpanded]: show });

  return (
    <div className={style.wrapper}>
      <button className={buttonStyle} onClick={accClicked}>
        <div className={style.insideBtnWrapper}>
          {title}
          <div className={arrowStyle}>
            <Image
              src="./assets/icons/arrowDown.svg"
              alt="arrowdown"
              width={20}
              height={20}
            />
          </div>
        </div>
      </button>
      <div className={contentStyle}>{content}</div>
    </div>
  );
};

export default Accordion;
