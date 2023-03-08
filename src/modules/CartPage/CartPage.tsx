import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../img/icon/arrow_right__white.png';
import { CartItem } from '../CartItem';
import phones from '../../data/phones.json';

export const CartPage: React.FC = () => {
  return (
    <div className="cart main-container">
      <Link
        to="/"
        className="cart__back"
      >
        <img
          src={arrow}
          alt="Arrow left"
          className="cart__back__img"
        />

        <p className="cart__back__title">
          Back
        </p>
      </Link>

      <h1 className="cart__title">
        Cart
      </h1>

      <div className="grid grid--tablet grid--desktop">
        <div className="
          cart__item
          grid__item--1-4
          grid__item--tablet-1-12
          grid__item--desktop-1-16"
        >
          {phones.slice(0, 3).map(phone => (
            <CartItem phone={phone} key={phone.id} />
          ))}
        </div>

        <div className="
          cart__checkout
          grid__item--1-4
          grid__item--tablet-1-12
          grid__item--desktop-17-24"
        >
          <h2 className="cart__checkout__price">
            $2556
          </h2>

          <p className="cart__checkout__total">
            Total for 3 items
          </p>

          <div className="cart__checkout__line" />

          <button
            type="button"
            className="cart__checkout__btn"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
