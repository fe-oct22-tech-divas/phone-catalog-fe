import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  isForBurgerMenu?: boolean,
};

export const Nav: React.FC<Props> = ({ isForBurgerMenu }) => {
  return (
    <>
      <nav className={classNames({
        nav: !isForBurgerMenu,
        nav__menu: isForBurgerMenu,
      })}
      >
        <ul className={classNames({
          nav__list: !isForBurgerMenu,
          nav__menu__list: isForBurgerMenu,
        })}
        >
          {['home', 'phones', 'tablets', 'accessories'].map(
            category => (
              <Link
                key={category}
                to={category}
                className={classNames({
                  nav__link: !isForBurgerMenu,
                  nav__menu__link: isForBurgerMenu,
                })}
              >
                {category}
              </Link>
            ),
          )}
        </ul>
      </nav>

    </>
  );
};
