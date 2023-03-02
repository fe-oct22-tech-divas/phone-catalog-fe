import React from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          {['home', 'phones', 'tablets', 'accessories'].map(
            category => (
              <li
                key={category}
                className="nav__item"
              >
                <Link
                  to={category}
                  className="nav__link"
                >
                  {category}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>

    </>
  );
};
