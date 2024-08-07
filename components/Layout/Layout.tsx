import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import Head from "next/head";
import Header from "./Header/Header";
import style from "./Layout.module.scss";
import FooterGrid from "./FooterGrid/FooterGrid";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Contura Design" }: Props) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={style.wrapper}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Header />
      <div className={style.demo}>THIS IS A DEMO</div>
      <main>{children}</main>
      <FooterGrid />
    </div>
  );
};

export default Layout;
