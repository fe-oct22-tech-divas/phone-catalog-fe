import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ProductCard } from '../ProductCard';
import emptyFav from '../../img/emptyFav.png';

export const FavouritesPage: React.FC = () => {
  const [, favorites] = useLocalStorage();
  const isEmpty = favorites.length === 0;

  const count = favorites.length;

  return (
    <div className="favourites main-container">
      <div className="favourites__redirect">
        <NavLink
          className="favourites__redirect-link"
          to="/"
        >
          <div className="favourites__redirect--homeIcon" />
        </NavLink>

        <div className="favourites__redirect--arrowIcon" />
        <p className="favourites__redirect--title">Favourites</p>
      </div>

      <h1 className="favourites__title">Favourites</h1>

      <p className="favourites__count">
        {`${count} items`}
      </p>

      {isEmpty
        ? (
          <div className="cart__empty">
            <img
              className="cart__empty-img"
              src={emptyFav}
              alt="empty favourites"
            />

            <h2 className="cart__empty-title">
              Your favourites list is empty
            </h2>
          </div>
        )
        : (
          <div className="
            grid
            grid--tablet
            grid--desktop
            phones__container"
          >
            {favorites.map(item => (
              <ProductCard phone={item} key={item.id} />
            ))}
          </div>
        )}
    </div>
  );
};
