import React, { ReactNode, useRef, useState } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Waypoint } from "react-waypoint";

import style from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Contura Design" }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleWaypointEnter = () => {
    setIsVisible(false);
  };
  const handleWaypointLeave = () => {
    setIsVisible(true);
  };

  const rootRef = useRef(null);

  return (
    <div className={style.wrapper} ref={rootRef}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header isVisible={isVisible} />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
