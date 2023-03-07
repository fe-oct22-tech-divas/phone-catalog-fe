import classNames from 'classnames';
import React, { useState } from 'react';
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
import img4 from './image4.png';
// import { useParams } from 'react-router-dom';

export const ProductDetailsPage: React.FC = () => {
  // const { phoneId } = useParams();
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const images = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
  ];
  const capacity = [
    { id: 1, capacity: '64GB' },
    { id: 2, capacity: '256GB' },
    { id: 3, capacity: '512GB' },
  ];

  const handleAdd = (event) => {
    event.preventDefault();
    setIsAdded(!isAdded);
  };

  const hadleAddToFavourite = () => {
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  return (
    <div className="product  main-container">
      <div className="product__direction">
        <a className="product__direction__link" href="/">
          <div className="product__direction__link--home-icon" />
        </a>

        <div className="product__direction--arrow" />

        <a className="product__direction__link" href="/">
          <p className="product__direction--category">Phones</p>
        </a>

        <div className="product__direction--arrow" />

        <p className="product__direction--item">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>
      </div>

      <div className="product__redirect">
        <div className="product__redirect--arrow" />

        <a className="product__direction__link" href="/">
          <p className="product__direction--category">Back</p>
        </a>
      </div>

      <h2 className="product__title">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h2>

      <section className="product__container grid grid--tablet grid--desktop">
        <div className="product__photo-block grid--tablet grid--desktop">
          <div className="product__photo-block__small-images">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.image}
                alt="iphone both sides"
                className="product__photo-block__small-images__image"
              />
            ))}
          </div>

          <img
            src=""
            alt=""
            className="product__photo-block__small-images__enlargeg-photo grid grid--desktop"
          />
        </div>

        <div className="product__available-variant">
          <div className="product__available-variant__color">
            <div className="product__available-variant--wrap">
              <p className="product__available-variant product__direction--item">Available colors</p>

              <p className="product__direction--item">ID:802390</p>
            </div>

            <div className="product__available-variant__container">
              <div className="product__available-variant__color--1" />
              <div className="product__available-variant__color--2" />
              <div className="product__available-variant__color--3" />
              <div className="product__available-variant__color--4" />
            </div>
          </div>

          <div className="product__available-variant__capacity">
            <p className="product__available-variant product__direction--item">Select capacity</p>

            <div className="product__available-variant__container">
              {capacity.map((memory) => (
                <button
                  type="button"
                  key={memory.id}
                  className="product__available-variant__capacity--button"
                >
                  {memory.capacity}
                </button>
              ))}
            </div>
          </div>

          <div className="product__available-variant__prices">
            <h1 className="product__title">$799</h1>

            <h3 className="product__available-variant__prices--full-price">$1199</h3>
          </div>

          <div className="product__available-variant__buttons">
            {!isAdded ? (
              <a
                href="/"
                className="product__available-variant__buttons--add-button"
                onClick={handleAdd}
              >
                Add to cart
              </a>
            ) : (
              <a
                href="/"
                className="product__available-variant__buttons--add-button--is-added"
                onClick={handleAdd}
              >
                Added
              </a>
            )}

            <button
              type="button"
              className={classNames(!isAddedToFavorite
                ? 'product__available-variant__buttons--like-button'
                : 'product__available-variant__buttons--like-button--is-added')}
              onClick={hadleAddToFavourite}
            >
            </button>
          </div>

          <div className="product__available-variant__characteristicks">
            <div className="card__description">
              <span className="card__description__title">Screen</span>

              <span className="card__description__value">6.5” OLED</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">Resolution</span>

              <span className="card__description__value">2688x1242</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">Processor</span>

              <span className="card__description__value">Apple A12 Bionic</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">RAM</span>

              <span className="card__description__value">3 GB</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product__about grid grid--tablet grid--desktop">
        <div className="product__about__container">
          <h3 className="product__about__title">About</h3>

          <h4 className="product__about__title--about">And then there was Pro</h4>

          <p className="product__about__title--description">
            A transformative triple‑camera system that adds tons of capability without complexity.

            An unprecedented leap in battery life. And a mind‑blowing chip that
          </p>

          <h4 className="product__about__title--about">Camera</h4>

          <p className="product__about__title--description">
            Meet the first triple‑camera system to combine cutting‑edge technology
          </p>

          <h4 className="product__about__title--about">Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.</h4>

          <p className="product__about__title--description">
            iPhone 11 Pro lets you capture videos that are beautifully true to life
          </p>
        </div>

        <div className="product__about__container">
          <h3 className="product__about__title">Tech specs</h3>

          <div className="product__about__characteristics">
            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Screen</span>

              <span className="product__about__characteristic--value">6.5” OLED</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Resolution</span>

              <span className="product__about__characteristic--value">2688x1242</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Processor</span>

              <span className="product__about__characteristic--value">Apple A12 Bionic</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">RAM</span>

              <span className="product__about__characteristic--value">3 GB</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Built in memory</span>

              <span className="product__about__characteristic--value">64 GB</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Camera</span>

              <span className="product__about__characteristic--value">12 Mp + 12 Mp + 12 Mp (Triple)</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Zoom</span>

              <span className="card__description__value">Optical, 2x</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Cell</span>

              <span className="card__description__value">GSM, LTE, UMTS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
