import React from "react";
import Slider from "react-slick";
import cn from "classnames";
import Image from "next/image";
import style from "./MySlider.module.scss";

interface SliderProps {
  slidesPerView: number;
  slidesListImages?: { alt: string; img: string }[];
  slidesListTestemonial?: {
    testemonial: string;
    author: string;
    jobDescription: string;
    company: string;
  }[];
  sliderType?: "images" | "testemonial";
}

const MySlider: React.FC<SliderProps> = ({
  slidesPerView = 2,
  slidesListImages = [],
  slidesListTestemonial = [],
  sliderType = "images",
}) => {

  const settings = {
    dots: false,
    infinite: true,
    arrows: sliderType === "testemonial",
    speed: 500,
    slidesToShow: slidesPerView,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,

  };

  const wrapperStyle = cn(style.wrapper, 
    {    testemonialSlider: sliderType === "testemonial", }
    );
  const slideSingleStyle = cn(
    { [style.slideSingleImage]: sliderType === "images" },
    { [style.slideSingleTestemonial]: sliderType === "testemonial" }
  );

  const generateSlidesImages = () => {
    return slidesListImages.map((item) => {
      return (
        <div key={item.alt} className={style.singleSlideWrapper}>
          <div className={slideSingleStyle}>
            <Image quality={100} src={item.img} alt={item.alt} fill />
          </div>
        </div>
      );
    });
  };

  const generateSlidesTestemonial = () => {
    return slidesListTestemonial.map((item) => {
      return (
        <div key={item.author} className={slideSingleStyle}>
          <p>{item.testemonial}</p>
          <p>{item.author}</p>
          <p>{item.jobDescription}</p>
          <p>{item.company}</p>
        </div>
      );
    });
  };

  return (
    <section className={wrapperStyle}>
      <Slider  {...settings}>
        {slidesListImages.length > 0
          ? generateSlidesImages()
          : generateSlidesTestemonial()}
      </Slider>
    </section>
  );
};

export default MySlider;
