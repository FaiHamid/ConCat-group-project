import React from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames';
import styles from './Pagination.module.scss';
import { useTheme } from '../../contexts/ThemeContext';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ 
  total, 
  perPage, 
  currentPage,
  onPageChange 
}) => {
  const numberOfPages = Math.ceil(total / perPage);
  const { theme } = useTheme();

  const paginationClassName = classNames(
    styles.pagination, 
    {
      [styles.lightTheme]: theme === 'light',
      [styles.darkTheme]: theme === 'dark',
    }
  );

  return (
    <ReactPaginate
      previousLabel={<span className={classNames(styles['pagination-arrowLeft'], styles.page)}></span>}
      nextLabel={<span className={classNames(styles['pagination-arrowRight'], styles.page)}></span>}
      breakLabel={'...'}
      breakClassName={styles.break}
      pageCount={numberOfPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      containerClassName={paginationClassName}
      activeClassName={classNames(styles.active, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
      previousClassName={classNames(styles.page, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
      nextClassName={classNames(styles.page, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
      pageClassName={classNames(styles.page, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
      disabledClassName={classNames(styles.disabled, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
      forcePage={currentPage - 1}
    />
  );
};
