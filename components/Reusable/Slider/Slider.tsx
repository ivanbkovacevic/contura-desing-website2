import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './Slider.module.scss'
import Image from 'next/image';

const Slider = () => {
    return (
        <section className={style.wrapperr}>
            <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/work/fromScratchImageSesta.png" alt="My work" width={200} height={200} />
                </SwiperSlide>
            ...
            </Swiper>
        </section>
      );
}

export default Slider