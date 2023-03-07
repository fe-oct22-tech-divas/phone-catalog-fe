/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import banner1 from './Banner1.jpg';

export const PageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: '14px',
          height: '4px',
        }}
      />
    ),
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="slider">
      <div className="grid grid--tablet grid--desktop">
        <h1 className="slider__title grid__item grid__item--tablet-1-9 grid__item--desktop-1-24">
          Welcome to Nice Gadgets store!
        </h1>

        <Slider
          className="grid__item grid__item--tablet-2-11 grid__item--desktop-2-23"
          {...settings}
        >
          <img
            className="slider__image"
            src={banner1}
            alt="Banner"
          />

          <img
            className="slider__image"
            src={banner1}
            alt="Banner"
          />

          <img
            className="slider__image"
            src={banner1}
            alt="Banner"
          />
        </Slider>
      </div>
    </section>
  );
};
