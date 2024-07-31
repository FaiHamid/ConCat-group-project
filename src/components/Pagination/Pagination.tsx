import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

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
  console.log(currentPage);
  return (
    <ReactPaginate
      previousLabel={<span className={`${styles['pagination-arrowLeft']} ${styles.page}`}></span>}
      nextLabel={<span className={`${styles['pagination-arrowRight']} ${styles.page}`}></span>}
      breakLabel={'...'}
      breakClassName={styles.break}
      pageCount={numberOfPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={(data) => onPageChange(data.selected + 1)}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      previousClassName={styles.page}
      nextClassName={styles.page}
      pageClassName={styles.page}
      disabledClassName={styles.disabled}
    />
  );
};
