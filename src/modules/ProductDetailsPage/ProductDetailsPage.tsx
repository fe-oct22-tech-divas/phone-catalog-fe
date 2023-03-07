/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import React, { useState } from 'react';
import fullInfo from './iphoneData.json';
// import { useParams } from 'react-router-dom';

export const ProductDetailsPage: React.FC = () => {
  const [item] = useState(fullInfo);
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  // const [setAvailableMemory] = useState(0);

  const handleAdd = (event: any) => {
    event.preventDefault();
    setIsAdded(!isAdded);
  };

  const hadleAddToFavourite = () => {
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  const {
    // id,
    // namespaceId,
    name,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    // "colorsAvailable": ["spacegray", "midnightgreen", "gold", "silver"],
    // color,
    images,
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = item;

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

        <p className="product__direction--item">{name}</p>
      </div>

      <div className="product__redirect">
        <div className="product__redirect--arrow" />

        <a className="product__direction__link" href="/">
          <p className="product__direction--category">Back</p>
        </a>
      </div>

      <h2 className="product__title">{name}</h2>

      <section className="product__container grid grid--tablet grid--desktop">
        <div className="product__photo-block grid--tablet grid--desktop">
          <div className="product__photo-block__small-images">
            {images.map((image) => (
              <img
                key={image}
                src={image}
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
              {capacityAvailable.map((memory) => (
                <button
                  type="button"
                  key={memory}
                  className="product__available-variant__capacity--button"
                >
                  {memory}
                </button>
              ))}
            </div>
          </div>

          <div className="product__available-variant__prices">
            <h1 className="product__title">{priceDiscount}</h1>

            <h3 className="product__available-variant__prices--full-price">{priceRegular}</h3>
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

              <span className="card__description__value">{screen}</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">Resolution</span>

              <span className="card__description__value">{resolution}</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">Processor</span>

              <span className="card__description__value">{processor}</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">RAM</span>

              <span className="card__description__value">{ram}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product__about grid grid--tablet grid--desktop">
        <div className="product__about__container">
          <h3 className="product__about__title">About</h3>

          {description.map((element) => (
            <>
              <h4 className="product__about__title--about">{element.title}</h4>

              <p className="product__about__title--description">
                {element.text}
              </p>
            </>
          ))}
        </div>

        <div className="product__about__container">
          <h3 className="product__about__title">Tech specs</h3>

          <div className="product__about__characteristics">
            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Screen</span>

              <span className="product__about__characteristic--value">{screen}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Resolution</span>

              <span className="product__about__characteristic--value">{resolution}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Processor</span>

              <span className="product__about__characteristic--value">{processor}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">RAM</span>

              <span className="product__about__characteristic--value">{ram}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Built in memory</span>

              <span className="product__about__characteristic--value">{capacity}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Camera</span>

              <span className="product__about__characteristic--value">{camera}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Zoom</span>

              <span className="card__description__value">{zoom}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Cell</span>

              <span className="card__description__value">{cell.join(', ')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
