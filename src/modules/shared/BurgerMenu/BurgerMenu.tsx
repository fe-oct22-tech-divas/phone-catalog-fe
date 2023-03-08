import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

type Props = {
  isBurgerVisible: boolean,
};

export const BurgerMenu: React.FC<Props> = ({ isBurgerVisible }) => {
  const [cart, favorites] = useLocalStorage();

  return (
    <div className={classNames(
      'burger',
      { 'burger--visible': isBurgerVisible },
    )}
    >
      <Nav isForBurgerMenu />

      <div className="icons__burger--footer">
        <Link
          to="favorites"
          className="icon__burger--footer icon__burger--footer--favourites"
        >
          <div className="icon icon__favourites icon__burger">
            {favorites.length > 0 && (
              <div className="icon__counter">
                {favorites.length}
              </div>
            )}
          </div>
        </Link>

        <Link
          to="cart"
          className="icon__burger--footer icon__burger--footer--cart"
        >
          <div className="icon icon__cart icon__burger">
            {cart.length > 0 && (
              <div className="icon__counter">
                {cart.length}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};
