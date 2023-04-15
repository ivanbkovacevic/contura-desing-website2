import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Slider.module.scss'
import Image from 'next/image';

interface SliderProps {
    variant: {
        slidesPerView: number;
        slidesList: any[];
    };
}
const Slider:React.FC<SliderProps> = ({variant}) => {

    const generateSlides = () => {
       return variant.slidesList.map((item) => {
            return (
                <SwiperSlide>
                    <div className={style.slideSingle}>
                  <Image src={item.img} alt={item.title} fill
                //   width={300} height={400} 
                  />
                    </div>
                </SwiperSlide>
        )
    });
}

    return (
        <section className={style.wrapper}>
            <Swiper
                spaceBetween={50}
                slidesPerView={variant.slidesPerView}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {generateSlides()}
            </Swiper>
        </section>
      );
}

export default Slider