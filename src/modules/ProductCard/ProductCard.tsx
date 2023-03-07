import classNames from 'classnames';
import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone
};

export const ProductCard: React.FC<Props> = React.memo(({ phone }) => {
  const {
    id,
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
    setIsAdded(true);
    removeFromLocalStorage('cart', id, 1);
  };

  const hadleAddToFavourite = () => {
    setIsAddedToFavorite(!isAddedToFavorite);
  };

  return (

    <div className="card" key={id}>
      <img
        className="card__image"
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        src={image}
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

        <button
          type="button"
          className={classNames(!isAddedToFavorite
            ? 'card__buttons--like-button'
            : 'card__buttons--like-button--is-added')}
          onClick={hadleAddToFavourite}
        >
        </button>
      </div>
    </div>
  );
});
