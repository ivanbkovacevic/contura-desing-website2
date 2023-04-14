import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import FAQ from '../Home/FAQ/FAQ'
import Slider from '../Reusable/Slider/Slider'
import { useRouter } from 'next/router'
import style from './Layout.module.scss'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Contura Design' }: Props) => {
  const router = useRouter();
  return (
  <div className={style.wrapper}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={style.contentCentered}>
      <Header />
        <main>
          {children}
        </main>
    </div>
    { router.pathname === '/' ? <Slider /> : null }
    <FAQ />
   <Footer />
  </div>
)}

export default Layout