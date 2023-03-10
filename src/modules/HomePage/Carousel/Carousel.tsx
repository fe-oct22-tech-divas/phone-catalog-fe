import React, { useEffect, useMemo, useState } from 'react';
import { getPhones } from '../../../api/phones';
import { Phone } from '../../../types/Phone';
import { ProductCard } from '../../ProductCard';
import { Loader } from '../../Loader/Loader';

type Props = {
  title: string,
  choosenOption: string
};

export const Carousel: React.FC<Props> = ({ title, choosenOption }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPhones()
      .then(setPhones)
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const cardAmount = 4;

  const lastIndex = currentPage * cardAmount;
  const firstIndex = lastIndex - cardAmount;
  const lastPage = Math.round(phones.length / cardAmount);

  const sortedCards = useMemo(() => {
    return [...phones].sort((card1: Phone, card2: Phone) => {
      switch (choosenOption) {
        case 'Newest':
          return card2.year - card1.year;
        case 'Hot Price':
          return (card2.fullPrice - card2.price) - (card1.fullPrice - card1.price);
        default:
          return 0;
      }
    });
  }, [phones, choosenOption]);
  const currentCards = sortedCards.slice(firstIndex, lastIndex);

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };

  return (
    <div className="carousel">
      <div className="carousel__top">
        <h1 className="carousel__title">{title}</h1>
        <div className="carousel__buttons">
          <button
            type="button"
            className="pagination__button pagination__button--left"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
          </button>
          <button
            type="button"
            className="pagination__button pagination__button--right"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === lastPage}
          >
          </button>
        </div>
      </div>

      {isLoading && (
        <Loader />
      )}

      {isError && (
        <p>Error message</p>
      )}

      {!isLoading && !isError && (
        <div className="carousel__container grid grid--desktop
        grid--tablet"
        >
          {currentCards.map((phone => (
            <ProductCard
              phone={phone}
              key={phone.id}
            />
          )))}
        </div>
      )}
    </div>
  );
};
