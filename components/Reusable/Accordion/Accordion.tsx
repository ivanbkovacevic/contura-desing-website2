import React, { useState } from "react";
import cn from "classnames";
import style from "./Accordion.module.scss";

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

  return (
    <div className={style.wrapper}>
      <button className={buttonStyle} onClick={accClicked}>{title} X</button>
      <div className={contentStyle}>{content}</div>
    </div>
  );
};

export default Accordion;
