import React from "react";
import cn from "classnames";
import ArrowIcon from "../Icons/ArrowIcon";
import style from "./Accordion.module.scss";

interface AccordionProps {
  title: string;
  content: string | JSX.Element;
  show: boolean;
  arrowColor?: "white" | "black";
  accClicked: () => void;
  variant?: "designS" | "FAQ";
}
const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  show,
  arrowColor = "black",
  accClicked,
  variant = "designS",
}) => {
  const contentStyle = cn(
    style.content,
    { [style.colapsed]: show === false },
    { [style.contentDesignStrategy]: variant === "designS" },
    { [style.contentFAQ]: variant === "FAQ" }
  );

  const arrowStyle = cn(
    style.arrow,
    { [style.arrowExpandedGreen]: show && variant === "designS" },
    { [style.arrowExpandedLila]: show && variant === "FAQ" },
    { [style.arrowWhite]: arrowColor === "white" },
    { [style.arrowBlack]: arrowColor === "black" }
  );
  const titleStile = cn(
    style.title,
    { [style.titleBlack]: variant === "designS" },
    { [style.titleWhite]: variant === "FAQ" },
    { [style.btnExpandedGreen]: show && variant === "designS" },
    { [style.btnExpandedLila]: show && variant === "FAQ" }
  );

  return (
    <div className={style.wrapper}>
      <button onClick={accClicked}>
        <div className={style.insideBtnWrapper}>
          <p className={titleStile}>{title}</p>
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
