import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import style from './Layout.module.scss'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Contura Design' }: Props) => (
  <div className={style.wrapper}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
   <Header />
   <main>
     {children}
   </main>
   <Footer />
  </div>
)

export default Layout