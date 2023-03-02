import React from 'react';
import logo from '../../../img/logo.png';
import favourites from '../../../img/icon/heart.png';
import cart from '../../../img/icon/cart.png';
import menu from '../../../img/icon/menu.png';
import { Nav } from '../Nav';

export const Header: React.FC = () => (
  <header className="header">
    <a className="logo" href="/">
      <img
        className="logo__img"
        src={logo}
        alt="Logo"
      />
    </a>

    <Nav />
    <div className="header__icons">
      <a href="#favorites" className="header__icon header__icon--favourites">
        <img src={favourites} alt="Favourites" />
      </a>

      <a href="#cart" className="header__icon header__icon--cart">
        <img src={cart} alt="Cart" />
      </a>

      <a href="#menu" className="header__icon header__icon--menu">
        <img src={menu} alt="Menu" />
      </a>
    </div>
  </header>
);
