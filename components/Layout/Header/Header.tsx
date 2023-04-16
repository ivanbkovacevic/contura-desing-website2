import React, { useRef, useState } from "react";
import Navigation from "./Navigation";
import Logo from "../../Reusable/Logo/Logo";
import cn from "classnames";
import style from "./Header.module.scss";
import Image from "next/image";
import useClickOutside from "../../../utils/onClickOutside";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showNavigation, setShowNAvigation] = useState<boolean>(false);
  const divRef = useRef(null);

  const closeNavigation = () => {
    setShowNAvigation(false);
  };

  useClickOutside(divRef, closeNavigation, "hamburder");

  const navigationStyle = cn(style.justNavigationWrapper, {
    [style.hide]: !showNavigation,
  });

  return (
    <header className={style.wrapper} data-centered="yes">
      <Logo />
      <div ref={divRef} className={style.navigationAllWrapper}>
        <div className={navigationStyle}>
          <Navigation close={closeNavigation} />
        </div>
        <button
          id="hamburger"
          onClick={() => setShowNAvigation(!showNavigation)}
          className={style.hamburgerMenuWrapper}
        >
          <Image
            src={"./assets/icons/hamburger.svg"}
            alt="openMenu"
            width={50}
            height={50}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
