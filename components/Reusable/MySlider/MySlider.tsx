import React, { useRef } from "react";
import Slider from "react-slick";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import style from "./MySlider.module.scss";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

interface SliderProps {
  slidesPerView: number;
  slidesListImages?: { img: string, width: number }[];
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
    speed: 2000,
    slidesToShow: slidesPerView,
    slidesToScroll: 1,
  //  adaptiveHeight: true,
    swipeToSlide: true,
    autoplay: sliderType === "images",
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: sliderType === "images",
  };

  const sliderRef = useRef(null);

  const handlePrevOnMouseOver = () => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickPrev();
    }, 200); 

    document.querySelector('#mouseOverPrevius').addEventListener('mouseleave', () => {
      clearInterval(intervalId);
    });
    console.log('mouseover')
  };
  const handleNextOnMouseOver = () => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext();
    }, 200); 

    document.querySelector('#mouseOverNext').addEventListener('mouseleave', () => {
      clearInterval(intervalId);
    });
    console.log('mouseovernext')
  };

  const wrapperStyle = cn(style.wrapper, 
    {    testemonialSlider: sliderType === "testemonial", }
    );
  const slideSingleStyle = cn(
    { [style.slideSingleImage]: sliderType === "images" },
    { [style.slideSingleTestemonial]: sliderType === "testemonial" }
  );

  const generateSlidesImages = () => {
    const slideId = uuidv4();

    return slidesListImages.map((item) => {
      return (
        <div style={{width: item.width}} key={slideId} className={style.singleSlideWrapper}>
          <div  className={slideSingleStyle}>
            <Image quality={100} src={item.img} alt="sliderImage" fill />
          </div>
        </div>
      );
    });
  };

  const generateSlidesTestemonial = () => {
    const slideId = uuidv4();
    return slidesListTestemonial.map((item) => {
      return (
        <div key={slideId} className={slideSingleStyle}>
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
       <button id="mouseOverPrevius" className={style.mouseOverPrevius} onMouseOver={handlePrevOnMouseOver}>
        <span className={style.arrowPrev}><ArrowLeft /></span>
       </button>
       <button id="mouseOverNext" className={style.mouseOverNext} onMouseOver={handleNextOnMouseOver}>
       <span className={style.arrowNext}><ArrowRight /></span>
       </button>
      <Slider  ref={sliderRef} {...settings}>
        {slidesListImages.length > 0
          ? generateSlidesImages()
          : generateSlidesTestemonial()}
      </Slider>
    </section>
  );
};

export default MySlider;
