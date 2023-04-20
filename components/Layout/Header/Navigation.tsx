import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./Navigation.module.scss";

interface NavigationProps {
  close: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ close }) => {
  return (
    <nav className={style.wrapper}>
      <button onClick={close}>
        <Image
          src={"./assets/icons/hamburgerClose.svg"}
          alt="closemenu"
          width={20}
          height={20}
        />
      </button>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className={style.getInTouch}>Lets get in touch</li>
        <li>
          <a href="mailto:igor@mijucic.com">igor@mijucic.com</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
