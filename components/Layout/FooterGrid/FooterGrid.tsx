import React, { useContext } from "react";
import { Waypoint } from "react-waypoint";
import { Context } from "../../../context/context";
import Image from "next/image";
import Link from "next/link";
import style from "./FooterGrid.module.scss";

interface FooterGridProps {}

const FooterGrid: React.FC<FooterGridProps> = () => {
  const { handleFooterReached } = useContext(Context);

  return (
    <footer className={style.wrapper}>
      <div className={style.content}>
        <div className={style.getInTouch}>
          <p>Let's Get in Touch.</p>
          <a href="mailto:igor@mijucic.com">my.web@site.com</a>
        </div>
          <div className={style.imageLogo}>
            <Image
              src="/assets/images/logoSymbol.svg"
              alt="logo"
              width={85}
              height={79}
            />
          </div>
        <div className={style.adress}>
          <p>Alekse Santica 19,</p>
          <p>Vojvodina, Novi Sad, 21000</p>
        </div>
        <div className={style.navigationWrapper}>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <span>Home</span>
                </Link>
                <Link href="https://www.linkedin.com/in/igormijucic/">
                  <Image
                    src="/assets/icons/linkedinIcon.svg"
                    alt="My Icon"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="/work">
                  <span>Work</span>
                </Link>
                <Link href="https://www.instagram.com/contura_design/">
                  <Image
                    src="/assets/icons/instagramIcon.svg"
                    alt="My Icon"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span>About</span>
                </Link>
                <Link href="https://dribbble.com/IgorMijucic">
                  <Image
                    src="/assets/icons/dribbbleIcon.svg"
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-design">
                  <span>UI/UX Design</span>
                </Link>
                <Link href="/ui-ux-design">
                  <Image
                    src="/assets/icons/dribbbleIcon.svg"
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
              <Waypoint
                onEnter={handleFooterReached}
                onLeave={handleFooterReached}
              >
                <li>
                  <span className={style.linkNoWare}>d</span>
                  <Link href="https://www.behance.net/IgorMijucic">
                    <Image
                      src="/assets/icons/behanceIcon.svg"
                      alt="behance"
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              </Waypoint>
            </ul>
          </nav>
        </div>
        <div className={style.imageBoys}>
          <Image src="/assets/images/footerImageMomci.png" alt="prolece" fill />
        </div>
      </div>
    </footer>
  );
};

export default FooterGrid;
