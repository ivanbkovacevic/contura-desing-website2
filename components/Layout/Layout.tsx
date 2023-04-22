import React, { ReactNode, useRef, useState } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import style from "./Layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Contura Design" }: Props) => {

  return (
    <div className={style.wrapper}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
