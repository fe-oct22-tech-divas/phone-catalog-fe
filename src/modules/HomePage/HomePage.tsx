import React from 'react';
import { Categories } from '../Categories';
import { PageSlider } from '../PageSlider';
import { Carousel } from './Carousel';

export const HomePage: React.FC = () => {
  return (
    <div className="main-container">
      <PageSlider />
      <Carousel title="Brand New Models" choosenOption="Newest" />
      <Categories />
      <Carousel title="Hot prices" choosenOption="Hot Price" />
    </div>
  );
};
