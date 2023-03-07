/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone,
  onClick?: (phoneId: string) => void,
};

export const ProductCard: React.FC<Props> = React.memo(({ phone }, onClick) => {
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

  const [isAdded, setIsAdded] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);
  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

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

  // eslint-disable-next-line no-console

  return (

    <div className="card" key={phoneId}>
      <img
        className="card__image"
        alt={name}
        src={image}
        onClick={() => onClick(phoneId)}
      />

      <p className="card__name">
        {name}
      </p>

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
    </div>
  );
});
