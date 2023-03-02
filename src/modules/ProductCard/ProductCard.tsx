import React from 'react';

export const ProductCard: React.FC = () => {
  return (

    <div className="card">
      <img
        className="card__image"
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
      />

      <p className="card__name">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </p>

      <div className="card__price">
        <h3>$799</h3>
      </div>

      <div className="card__divide-line" />

      <div className="card__description">
        <span className="card__description__title">Screen</span>
        <span className="card__description__value">4.7` IPS</span>
      </div>
      <div className="card__description">
        <span className="card__description__title">Capacity</span>
        <span className="card__description__value">32GB</span>
      </div>
      <div className="card__description">
        <span className="card__description__title">RAM</span>
        <span className="card__description__value">2GB</span>
      </div>

      <div className="card__buttons">
        <a
          href="/"
          className="card__buttons--add-button"
        >
          Add to cart
        </a>

        <button type="button" className="card__buttons--like-button">
        </button>
      </div>

    </div>
  );
};
