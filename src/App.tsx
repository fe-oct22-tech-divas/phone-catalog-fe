import React from 'react';
import './App.scss';
import { Header } from './modules/shared/Header';
import { ProductCard } from './modules/ProductCard/ProductCard';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <ProductCard />
    </>
  );
};
