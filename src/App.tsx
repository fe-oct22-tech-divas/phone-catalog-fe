import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { BurgerMenu } from './modules/shared/BurgerMenu';
import { Header } from './modules/shared/Header';
// import { HomePage } from './modules/HomePage';
// import { PhonesList } from './modules/PhonesList';
import { Footer } from './modules/shared/Footer/Footer';

export const App: React.FC = () => {
  const { hash } = useLocation();

  const isBurgerMenuOpen = hash.includes('#menu');

  return (
    <>
      <Header />
      <BurgerMenu isBurgerVisible={isBurgerMenuOpen} />
      <Outlet />
      <Footer />
    </>
  );
};
