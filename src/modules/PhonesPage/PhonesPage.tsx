import React from 'react';
import { useParams } from 'react-router-dom';

export const PhonesPage: React.FC = () => {
  const { phoneId } = useParams();

  return (
    <h1>
      {`PhonesPage ${phoneId}`}
    </h1>
  );
};
