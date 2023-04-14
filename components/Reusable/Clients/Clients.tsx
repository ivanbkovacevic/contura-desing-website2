import React from 'react'
import style from './Clients.module.scss'
import { CLIENTS } from './constants';
import Image from 'next/image';
import cn from 'classnames';

interface ClientsProps {
    backgroundtype: string;
}

const Clients:React.FC<ClientsProps> = ({backgroundtype}) => {

 const wrapperStyle = cn(
    style.wrapper,
    {[style.backgroundBlack]: backgroundtype === 'black'},
    {[style.backgroundWhite]: backgroundtype === 'white'},
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
    <div className={wrapperStyle}>
        {generateClients()}
    </div>
  )
}

export default Clients;