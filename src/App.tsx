import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { PhonesPage } from './modules/PhonesPage';
import { Header } from './modules/shared/Header';
import { HomePage } from './modules/HomePage';
import { PhonesList } from './modules/PhonesList';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path="home"
          element={
            <HomePage />
          }
        />

        <Route
          path="phones"
          element={
            <PhonesList />
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
