import React from 'react';
import { Categories } from '../Categories';
import { PageSlider } from '../PageSlider';

export const HomePage: React.FC = () => {
  return (
    <div className="main-container">
      <PageSlider />
      <Categories />
    </div>
