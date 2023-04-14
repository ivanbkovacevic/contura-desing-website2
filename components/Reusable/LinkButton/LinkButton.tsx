import Link from 'next/link';
import React from 'react'
import style from './LinkButton.module.scss'



interface LinkButtonProps {
title: string;
link: string;
}

const LinkButton:React.FC<LinkButtonProps> = ({title, link}) => {
  
  return (
    <div className={style.wrapper}>
        <Link href={link}>
          {title}
          ----
        </Link>
    </div>
  )
}

export default LinkButton