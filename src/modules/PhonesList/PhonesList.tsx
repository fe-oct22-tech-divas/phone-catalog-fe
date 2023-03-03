import React, { useState } from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard';
import phonesFromApi from '../../data/phones.json';

export const PhonesList: React.FC = () => {
  const [phones] = useState<Phone[]>(phonesFromApi);

  const options = [
    { value: 'Newest', label: 'Newest' },
    { value: 'Oldest', label: 'Oldest' },
    { value: 'Cheapest', label: 'Cheapest' },
    { value: 'Most expensive', label: 'Most expensive' },
  ];

  const quantity = [
    { value: '16', label: '16' },
    { value: '32', label: '32' },
    { value: '48', label: '48' },
  ];

  return (
    <>
      <div className="phones">
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
            <select className="phones__sort__by--dropdown-1">
              {options.map((option) => (
                <option value="hide" className="option-value" key={option.value}>{option.value}</option>
              ))}
            </select>
          </span>

          <span className="phones__sort__by">
            <p className="phones__sort__by--name">Items on page</p>
            <select className="phones__sort__by--dropdown-2">
              {quantity.map((number) => (
                <option value="hide" className="option-value" key={number.value}>{number.value}</option>
              ))}
            </select>
          </span>
        </div>

        <div className="phones__container grid grid--desktop">
          {phones.map((phone => (
            <ProductCard phone={phone} key={phone.id} />
          )))}
        </div>
      </div>
    </>
  );
};
