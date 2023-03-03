/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import banner1 from './Banner1.jpg';
import banner2 from './Banner2.jpg';
import banner3 from './Banner3.jpg';

const slides = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
];

export const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <>
      <div className="slider">
        <button
          className="slider--previous-button"
          type="button"
          onClick={handlePreviousSlide}
        />
        <div className="slider__container">
          {slides.map((slide, index) => {
            return (
              <div
                className={index === currentSlide ? 'slide active' : 'slide'}
                key={slide.id}
              >
                {index === currentSlide && (
                  <img src={slide.image} alt="banner" className="slide__image" />
                )}
              </div>
            );
          })}

        </div>
        <button
          className="slider--next-button"
          type="button"
          onClick={handleNextSlide}
        />
      </div>

      <div className="slider-indicators">
        {slides.map(({ id }, index) => (
          // eslint-disable-next-line max-len
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div
            key={id}
            className={`slider-indicator ${
              index === currentSlide ? 'slider-indicator-active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
          >
          </div>
        ))}
      </div>
    </>
  );
};
