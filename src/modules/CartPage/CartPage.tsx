import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../img/icon/arrow_right__white.png';
import { CartItem } from '../CartItem';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ModalWindow } from '../shared/ModalWindow';

export const CartPage: React.FC = React.memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart] = useLocalStorage();
  const [isEmpty, setIsEmpty] = useState(cart.length === 0);
  const productsTotal = cart.reduce(
    (total, product) => total + product.price * product.count,
    0,
  );

  const itemsNum = cart.reduce((total, product) => total + product.count, 0);

  const handleCheckoutClick = useCallback(() => {
    setIsModalOpen(true);
    setIsEmpty(true);
    localStorage.removeItem('cart');
    setTimeout(() => {
      setIsModalOpen(false);

      window.location.replace('https://fe-oct22-tech-divas.github.io/phone-catalog-fe/');
    }, 5000);
  }, []);

  return (
    <div className="cart main-container">
      <NavLink
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
      </NavLink>

      <h1 className="cart__title">
        Cart
      </h1>

      {isEmpty && (
        <div className="cart__empty">
          <img
            className="cart__empty-img"
            src="https://porubne.mydutyfree.net/images/empty-cart.png"
            alt="empty cart"
          />
          <h2 className="cart__empty-title">Your cart is empty</h2>
        </div>
      )}

      {!isEmpty && (
        <div className="grid grid--tablet grid--desktop">
          <div className="
          cart__item
          grid__item--1-4
          grid__item--tablet-1-12
          grid__item--desktop-1-16"
          >
            {cart.map(product => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>

          <div className="
          cart__checkout
          grid__item--1-4
          grid__item--tablet-1-12
          grid__item--desktop-17-24"
          >
            <h2 className="cart__checkout__price">
              {`$${productsTotal}`}
            </h2>

            <p className="cart__checkout__total">
              {`Total for ${itemsNum} items`}
            </p>

            <div className="cart__checkout__line" />

            <button
              type="button"
              className="cart__checkout__btn"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <ModalWindow />
      )}
    </div>
  );
});
