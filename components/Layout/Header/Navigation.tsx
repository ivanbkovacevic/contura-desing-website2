import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Accordion from "../../Reusable/Accordion/Accordion";
import style from "./Navigation.module.scss";

interface NavigationProps {
  close: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ close }) => {
  const [toggleAccordion, setToggleAccordion] = useState<boolean>(false);

  const toggleAcc = () => {
    setToggleAccordion(!toggleAccordion);
  };

  const accordionLinks = () => {
    return (
      <ul className={style.productDevelopmentUl}>
        <li className={style.productDevelopment}>
          <Link href="/ui-ux-design">UI/UX Design</Link>
        </li>
        <li className={style.productDevelopment}>
          <Link href="/ui-ux-design">FrontEnd Development</Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className={style.wrapper}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <button onClick={close}>
            <Image
              src={"./assets/icons/hamburgerClose.svg"}
              alt="closemenu"
              width={20}
              height={20}
            />
          </button>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className={style.productDevelopmentLi}>
          <Accordion
            title="Product development"
            variant="Navigation"
            titleThickens="Light"
            accClicked={toggleAcc}
            show={toggleAccordion}
            content={accordionLinks()}
          />
        </li>

        <li className={style.getInTouch}>Lets get in touch</li>
        <li>
          <a href="mailto:igor@mijucic.com">igor@mijucic.com</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
