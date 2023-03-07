import React from 'react';
import { ProductCard } from '../ProductCard';
import phones from '../../data/phones.json';

export const FavouritesPage: React.FC = () => {
  return (
    <div className="favourites main-container">
      <div className="favourites__redirect">
        <a className="favourites__redirect-link" href="/#/">
          <div className="favourites__redirect--homeIcon" />
        </a>
        <div className="favourites__redirect--arrowIcon" />
        <p className="favourites__redirect--title">Favourites</p>
      </div>

      <h1 className="favourites__title">Favourites</h1>

      {phones.slice(0, 3).map(phone => (
        <ProductCard
          phone={phone}
          key={phone.id}
        />
      ))}
    </div>
  );
};
