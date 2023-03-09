/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { getPhoneById } from '../../api/phones';
import { PhoneFullInfo } from '../../types/PhoneFullInfo';

export const ProductDetailsPage: React.FC = () => {
  const params = useParams();
  const { phoneId = '0' } = params;

  const [fullInfo, setFullInfo] = useState<PhoneFullInfo>();
  const [prevFullInfo, setPrevFullInfo] = useState(phoneId);
  const [isAdded, setIsAdded] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const [itemCapacity] = useState(fullInfo?.capacity);
  const [picture, setPicture] = useState(fullInfo?.images[0]);
  const [isError, setIsError] = useState(false);

  function getHexColor(colorName: string) {
    const colorsAvailable = [
      { black: '#000000' },
      { rosegold: '#B76E79' },
      { gold: '#FFD700' },
      { silver: '#c0c0c0' },
      { spacegray: '#343d46' },
      { midnightgreen: '#004953' },
      { white: '#f5f5f5' },
      { yellow: '#ffff27' },
      { red: '#ff1414' },
      { coral: '#FF7F50' },
      { purple: '#A020F0' },
      { green: '#00ff00' },
    ];

    const colorObj = colorsAvailable.find(color => color[colorName.toLowerCase()]);

    return colorObj ? colorObj[colorName.toLowerCase()] : null;
  }

  const pageHistory = useNavigate();

  useEffect(() => {
    if (params.phoneId) {
      getPhoneById(params.phoneId)
        .then(setFullInfo)
        .catch(() => {
          setIsError(true);
        });
      if (prevFullInfo !== phoneId) {
        pageHistory(`/phones/${prevFullInfo}`);
      }
    }
  }, [prevFullInfo, pageHistory]);

  if (fullInfo === null) {
    return null;
  }

  const replaceIdWithNewId = (id: string, newId: string) => {
    const splitted = id.split('-');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i].includes('gb')) {
        splitted[i] = newId.toLowerCase();
      }
    }

    return splitted.join('-');
  };

  const replaceIdWithNewColor = (id: string, newColor:string) => {
    const colorsAvailable = ['black', 'rosegold', 'gold', 'silver', 'spacegray', 'midnightgreen', 'white', 'yellow', 'red', 'coral', 'purple', 'green'];
    const splitted = id.split('-');

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < splitted.length; i++) {
      if (colorsAvailable.includes(splitted[i])) {
        splitted[i] = newColor;
      }
    }

    return splitted.join('-');
  };

  const handleAdd = (event: any) => {
    event.preventDefault();
    setIsAdded(!isAdded);
  };

  const hadleAddToFavourite = () => {
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  const handleChangePicture = (way: string) => {
    setPicture(way);
  };

  const handleChangeCapacity = (capacityToChange: string) => {
    setPrevFullInfo(replaceIdWithNewId(prevFullInfo, capacityToChange));
  };

  const handleChangeColor = (colorToChange: string) => {
    setPrevFullInfo(replaceIdWithNewColor(prevFullInfo, colorToChange));
  };

  return (
    <div className="product  main-container">
      {isError && (
        <p>Data Error</p>
      )}
      <div className="product__direction">
        <a className="product__direction__link" href="/">
          <div className="product__direction__link--home-icon" />
        </a>
        <div className="product__direction--arrow" />
        <NavLink to="/phones">
          <a className="product__direction__link" href="/">
            <p className="product__direction--category">Phones</p>
          </a>
        </NavLink>

        <div className="product__direction--arrow" />

        <p className="product__direction--item">{fullInfo?.name}</p>
      </div>

      <div className="product__redirect">
        <div className="product__redirect--arrow" />
        <NavLink to="/phones">
          <a className="product__direction__link" href="/">
            <p className="product__direction--category">Back</p>
          </a>
        </NavLink>
      </div>

      <h2 className="product__title">{fullInfo?.name}</h2>

      <section className="product__container grid grid--tablet grid--desktop">
        <div className="product__photo-block grid--tablet grid--desktop">
          <div className="product__photo-block__small-images">
            {fullInfo?.images.map((image) => (
              <img
                key={image}
                src={image}
                alt="iphone both sides"
                className="product__photo-block__small-images__image"
                onClick={() => handleChangePicture(image)}
              />
            ))}
          </div>
          <img
            src={picture === undefined ? fullInfo?.images[0] : picture}
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
              {fullInfo?.colorsAvailable.map((color) => (
                <button
                  type="button"
                  color={color}
                  key={color}
                  className="product__available-variant__color--button"
                  onClick={() => handleChangeColor(color)}
                >
                  <div
                    className={classNames('product__available-variant__color--1', {
                      color: color === fullInfo.color,
                    })}
                    style={{ backgroundColor: getHexColor(color) }}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="product__available-variant__capacity">
            <p className="product__available-variant product__direction--item">Select capacity</p>

            <div className="product__available-variant__container">
              {fullInfo?.capacityAvailable.map((memory: string) => (
                <button
                  type="button"
                  key={memory}
                  className={classNames({ 'product__available-variant__capacity--button--is-active': itemCapacity === memory }, { 'product__available-variant__capacity--button': itemCapacity !== memory })}
                  onClick={() => handleChangeCapacity(memory)}
                >
                  {memory}
                </button>
              ))}
            </div>
          </div>

          <div className="product__available-variant__prices">
            <h1 className="product__title">{fullInfo?.priceDiscount}</h1>

            <h3 className="product__available-variant__prices--full-price">{fullInfo?.priceRegular}</h3>
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

              <span className="card__description__value">{fullInfo?.screen}</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">Resolution</span>

              <span className="card__description__value">{fullInfo?.resolution}</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">Processor</span>

              <span className="card__description__value">{fullInfo?.processor}</span>
            </div>

            <div className="card__description">
              <span className="card__description__title">RAM</span>

              <span className="card__description__value">{fullInfo?.ram}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="product__about grid grid--tablet grid--desktop">
        <div className="product__about__container">
          <h3 className="product__about__title">About</h3>

          {fullInfo?.description.map((element) => (
            <React.Fragment key={element.title}>
              <h4 className="product__about__title--about">{element.title}</h4>

              <p className="product__about__title--description">
                {element.text}
              </p>
            </React.Fragment>
          ))}
        </div>
        <div className="product__about__container">
          <h3 className="product__about__title">Tech specs</h3>
          <div className="product__about__characteristics">
            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Screen</span>

              <span className="product__about__characteristic--value">{fullInfo?.screen}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Resolution</span>

              <span className="product__about__characteristic--value">{fullInfo?.resolution}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Processor</span>

              <span className="product__about__characteristic--value">{fullInfo?.processor}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">RAM</span>

              <span className="product__about__characteristic--value">{fullInfo?.ram}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Built in memory</span>

              <span className="product__about__characteristic--value">{fullInfo?.capacity}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Camera</span>

              <span className="product__about__characteristic--value">{fullInfo?.camera}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Zoom</span>

              <span className="card__description__value">{fullInfo?.zoom}</span>
            </div>

            <div className="product__about__characteristic">
              <span className="product__about__characteristic--title">Cell</span>

              <span className="card__description__value">{fullInfo?.cell.join(', ')}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
