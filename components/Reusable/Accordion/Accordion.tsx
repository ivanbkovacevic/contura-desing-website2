import React, { useState } from "react";
import cn from "classnames";
import style from "./Accordion.module.scss";
import Image from "next/image";
import ArrowIcon from "../Icons/ArrowIcon";

interface AccordionProps {
  title: string;
  content: string;
  show: boolean;
  arrowColor?: 'white' | 'black';
  accClicked: () => void;
}
const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  show,
  arrowColor='black',
  accClicked,
}) => {
  const contentStyle = cn(style.content, { [style.colapsed]: show === false });
  const buttonStyle = cn({ [style.btnExpanded]: show });
  const arrowStyle = cn(style.arrow, 
    { [style.arrowExpanded]: show },
    { [style.arrowWhite]: arrowColor === 'white' },
    { [style.arrowBlack]: arrowColor === 'black' },
    );

  return (
    <div className={style.wrapper}>
      <button className={buttonStyle} onClick={accClicked}>
        <div className={style.insideBtnWrapper}>
          {title}
          <div className={arrowStyle}>
           <ArrowIcon />
          </div>
        </div>
      </button>
      <div className={contentStyle}>{content}</div>
    </div>
  );
};

export default Accordion;
