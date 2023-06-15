import React, { ReactNode, useEffect, useState } from "react";
import AOS from "aos";
import Head from "next/head";
import Header from "./Header/Header";
import style from "./Layout.module.scss";
import Footer from "./Footer/Footer";
import FooterGrid from "./FooterGrid/FooterGrid";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Contura Design" }: Props) => {
  const [black, setBlack] = useState('');
  useEffect(() => {
    AOS.init({});
    const userInput = window.prompt('Enter the code that I have give you:');
   
    setBlack(userInput)
  }, []);
   
  return (
    <div className={style.wrapper}>
      {black === "MishaIViktorijaSkacuPoBarama" && (
        <>
          <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          </Head>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
          <FooterGrid />
        </>
      )}
    </div>
  );
};

export default Layout;
