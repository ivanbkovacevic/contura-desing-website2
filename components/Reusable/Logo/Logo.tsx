import React from 'react'
import style from './Logo.module.scss';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image
         src="./assets/images/logo.svg" 
         alt="logo"
         width={244}
         height={51} 
         />
      </div>
  )
}

export default Logo;
