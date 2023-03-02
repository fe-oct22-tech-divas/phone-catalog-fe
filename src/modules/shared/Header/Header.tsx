import React from 'react';
import { Nav } from '../Nav';
import { Logo } from '../Logo';
import { Icons } from '../Icons';

export const Header: React.FC = () => (
  <header className="header">
    <Logo />

    <Nav />

    <Icons />
  </header>
);
