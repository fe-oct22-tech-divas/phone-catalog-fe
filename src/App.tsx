import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { PhonesPage } from './modules/PhonesPage';
import { Header } from './modules/shared/Header';
import { ProductCard } from './modules/ProductCard/ProductCard';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <ProductCard />

      <Routes>
        <Route
          path="home"
          element={
            <h1>Home Page</h1>
          }
        />

        <Route
          path="phones"
          element={
            <h1>Phones</h1>
          }
        />

        <Route
          path="phones/:phoneId"
          element={
            <PhonesPage />
          }
        />

        <Route
          path="tablets"
          element={
            <h1>Tablets</h1>
          }
        />

        <Route
          path="accessories"
          element={
            <h1>Accessories</h1>
          }
        />

        <Route
          path="*"
          element={
            <h1>Page not found</h1>
          }
        />
      </Routes>
    </>
  );
};
