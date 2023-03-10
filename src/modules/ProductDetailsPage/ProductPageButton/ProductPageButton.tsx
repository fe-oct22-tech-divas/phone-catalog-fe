import React, { useEffect, useState } from 'react';
import { getPhones } from '../../../api/phones';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { Phone } from '../../../types/Phone';
import { PhoneFullInfo } from '../../../types/PhoneFullInfo';

type Props = {
  fullInfo: PhoneFullInfo,
};

export const ProductPageButton: React.FC<Props> = ({ fullInfo }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [cart, favorites, addToLocalStorage, removeFromLocalStorage] = useLocalStorage();
  const [isAdded, setIsAdded] = useState(Boolean(
    cart.find((el) => el.phoneId === fullInfo.id),
  ));
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(Boolean(
    favorites.find((el) => el.phoneId === fullInfo.id),
  ));

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, []);

  useEffect(() => {
    setIsAdded(Boolean(
      cart.find((el) => el.phoneId === fullInfo.id),
    ));
    setIsAddedToFavorite(Boolean(
      favorites.find((el) => el.phoneId === fullInfo.id),
    ));
  }, [cart, favorites, fullInfo]);

  const findedPhone = phones.find(phone => phone.phoneId === fullInfo.id) || {
    id: '100',
    category: 'phone',
    phoneId: fullInfo.id,
    itemId: fullInfo.id,
    name: fullInfo.name,
    fullPrice: fullInfo.priceRegular,
    price: fullInfo.priceDiscount,
    screen: fullInfo.screen,
    capacity: fullInfo.capacity,
    color: fullInfo.color,
    ram: fullInfo.ram,
    year: 2020,
    image: fullInfo.images[0],
  };

  const handleAdd = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsAdded(true);
    addToLocalStorage('cart', { ...findedPhone, count: 1 });
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsAdded(false);
    removeFromLocalStorage('cart', findedPhone.id, 1);
  };

  const handleAddToFavourite = () => {
    setIsAddedToFavorite(true);
    addToLocalStorage('favorites', { ...findedPhone, count: 1 });
  };

  const handleRemoveFromFavourite = () => {
    setIsAddedToFavorite(false);
    removeFromLocalStorage('favorites', findedPhone.id, 1);
  };

  return (
    <div className="product__available-variant__buttons">
      {!isAdded ? (
        <a
          href="/"
          className="product__available-variant__buttons--add-button"
          onClick={handleAdd}
        >
          Add to cart
        </a>
      ) : (
        <a
          href="/"
          className="product__available-variant__buttons--add-button--is-added"
          onClick={handleRemove}
        >
          Added
        </a>
      )}
      {!isAddedToFavorite ? (
        <button
          type="button"
          className="product__available-variant__buttons--like-button"
          onClick={handleAddToFavourite}
        >
        </button>
      ) : (
        <button
          type="button"
          className="product__available-variant__buttons--like-button--is-added"
          onClick={handleRemoveFromFavourite}
        >
        </button>
      )}
    </div>
  );
};
