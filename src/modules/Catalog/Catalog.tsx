import React, { useState } from 'react';
import styles from './Catalog.module.scss';
import { usePhonesContext } from '../../controllers/phones';
import { Pagination } from '../../components/Pagination';


export const Catalog: React.FC = () => {
  const { phones } = usePhonesContext();
  const ALL_OPTIONS = {4: 4, 8: 8, 16: 16, all: phones.length};
  const [itemsPerPage, setItemsPerPage] = useState(ALL_OPTIONS.all);
  // const [currentPage, setCurrentPage] = useState(1);


  const changeItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+event.target.value);
    // setCurrentPage(1);
  };


  return (
    <div className={styles.catalog}>
      <div className={styles.breadCrumbs}></div>

      <h1 className={styles.catalog_title}>Mobile phones</h1>
      <p className={styles.amount}>{`${phones.length} phones`}</p>
      <div className={styles.filters}>
        <div className={styles.sort}>Sort by</div>
        <select
          id="perPageSelector"
          className="form-control"
          value={itemsPerPage}
          onChange={event => changeItemsPerPage(event)}
        >
          {Object.entries(ALL_OPTIONS).map(([key, value]) => (
            <option key={value} value={value}>
              {key}
            </option>
          ))}
        </select>
      </div>

      {/* {phones.filter().map(phone => ())} */}

      <div className={styles.card_holder}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>

      <Pagination
        // total={phones.length}
        // perPage={itemsPerPage}
        // currentPage={currentPage}
        // onPageChange={num => setCurrentPage(num)}
      />
    </div>
  );
};
