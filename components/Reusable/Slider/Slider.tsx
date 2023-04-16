import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import cn from "classnames";
import style from "./Slider.module.scss";
import Image from "next/image";

interface SliderProps {
  variant: {
    slidesPerView: number;
    slidesList: {alt: string, img:string}[];
    height: number;
  };
}
const Slider: React.FC<SliderProps> = ({ variant }) => {
  const sliderStyle = cn(
    style.wrapper,
    { [style.height20]: variant.height === 20 },
    { [style.height45]: variant.height === 45 }
  );

  const generateSlides = () => {
    return variant.slidesList.map((item) => {
      return (
        <SwiperSlide key={item.alt}>
          <div className={style.slideSingle}>
            <Image src={item.img} alt={item.alt} fill />
          </div>
        </SwiperSlide>
      );
    });
  };


  return (
    <section className={sliderStyle}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        navigation={{
          prevEl: '.myPrevButton',
          nextEl: '.my-next-button'
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={105}
        loop
        centeredSlides
        mousewheel
        slideToClickedSlide
        speed={500}
        slidesPerView={variant.slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {generateSlides()}
      </Swiper>
    </section>
  );
};

export default Slider;
