import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import cross from '../../img/icon/cross.png';
import minus from '../../img/icon/Minus.png';
import plus from '../../img/icon/Plus.png';

type Props = {
  phone: Phone,
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  return (
    <div className="item">
      <div className="item__container__top">
        <button
          type="button"
          className="item__cross"
        >
          <img src={cross} alt="Cross" />
        </button>

        <img
          src={phone.image}
          alt={phone.name}
          className="item__img"
        />

        <Link to=":phoneId" className="item__title">
          {phone.name}
        </Link>
      </div>

      <div className="item__container__bottom">
        <div className="item__counter">
          <button type="button" className="item__counter__btn__minus">
            <img
              src={minus}
              alt="Minus"
              className="item__counter__btn__minus__img"
            />
          </button>

          <p className="item__counter__num">
            1
          </p>

          <button type="button" className="item__counter__btn__plus">
            <img
              src={plus}
              alt="Plus"
              className="item__counter__btn__plus__img"
            />
          </button>
        </div>

        <p className="item__price">
          {phone.price}
        </p>
      </div>
    </div>
  );
};
