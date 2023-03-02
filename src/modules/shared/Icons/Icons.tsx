import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import favourites from '../../../img/icon/heart.png';
import cart from '../../../img/icon/cart.png';
import menu from '../../../img/icon/menu.png';
import cross from '../../../img/icon/cross.png';

type Props = {
  isForBurgerMenu?: boolean,
};

export const Icons: React.FC<Props> = ({ isForBurgerMenu }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <div className="icons">

      <Link
        to="/"
        className={classNames(
          'icon',
          { 'icon--menu': !isBurgerMenuOpen },
          { 'icon--cross': isBurgerMenuOpen },
        )}
        onClick={() => (
          setIsBurgerMenuOpen(!isBurgerMenuOpen)
        )}
      >
        {isBurgerMenuOpen
          ? (
            <img src={cross} alt="Cross" />
          )
          : (
            <img src={menu} alt="Menu" />
          )}
      </Link>

      {!isForBurgerMenu && (
        <>
          <Link
            to="#favorites"
            className="icon icon--favourites"
          >
            <img src={favourites} alt="Favourites" />
          </Link>

          <Link
            to="#cart"
            className="icon icon--cart"
          >
            <img src={cart} alt="Cart" />
          </Link>
        </>
      )}
    </div>
  );
};
