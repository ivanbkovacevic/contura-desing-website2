import React, { useContext } from "react";
import cn from "classnames";
import { Context } from "../../../context/context";
import Image from "next/image";
import Link from "next/link";
import style from "./Logo.module.scss";
import LogoSymbol from "../Icons/LogoSymbol";

const Logo = () => {
  const { state } = useContext(Context);
  const { scrollFromTop } = state;

  const logo =
    scrollFromTop < 700 ? (
      <Link href="/">
        <Image
          src="./assets/images/logo.svg"
          alt="logo"
          width={244}
          height={51}
        />
      </Link>
    ) : (
      <div className={style.cubesWrapper}>
        <LogoSymbol />
      </div>
    );
  return <div className={style.wrapper}>{logo}</div>;
};

export default Logo;
