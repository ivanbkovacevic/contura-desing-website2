import React from "react";
import style from "./WhatWeDo.module.scss";
import Image from "next/image";

const WhatWeDo: React.FC = ({}) => {
  return (
    <div className={style.wrapper}>
      <h1>What We Do</h1>
      <div className={style.singleWhatWeDo}>
        <div className={style.description}>
          <div>
            <h2>Digital products that people love to use</h2>
            <p>
              By applying behavioral science to customer experience, we design
              engaging digital products used by millions of people.
            </p>
          </div>
          <div className={`${style.descriptionImage} ${style.negativeLeft}`}>
            <Image src="/assets/images/about/aboutImagePrva.png" alt="image" fill />
          </div>
        </div>
        <div className={style.image}>
          <Image quality={100}
            src="/assets/images/about/aboutMedtisimageDruga.png"
            alt=""
            fill
          />
        </div>
      </div>
      <div className={`${[style.singleWhatWeDo]} ${[style.reverse]}`}>
        <div className={style.description}>
          <div>
            <h2>Enterprise software that doesn't suck</h2>
            <p>
              We create human-centered enterprise software that has the
              polished, snappy feel of the best consumer apps.
            </p>
          </div>
          <div className={`${style.descriptionImage} ${style.negativeRight}`}>
            <Image quality={100}
              src="/assets/images/about/aboutStatisikaImageCetvrta.png"
              alt=""
              fill
            />
          </div>
        </div>
        <div className={style.image}>
          <Image quality={100}
            src="/assets/images/about/aboutForwardizeImageTreca.png"
            alt=""
            fill
          />
        </div>
      </div>
      <div className={style.singleWhatWeDo}>
        <div className={style.description}>
          <div>
            <h2>Websites that tell your brand's story</h2>
            <p>
              From Slack to Facebook, we team up with marketing departments of
              large companies and startups to deliver award‑winning websites.
            </p>
          </div>
          <div className={style.descriptionImage}>
            <Image quality={100}
              src="/assets/images/about/aboutMobileKontturaImageSesta.png"
              alt=""
              fill
            />
          </div>
        </div>
        <div className={style.image}>
          <Image quality={100}
            src="/assets/images/about/aboutFacebookLaptopImagePeta.png"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
