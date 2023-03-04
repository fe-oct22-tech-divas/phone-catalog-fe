import React from 'react';
import { Categories } from '../Categories';
import { Slider } from '../Slider';

export const HomePage: React.FC = () => {
  return (
    <div className="main-container">
      <Slider />
      <Categories />
    </div>
  );
};
