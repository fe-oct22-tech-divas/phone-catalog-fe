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
  const [searchParams] = useSearchParams();

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

  return (
    <ul className="pagination">

      <li>
        <Link
          className={cn(
            'pagination__links', 'pagination__button__left', 'pagination__test',
            { pagination__button__left_disabled: isFirstPage },
          )}
          to={{
            search: searchBy(searchParams, { page: `${currentPage - 1}` }),
          }}
          onClick={() => onPageChange(currentPage - 1)}
        >
        </Link>
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
        <Link
          className={cn(
            'pagination__links', 'pagination__button__right',
            { pagination__button__right_disabled: isLastPage },
          )}
          to={{
            search: searchBy(searchParams, { page: `${currentPage + 1}` }),
          }}
          onClick={() => onPageChange(currentPage + 1)}
        >
        </Link>
      </li>
    </ul>
  );
};
