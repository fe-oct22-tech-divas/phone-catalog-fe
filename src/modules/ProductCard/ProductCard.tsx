import React from 'react';
// import heart from '../../img/icon/heart.png';

export const ProductCard: React.FC = () => {
  return (

    <div className="card">
      <img
        className="card_image"
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
      />

      <p className="card_name">
        Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
      </p>

      <div className="card_price">
        <h3>$799</h3>
      </div>

      <div className="card_divide-line" />

      <div className="card_description">
        <span className="card_description_title">Screen</span>
        <span className="card_description_value">4.7` IPS</span>
      </div>
      <div className="card_description">
        <span className="card_description_title">Capacity</span>
        <span className="card_description_value">32GB</span>
      </div>
      <div className="card_description">
        <span className="card_description_title">RAM</span>
        <span className="card_description_value">2GB</span>
      </div>

      <div className="card_buttons">
        <a
          href="/"
          className="card_buttons-add-button"
        >
          Add to cart
        </a>

        <button type="button" className="card_buttons-like-button">
          {/* <img src={heart} alt="favorite" /> */}
        </button>
      </div>

    </div>
  );
};
