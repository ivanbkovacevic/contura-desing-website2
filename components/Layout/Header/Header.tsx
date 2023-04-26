import React, { useContext, useRef, useState } from "react";
import { Context } from "../../../context/context";
import Navigation from "./Navigation";
import Logo from "../../Reusable/Logo/Logo";
import cn from "classnames";
import style from "./Header.module.scss";
import Image from "next/image";
import useClickOutside from "../../../utils/onClickOutside";
import { useRouter } from "next/router";
import Hamburger from "../../Reusable/Icons/Hamburger";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const divRef = useRef(null);
  const { state } = useContext(Context);
  const { scrollFromTop, footerReached } = state;

  const router = useRouter();
  const closeNavigation = () => {
    setShowNavigation(false);
  };

  useClickOutside(divRef, closeNavigation, "hamburger");

  const navigationStyle = cn(style.justNavigationWrapper, {
    [style.colapsed]: !showNavigation,
  });

  const wrapperStyle = cn(
    style.wrapper,
    { [style.onAbout]: router.pathname === "/about" },
    { [style.onAll]: router.pathname !== "/about" },
    { [style.scrollFromTopEnough]: scrollFromTop > 300 },
    { [style.footerReached]: footerReached },
    { [style.noBackground]: footerReached }
  );
  const hamburgerBtnStyle = cn(
    style.hamburgerBtn,
    { [style.whiteHamburgerLines]: footerReached }
  );

  return (
    <header className={wrapperStyle}>
      <div className={style.content}>
        <div>
          <Logo />
        </div>
        <div ref={divRef} className={style.navigationAllWrapper}>
          <div className={navigationStyle}>
            <Navigation close={closeNavigation} />
          </div>
          <button
            id="hamburger"
            onClick={() => setShowNavigation(!showNavigation)}
            className={hamburgerBtnStyle}
          >
         <Hamburger />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
