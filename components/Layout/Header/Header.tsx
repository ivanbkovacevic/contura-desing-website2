import React, { useState } from 'react';
import Navigation from './Navigation';
import Logo from '../../Reusable/Logo/Logo';
import cn from 'classnames';
import style from './Header.module.scss';
import Image from 'next/image';

interface HeaderProps {

}

const Header:React.FC<HeaderProps> = () => {
  const[showNavigation, setShowNAvigation] = useState<boolean>(false);

  const closeNavigation = () => {
    setShowNAvigation(false)
  };

  const navigationStyle = cn(
    style.justNavigationWrapper,
    {[style.hide]: !showNavigation}
  )

  return (
    <header className={style.wrapper} data-centered='yes'>
       <Logo />
       <div className={style.navigationAllWrapper}>
          <div className={navigationStyle}>
            <Navigation close={closeNavigation} />
          </div>
          <button onClick={() => setShowNAvigation(!showNavigation)} className={style.hamburgerMenuWrapper}>
          <Image
            src={"./assets/icons/hamburger.svg"} 
            alt="openMenu"
            width={50}
            height={50} 
         />
          </button>
        </div>
    </header>
  )
}

export default Header;