import React, { useState, useCallback, useMemo } from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';
import { Pagination } from '../Pagination';
import phonesFromApi from '../../data/phones.json';

export const PhonesList: React.FC = () => {
  const [phones] = useState<Phone[]>(phonesFromApi);
  const [chosenOption, setChosenOption] = useState('Newest');
  const [choosenQuantity, setChosenQuantity] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  const options = [
    { value: 'Newest', label: 'Newest' },
    { value: 'Oldest', label: 'Oldest' },
    { value: 'Cheapest', label: 'Cheapest' },
    { value: 'Most expensive', label: 'Most expensive' },
    { value: 'Alphabeticaly', label: 'Alphabeticaly' },
  ];

  const quantity = [
    { value: '16', label: '16' },
    { value: '32', label: '32' },
    { value: '48', label: '48' },
  ];

  const handleChangeSelectorOption = useCallback((option: string) => {
    setChosenOption(option);
  }, []);

  const handleChangeSelectorQuantity = useCallback((option: number) => {
    setChosenQuantity(option);
  }, []);

  const lastIndex = currentPage * choosenQuantity;
  const firstIndex = lastIndex - choosenQuantity;
  const currentCards = phones.slice(firstIndex, lastIndex);

  const getSortedCards = useMemo(() => {
    return currentCards.sort((card1: Phone, card2: Phone) => {
      switch (chosenOption) {
        case 'Newest':
          return card2.year - card1.year;
        case 'Oldest':
          return card1.year - card2.year;
        case 'Alphabetically':
          return card2.name.localeCompare(card1.name);
        case 'Cheapest':
          return card1.price - card2.price;
        case 'Most expensive':
          return card2.price - card1.price;
        default:
          return 0;
      }
    });
  }, [chosenOption, phones, choosenQuantity]);

  return (
    <>
      <div className="phones grid grid--tablet grid--desktop">
        <div className="phones__redirect">
          <a className="phones__redirect-link" href="/">
            <div className="phones__redirect--homeIcon" />
          </a>
          <div className="phones__redirect--arrowIcon" />
          <p className="phones__redirect--title">Phones</p>
        </div>

        <h1 className="phones__title">Mobile phones</h1>

        <p className="phones__amount">
          {`${phones.length} models`}
        </p>

        <div className="phones__sort">
          <span className="phones__sort__by">
            <p className="phones__sort__by--name">Sort by</p>
            <select
              className="phones__sort__by--dropdown-1"
              onChange={(event) => handleChangeSelectorOption(event.target.value)}
            >
              {options.map((option) => (
                <option
                  value={option.value}
                  className="option-value"
                  key={option.value}

                >
                  {option.value}
                </option>
              ))}
            </select>
          </span>

          <span className="phones__sort__by">
            <p className="phones__sort__by--name">Items on page</p>
            <select
              className="phones__sort__by--dropdown-2"
              onChange={(event) => handleChangeSelectorQuantity(event.target.value)}
            >
              {quantity.map((number) => (
                <option
                  value={number.value}
                  className="option-value"
                  key={number.value}
                >
                  {number.value}
                </option>
              ))}
            </select>
          </span>
        </div>

        <div className="phones__container grid grid--desktop
        grid--tablet"
        >
          {getSortedCards.map((phone => (
            <ProductCard
              phone={phone}
              key={phone.id}
              chosenOption={chosenOption}
              choosenQuantity={choosenQuantity}
            />
          )))}
        </div>

        <Pagination
          total={phones.length}
          perPage={choosenQuantity}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};
