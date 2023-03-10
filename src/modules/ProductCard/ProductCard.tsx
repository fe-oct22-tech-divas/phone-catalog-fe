/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone,
  isAvailable?: boolean
};

export const ProductCard: React.FC<Props> = React.memo(({ phone, isAvailable = true }) => {
  const {
    phoneId,
    name,
    ram,
    capacity,
    price,
    fullPrice,
    screen,
    image,
  } = phone;

  const [cart, favorites, addToLocalStorage, removeFromLocalStorage] = useLocalStorage();
  const [isAdded, setIsAdded] = useState(Boolean(
    cart.find((el) => el.id === phone.id),
  ));
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(Boolean(
    favorites.find((el) => el.id === phone.id),
  ));

  const handleAdd = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsAdded(true);
    addToLocalStorage('cart', { ...phone, count: 1 });
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsAdded(false);
    removeFromLocalStorage('cart', phone.id, 1);
  };

  const handleAddToFavourite = () => {
    setIsAddedToFavorite(true);
    addToLocalStorage('favorites', { ...phone });
  };

  const handleRemoveFromFavourite = () => {
    setIsAddedToFavorite(false);
    removeFromLocalStorage('favorites', phone.id, 1);
  };

  return (

    <div className="card" key={phoneId}>
      <NavLink
        to={`/phones/${phoneId}`}
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <img
          className="card__image"
          alt={name}
          src={image}
        />

        <p className="card__name">
          {name}
        </p>
      </NavLink>

      <div className="card__prices">
        <h3 className="card__price">{`$${price}`}</h3>
        <h3 className="card__fullPrice">{`$${fullPrice}`}</h3>
      </div>

      <div className="card__divide-line" />

      <div className="card__description">
        <span className="card__description__title">Screen</span>
        <span className="card__description__value">{screen}</span>
      </div>
      <div className="card__description">
        <span className="card__description__title">Capacity</span>
        <span className="card__description__value">{capacity}</span>
      </div>
      <div className="card__description">
        <span className="card__description__title">RAM</span>
        <span className="card__description__value">{ram}</span>
      </div>
      {!isAvailable ? (
        <p className="card__price">Not available</p>
      ) : (
        <div className="card__buttons">
          {!isAdded ? (
            <a
              href="/"
              className="card__buttons--add-button"
              onClick={handleAdd}
            >
              Add to cart
            </a>
          ) : (
            <a
              href="/"
              className="card__buttons--add-button--is-added"
              onClick={handleRemove}
            >
              Added
            </a>
          )}

          {!isAddedToFavorite ? (
            <button
              type="button"
              className="card__buttons--like-button"
              onClick={handleAddToFavourite}
            >
            </button>
          ) : (
            <button
              type="button"
              className="card__buttons--like-button--is-added"
              onClick={handleRemoveFromFavourite}
            >
            </button>
          )}
        </div>
      )}
    </div>
  );
});
