import React, { FC } from 'react';
import cn from 'classnames';
import { Link, useSearchParams } from 'react-router-dom';
import { searchBy } from '../../helpers/searchBy';

type Props = {
  total: number;
  perPage: number,
  currentPage: number,
  onPageChange: (page: number) => void,
};

export const Pagination: FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const [searchParams] = useSearchParams(currentPage);

  const getPageNumber = (start: number, end: number) => {
    const numbers = [];

    for (let i = start; i <= end; i += 1) {
      numbers.push(i);
    }

    return numbers;
  };

  const countPages = getPageNumber(1, Math.ceil(total / perPage));
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(total / perPage);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const PrevNextPage = (direction: string) => {
    if (!isLastPage && direction === 'next') {
      onPageChange(currentPage + 1);
    }

    if (!isFirstPage && direction === 'prev') {
      onPageChange(currentPage - 1);
    }

    toTop();
  };

  return (
    <ul className="pagination">

      <li>
        <button
          type="button"
          className="pagination__button pagination__button--left"
          onClick={() => PrevNextPage('prev')}
          disabled={isFirstPage}
        >
        </button>
      </li>

      {
        countPages.map(page => (
          <li key={page}>
            <Link
              to={{
                search: searchBy(searchParams, { page: `${page}` }),
              }}
              className={
                cn('pagination__links',
                  { 'pagination__links-isActive': currentPage === page })
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </Link>
          </li>
        ))
      }

      <li>
        <button
          type="button"
          className="pagination__button pagination__button--right"
          onClick={() => PrevNextPage('next')}
          disabled={isLastPage}
        >
        </button>
      </li>
    </ul>
  );
};
