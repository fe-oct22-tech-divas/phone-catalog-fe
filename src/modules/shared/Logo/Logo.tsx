import React from 'react';
import logo from '../../../img/logo.png';

export const Logo: React.FC = () => (
  <a className="logo" href="/">
    <img
      className="logo__img"
      src={logo}
      alt="Logo"
    />
  </a>
);
