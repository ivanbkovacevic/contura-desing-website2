import Link from 'next/link';
import React from 'react'
import style from './ButtonLink.module.scss'

interface ButtonLinkProps {
title: string;
link: string;
}

const ButtonLink:React.FC<ButtonLinkProps> = ({title, link}) => {
  
  return (
    <div className={style.wrapper}>
        <Link href={link}>
          {title}
          ----
        </Link>
    </div>
  )
}

export default ButtonLink