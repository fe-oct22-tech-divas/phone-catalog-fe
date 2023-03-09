import React, { useEffect, useState } from 'react';
import Phones from '../../img/categoriesCards/Phones.jpg';
import Tablets from '../../img/categoriesCards/Tablets.jpg';
import Accessories from '../../img/categoriesCards/Accessories.jpg';
import { CategoryCard } from '../CategoryCard';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import tabletsFromApi from '../../data/tablets.json';

export const Categories: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(setPhones);
  }, []);

  const phonesCount = phones.length;
  const tabletsCount = tabletsFromApi.length;

  return (
    <div className="categories">
      <h2 className="categories__title">
        Shop by category
      </h2>

      <div className="grid grid--tablet grid--desktop">
        <div className="
        categories__item
        grid__item--1-4
        grid__item--tablet-1-4
        grid__item--desktop-1-8"
        >
          <CategoryCard
            categoryImg={Phones}
            categoryImgAlt="Phones"
            categoryLink="/phones"
            categoryTitle="Phones"
            categoryDesc={`${phonesCount} phones`}
          />
        </div>

        <div className="
        categories__item
        grid__item--1-4
        grid__item--tablet-5-8
        grid__item--desktop-9-16"
        >
          <CategoryCard
            categoryImg={Tablets}
            categoryImgAlt="Tablets"
            categoryLink="/tablets"
            categoryTitle="Tablets"
            categoryDesc={`${tabletsCount} tablets`}
          />
        </div>

        <div className="
        categories__item
        grid__item--1-4
        grid__item--tablet-9-12
        grid__item--desktop-17-24"
        >
          <CategoryCard
            categoryImg={Accessories}
            categoryImgAlt="Accessories"
            categoryLink="/accessories"
            categoryTitle="Accessories"
            categoryDesc="0 accessories"
          />
        </div>
      </div>
    </div>
  );
};
