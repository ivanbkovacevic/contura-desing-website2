import React, { useContext, useRef, useState } from "react";
import { Context } from "../../../context/context";
import Navigation from "./Navigation";
import Logo from "../../Reusable/Logo/Logo";
import cn from "classnames";
import style from "./Header.module.scss";
import Image from "next/image";
import useClickOutside from "../../../utils/onClickOutside";
import { useRouter } from "next/router";

interface HeaderProps {
  isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const [showNavigation, setShowNAvigation] = useState<boolean>(false);
  const divRef = useRef(null);
  const { state } = useContext(Context);
  const { scrollFromTop } = state;

  const router = useRouter();
  const closeNavigation = () => {
    setShowNAvigation(false);
  };

  useClickOutside(divRef, closeNavigation, "hamburger");

  const navigationStyle = cn(style.justNavigationWrapper, {
    [style.colapsed]: !showNavigation,
  });

  const wrapperStyle = cn(
    style.wrapper,
    { [style.onAbout]: router.pathname === "/about" },
    { [style.onAll]: router.pathname !== "/about" },
    {[style.scrollFromTopEnough]: scrollFromTop > 300},

  );

  return (
    <header className={wrapperStyle}>
      <div className={style.content}>
        <div style={{ display: isVisible ? "block" : "none" }}>
          <Logo />
        </div>
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
      </div>
    </header>
  );
};

export default Header;
