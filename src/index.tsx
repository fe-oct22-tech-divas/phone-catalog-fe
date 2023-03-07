import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import './index.scss';
import { App } from './App';
import { NotFoundPage } from './modules/NotFoundPage';
import { PhonesPage } from './modules/PhonesPage';
import { HomePage } from './modules/HomePage';
import { ProductDetailsPage } from './modules/ProductDetailsPage';
import './main.scss';
import { TabletsPage } from './modules/TabletsPage/TabletsPage';
import { CartPage } from './modules/CartPage';
import { FavouritesPage } from './modules/FavoritesPage';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="phones">
            <Route index element={<PhonesPage />} />
            <Route path=":phoneId" element={<h1>Tablets</h1>} />
          </Route>

          <Route path="tablets" element={<TabletsPage />} />
          <Route path="accessories" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="favorites" element={<FavouritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
