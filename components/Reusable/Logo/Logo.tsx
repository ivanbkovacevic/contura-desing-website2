import React from "react";
import style from "./Logo.module.scss";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <Image
          src="./assets/images/logo.svg"
          alt="logo"
          width={244}
          height={51}
        />
      </Link>
    </div>
  );
};

export default Logo;
