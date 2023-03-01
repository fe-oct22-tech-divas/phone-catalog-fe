import React from 'react';
import logo from '../../../img/logo.png';
import favourites from '../../../img/icon/heart.png';
import cart from '../../../img/icon/cart.png';
import menu from '../../../img/icon/menu.png';

export const Header: React.FC = () => (
  <header className="header">
    <a className="logo" href="/">
      <img
        className="logo__img"
        src={logo}
        alt="Logo"
      />
    </a>

    <nav className="nav">
      <ul className="nav__list">
        {['home', 'phones', 'tablets', 'accessories'].map(
          category => (
            <li
              key={category}
              className="nav__item"
            >
              <a
                href={`#${category}`}
                className="nav__link"
              >
                {category}
              </a>
            </li>
          ),
        )}
      </ul>

      <div className="nav__icons">
        <a href="#favorites" className="nav__icon nav__icon--favourites">
          <img src={favourites} alt="Favourites" />
        </a>

        <a href="#cart" className="nav__icon nav__icon--cart">
          <img src={cart} alt="Cart" />
        </a>

        <a href="#menu" className="nav__icon nav__icon--menu">
          <img src={menu} alt="Menu" />
        </a>
      </div>
    </nav>
  </header>
);
