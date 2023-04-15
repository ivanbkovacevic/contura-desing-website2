import React from 'react'
import style from './Clients.module.scss'
import { CLIENTS } from './constants';
import Image from 'next/image';
import cn from 'classnames';

interface ClientsProps {
    backgroundtype: string;
    centered?: string;
    contentCentered?: string;
}

const Clients:React.FC<ClientsProps> = ({backgroundtype, centered='yes', contentCentered}) => {

 const wrapperStyle = cn(
    style.wrapper,
    {[style.backgroundBlack]: backgroundtype === 'black'},
    {[style.backgroundWhite]: backgroundtype === 'white'},
 )
 const contentStyle = cn(
    style.content,
    {[style.contentCentered]: contentCentered === 'yes'},
 )
  const generateClients = () => {
    return CLIENTS.map((item) => {
        return (
        <div className={style.clientWrapper}>
            <div className={style.image}>
                <Image
                src={item.img}
                alt={item.title}
                fill
                />
            </div>
        </div>
        )
    })
  };

  return (
    <section className={wrapperStyle} data-centered={centered}>
      <div className={contentStyle}>
        {generateClients()}
      </div>
    </section>
  )
}

export default Clients;