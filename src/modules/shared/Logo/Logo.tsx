import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';

export const Logo: React.FC = () => (
  <NavLink className="logo" to="/">
    <img
      className="logo__img"
      src={logo}
      alt="Logo"
    />
  </NavLink>
);
