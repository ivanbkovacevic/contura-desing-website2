import React from 'react';
import style from './Navigation.module.scss';
import Link from 'next/link';

interface NavigationProps {

}

const Navigation:React.FC<NavigationProps> = () => {
  return (
    <nav className={style.wrapper}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;