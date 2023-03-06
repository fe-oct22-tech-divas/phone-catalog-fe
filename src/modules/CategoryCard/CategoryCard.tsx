import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  categoryImg: string,
  categoryImgAlt: string,
  categoryLink: string,
  categoryTitle: string,
  categoryDesc: string,
};

export const CategoryCard: React.FC<Props> = ({
  categoryImg,
  categoryImgAlt,
  categoryLink,
  categoryTitle,
  categoryDesc,
}) => {
  return (
    <div className="category">
      <img
        src={categoryImg}
        alt={categoryImgAlt}
        className="category__img"
      />

      <h4 className="category__title">
        <Link
          to={categoryLink}
          className="category__link"
        >
          {categoryTitle}
        </Link>
      </h4>

      <p className="category__desc">
        {categoryDesc}
      </p>
    </div>
  );
};
