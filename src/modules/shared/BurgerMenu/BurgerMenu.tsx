import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
import favourites from '../../../img/icon/heart.png';
import cart from '../../../img/icon/cart.png';

type Props = {
  isBurgerVisible: boolean,
};

export const BurgerMenu: React.FC<Props> = ({ isBurgerVisible }) => (
  <div className={classNames(
    'burger',
    { 'burger-visible': isBurgerVisible },
  )}
  >
    <Nav isForBurgerMenu />

    <div className="icons__burger--footer">
      <Link
        to="#favorites"
        className="icon__burger--footer icon__burger--footer--favourites"
      >
        <img src={favourites} alt="Favourites" />
      </Link>

      <Link
        to="#cart"
        className="icon__burger--footer icon__burger--footer--cart"
      >
        <img src={cart} alt="Cart" />
      </Link>
    </div>
  </div>
);
