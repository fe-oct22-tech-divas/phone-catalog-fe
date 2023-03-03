import React, { useState } from 'react';

export const CustomOptionsList: React.FC<Props> = () => {
  const [isOptionsToggled, setIsOptionsToggled] = useState(false);
  const [isQuantityToggled, setIsQuantityToggled] = useState(false);

  const hadleClick = (event) => {
    event.preventDefault();
    setIsOptionsToggled(!isOptionsToggled);
  };

  const hadleQuantityClick = () => {
    setIsQuantityToggled(!isQuantityToggled);
  };

  return (
    <div className="selectors">
      <div className="selectors__container">
        <p className="selectors__sort-by">Sort by</p>
        <button
          type="button"
          onClick={hadleClick}
          className="selectors__sort-by__name"
        >
          Newest
        </button>

        {isOptionsToggled && (
          <ul className="selectors__table">
            {options.map((option) => (
              <li
                key={option.value}
                className="selectors__table__option"
              >
                {option.value}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="selectors__container">
        <p className="selectors__sort-by">Items on page</p>
        <button
          type="button"
          onClick={hadleQuantityClick}
          className="selectors__sort-by__name"
        >
          16
        </button>

        {isQuantityToggled && (
          <ul className="selectors__table">
            {quantity.map((option) => (
              <li
                key={option.value}
                className="selectors__table__option"
                // onClick={() => onChangeQuantuty(quantity)}
              >
                {option.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
