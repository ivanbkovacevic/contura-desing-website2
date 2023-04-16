import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import style from "./Slider.module.scss";
import Image from "next/image";

interface SliderProps {
  variant: {
    slidesPerView: number;
    slidesList: any[];
    height: number;
  };
}
const Slider: React.FC<SliderProps> = ({ variant }) => {
  const slideStyle = cn(
    style.slideSingle,
    { [style.height20]: variant.height === 20 },
    { [style.height50]: variant.height === 50 }
  );

  const generateSlides = () => {
    return variant.slidesList.map((item) => {
      return (
        <SwiperSlide>
          <div className={slideStyle}>
            <Image src={item.img} alt={item.title} fill />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <section className={style.wrapper}>
      <Swiper
        spaceBetween={50}
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
