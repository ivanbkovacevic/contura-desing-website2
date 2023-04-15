import React from 'react'
import Image from 'next/image';
import cn from 'classnames'
import { Work } from './constant';
import style from './WorkSingle.module.scss'
import { COLORS, ORDER } from '../../../utils/globalConstans';


const WorkSingle:React.FC<Work> = ({description,
  title,
  img,
  color,
  order,}) => {

    const wrapperImgAndDescription = cn(
      style.wrapperImgAndDescription,
      {[style.orderImageUp]: order === ORDER.PICTURE_UP},
      {[style.orderImageDown]: order === ORDER.PICTURE_DOWN}
    );


    return (
      <div className={style.wrapper}>
        <div key={title} className={wrapperImgAndDescription}>
          <div className={style.description} style={{backgroundColor: color}}>
            <h3>{description}</h3>
          </div>
            <div className={style.image}>
              <Image 
                src={img}
                fill
                alt={title}
                />
            </div>
        </div>
            <p>{title}</p>
      </div>
      )
}

export default WorkSingle;
