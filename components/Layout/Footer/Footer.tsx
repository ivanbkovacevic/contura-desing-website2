import React from 'react';
import style from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {

}

const Footer:React.FC<FooterProps> = () => {
  return (
    <footer className={style.wrapper}>
     <div className={style.getInTouch}>
        <p>Get in Touch</p>
        <a href="mailto:igor@mijucic.com">my.web@site.com</a>
        <p>Alekse Šantića 19,</p>
        <p>Vojvodina, Novi Sad, 21000</p>
        <div className={style.image}>
            <Image
              src='/assets/images/prolece.png'
              alt="prolece"
              fill
              />
          </div>
     </div>
     <div className={style.navigationWrapper}>
        <div className={style.imageLogo}>
                <Image
                  src='/assets/images/logoSymbol.svg'
                  alt="logo"
                  fill
                  />
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Home
                  <Image src="/assets/icons/instagramIcon.svg" alt="My Icon" width={20} height={20} />              
                </Link>
              </li>
              <li>
                <Link href="/work">
                  Work  
                  <Image src="/assets/icons/instagramIcon.svg" alt="My Icon" width={20} height={20} />
                </Link>                        
              </li>
              <li>
                <Link href="/about">About
                <Image src="/assets/icons/instagramIcon.svg" alt="My Icon" width={20} height={20} />              
                </Link>
              </li>
              <li>
                <Link href="">
                  <span></span>
                   <Image src="/assets/icons/instagramIcon.svg" alt="My Icon" width={20} height={20} />              
                </Link>
              </li>
            </ul>
          </nav>
     </div>
    </footer>
  )
}

export default Footer;