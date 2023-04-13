import React from 'react';
import Navigation from './Navigation';
import style from './Header.module.scss';

interface HeaderProps {

}

const Header:React.FC<HeaderProps> = () => {
  return (
    <header className={style.wrapper}>
        <h1>    
        Contura design
        </h1>
        <Navigation />
    </header>
  )
}

export default Header;