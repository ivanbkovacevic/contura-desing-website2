import Link from 'next/link';
import React from 'react'

interface LinkButtonProps {
title: string;
link: string;
}

const LinkButton:React.FC<LinkButtonProps> = ({title, link}) => {
  return (
    <div>
        <Link href={link}>
          {title}
          ----
        </Link>
    </div>
  )
}

export default LinkButton