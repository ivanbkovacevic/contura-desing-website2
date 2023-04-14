import React, { useState } from 'react';
import Navigation from './Navigation';
import Logo from '../../Logo/Logo';
import cn from 'classnames';
import style from './Header.module.scss';

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
    <header className={style.wrapper}>
       <Logo />
       <div className={style.navigationAllWrapper}>
          <div className={navigationStyle}>
            <Navigation close={closeNavigation} />
          </div>
          <button onClick={() => setShowNAvigation(!showNavigation)} className={style.hamburgerMenuWrapper}>
          </button>
        </div>
    </header>
  )
}

export default Header;