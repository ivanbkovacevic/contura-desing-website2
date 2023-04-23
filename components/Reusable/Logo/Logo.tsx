import React, { useContext } from "react";
import { Context } from "../../../context/context";
import Image from "next/image";
import Link from "next/link";
import LogoSymbol from "../Icons/LogoSymbol";
import style from "./Logo.module.scss";
import cn from "classnames";

const Logo = () => {
  const { state } = useContext(Context);
  const { scrollFromTop,footerReached } = state;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cubesStyle = cn(
    style.cubesWrapper,
    {[style.whiteBcg]: footerReached}
  )
  const logo =
    scrollFromTop < 400 ? (
      <Link href="/">
        <Image
          src="./assets/images/logo.svg"
          alt="logo"
          width={244}
          height={51}
        />
      </Link>
    ) : (
      <div onClick={handleClick} className={cubesStyle}>
        <LogoSymbol />
      </div>
    );
  return <div className={style.wrapper}>{logo}</div>;
};

export default Logo;
