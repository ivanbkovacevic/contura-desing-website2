import React from "react";
import Slider from "react-slick";
import cn from "classnames";
import Image from "next/image";
import style from "./MySlider.module.scss";

interface SliderProps {
  variant: {
    slidesPerView: number;
    slidesList: { alt: string; img: string }[];
  };
}
const MySlider: React.FC<SliderProps> = ({ variant }) => {

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    adaptiveHeight: true,
    centerMode: true,
    focusOnSelect:true,
    swipeToSlide: true,
    centerPadding: "0px",
  };

  const generateSlides = () => {
    return variant.slidesList.map((item) => {
      return (
        <div key={item.alt}>
          <div className={style.slideSingle}>
            <Image src={item.img} alt={item.alt} fill />
          </div>
        </div>
      );
    });
  };

  return (
    <section className={style.wrapper}>
      <Slider {...settings}>{generateSlides()}</Slider>
    </section>
  );
};

export default MySlider;
