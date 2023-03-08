import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { BurgerMenu } from './modules/shared/BurgerMenu';
import { Header } from './modules/shared/Header';
import { Footer } from './modules/shared/Footer/Footer';
import './index.scss';

export const App: React.FC = () => {
  const { hash } = useLocation();

  const isBurgerMenuOpen = hash.includes('#menu');

  return (
    <>
      <div className="app">
        <Header />
        <BurgerMenu isBurgerVisible={isBurgerMenuOpen} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
