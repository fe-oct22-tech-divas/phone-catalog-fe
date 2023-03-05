import React from 'react';
import Phones from '../../img/categoriesCards/Phones.jpg';
import Tablets from '../../img/categoriesCards/Tablets.jpg';
import Accessories from '../../img/categoriesCards/Accessories.jpg';
import { CategoryCard } from '../CategoryCard';
import phonesCount from '../../data/phones.json';

export const Categories: React.FC = () => {
  return (
    <div className="categories">
      <h2 className="categories__title">
        Shop by category
      </h2>

      <div className="grid grid--tablet grid--desktop">
        <div className="
        categories__item
        grid__item--tablet-1-4
        grid__item--desktop-1-8"
        >
          <CategoryCard
            categoryImg={Phones}
            categoryImgAlt="Phones"
            categoryLink="#phones"
            categoryTitle="Phones"
            categoryDesc={`${phonesCount.length} phones`}
          />
        </div>

        <div className="
        categories__item
        grid__item--tablet-5-8
        grid__item--desktop-9-16"
        >
          <CategoryCard
            categoryImg={Tablets}
            categoryImgAlt="Tablets"
            categoryLink="#tablets"
            categoryTitle="Tablets"
            categoryDesc={`${phonesCount.length} phones`}
          />
        </div>

        <div className="
        categories__item
        grid__item--tablet-9-12
        grid__item--desktop-17-24"
        >
          <CategoryCard
            categoryImg={Accessories}
            categoryImgAlt="Accessories"
            categoryLink="#accessories"
            categoryTitle="Accessories"
            categoryDesc={`${phonesCount.length} phones`}
          />
        </div>
      </div>
    </div>
  );
};
