import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../../context/context";
import Navigation from "./Navigation";
import Logo from "../../Reusable/Logo/Logo";
import cn from "classnames";
import useClickOutside from "../../../utils/onClickOutside";
import { useRouter } from "next/router";
import Hamburger from "../../Reusable/Icons/Hamburger";
import style from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const divRef = useRef(null);
  const { state } = useContext(Context);
  const { scrollFromTop, footerReached, scrolledUp } = state;
  const [windowWidth, setWindowWidth] = useState<number>(1);
  const router = useRouter();
  const closeNavigation = () => {
    setShowNavigation(false);
  };

  useClickOutside(divRef, closeNavigation, "hamburger");

  const navigationStyle = cn(style.justNavigationWrapper, {
    [style.colapsed]: !showNavigation,
  });

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  console.log(windowWidth)
  const wrapperStyle = cn(
    style.wrapper,
    { [style.onAbout]: router.pathname === "/about" },
    { [style.onAll]: router.pathname !== "/about" },
    { [style.scrollFromTopEnough]: scrollFromTop > 300 },
    { [style.footerReached]: footerReached },
    { [style.noBackground]: footerReached },
    { [style.onMobileShow]: scrolledUp && windowWidth < 640 },
    { [style.onMobileHide]: !scrolledUp && windowWidth < 640 }
  );
  const hamburgerBtnStyle = cn(style.hamburgerBtn, {
    [style.whiteHamburgerLines]: footerReached,
  });

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
