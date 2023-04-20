import Link from "next/link";
import React from "react";
import cn from "classnames";
import ArrowRight from "../Icons/ArrowRight";
import style from "./ButtonLink.module.scss";

interface ButtonLinkProps {
  title: string;
  link: string;
  position?: "left" | "center" | "right";
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  title,
  link,
  position = "center",
}) => {
  const btnLinkStyle = cn(
    style.wrapper,
    { [style.center]: position === "center" },
    { [style.left]: position === "left" }
  );

  return (
    <div className={btnLinkStyle} data-centered="yes">
      <Link href={link}>
        <span>{title}</span>
        <ArrowRight />
      </Link>
    </div>
  );
};

export default ButtonLink;
