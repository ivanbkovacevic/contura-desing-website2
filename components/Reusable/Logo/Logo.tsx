import React, { useContext } from "react";
import { Context } from "../../../context/context";
import Image from "next/image";
import Link from "next/link";
import LogoSymbol from "../Icons/LogoSymbol";
import style from "./Logo.module.scss";

const Logo = () => {
  const { state } = useContext(Context);
  const { scrollFromTop } = state;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <div onClick={handleClick} className={style.cubesWrapper}>
        <LogoSymbol />
      </div>
    );
  return <div className={style.wrapper}>{logo}</div>;
};

export default Logo;
