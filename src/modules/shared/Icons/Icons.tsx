import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import favourites from '../../../img/icon/heart.png';
import cart from '../../../img/icon/cart.png';
import menu from '../../../img/icon/menu.png';
import cross from '../../../img/icon/cross.png';

type Props = {
  isForBurgerMenu?: boolean,
};

export const Icons: React.FC<Props> = ({ isForBurgerMenu }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  window.console.log('open', isBurgerMenuOpen);

  return (
    <div className="icons">

      { isBurgerMenuOpen
        ? (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            to="#"
            className="icon icon--cross"
            onClick={() => (
              setIsBurgerMenuOpen(!isBurgerMenuOpen)
            )}
          >
            <img src={cross} alt="Cross" />
          </Link>
        )
        : (
          <Link
            to="#menu"
            className="icon icon--menu"
            onClick={() => (
              setIsBurgerMenuOpen(!isBurgerMenuOpen)
            )}
          >
            <img src={menu} alt="Menu" />
          </Link>
        )}

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
