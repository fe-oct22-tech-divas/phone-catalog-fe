import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartItem as Cart } from '../../types/CartItem';
import cross from '../../img/icon/cross.png';
import minus from '../../img/icon/Minus.png';
import plus from '../../img/icon/Plus.png';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type Props = {
  product: Cart,
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const {
    id,
    name,
    price,
    image,
    count,
  } = product;

  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

  return (
    <div className="item">
      <div className="item__container item__container__top">
        <button
          type="button"
          className="item__btn item__btn__cross"
          onClick={() => removeFromLocalStorage('cart', id, count)}
        >
          <img src={cross} alt="Cross" />
        </button>

        <img
          src={image}
          alt={name}
          className="item__img"
        />

        <NavLink to="product/:id" className="item__text item__title">
          {name}
        </NavLink>
      </div>

      <div className="item__container item__container__bottom">
        <div className="item__counter">
          <button
            type="button"
            className="item__btn item__counter__btn__minus"
            onClick={() => removeFromLocalStorage('cart', id, 1)}
          >
            <img
              src={minus}
              alt="Minus"
              className="item__counter__btn__minus__img"
            />
          </button>

          <p className="item__text item__counter__num">
            {count}
          </p>

          <button
            type="button"
            className="item__btn item__counter__btn__plus"
            onClick={() => addToLocalStorage('cart', product)}
          >
            <img
              src={plus}
              alt="Plus"
              className="item__counter__btn__plus__img"
            />
          </button>
        </div>

        <p className="item__price">
          {`$${price}`}
        </p>
      </div>
    </div>
  );
};
