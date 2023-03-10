import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menu from '../../../img/icon/menu.png';
import cross from '../../../img/icon/cross.png';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

type Props = {
  isForBurgerMenu?: boolean,
};

export const Icons: React.FC<Props> = ({ isForBurgerMenu }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [cart, favorites] = useLocalStorage();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="icons">
      { isBurgerMenuOpen
        ? (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link
            to=""
            className="icon icon--cross"
            onClick={() => {
              setIsBurgerMenuOpen(!isBurgerMenuOpen);
              goBack();
            }}
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
            to="favorites"
            className="icon--favourites"
          >
            <div className="icon icon__favourites">
              {favorites.length > 0 && (
                <div className="icon__counter">
                  {favorites.length}
                </div>
              )}
            </div>
          </Link>

          <Link
            to="cart"
            className="icon--cart"
          >
            <div className="icon icon__cart">
              {cart.length > 0 && (
                <div className="icon__counter">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </>
      )}
    </div>
  );
};
