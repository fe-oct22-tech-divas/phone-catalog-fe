import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetailsPage: React.FC = () => {
  const { phoneId } = useParams();

  return (
    <h1>
      {`CartPage ${phoneId}`}
    </h1>
  );
};
