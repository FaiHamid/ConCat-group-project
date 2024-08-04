import React from 'react';
import styles from './Search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function setSearchWith(params: any) {
    const search = getSearchWith(searchParams, params);

    setSearchParams(search);
  }


  const debouncedSetSearchWith = useCallback(
    debounce(params => {
      setSearchWith(params);
    }, 400),
    [],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    debouncedSetSearchWith({ query: newValue || null });
  };

  const clearSearch = () => {
    setValue('');
    setSearchWith({ query: null });
  };

  return (
    <form className={styles.searchForm}>
      <input
        value={value}
        type="text"
        className={styles.searchForm__input}
        placeholder="Search"
        onChange={handleQueryChange}
      />
      {value && (
        <button type="button" className={styles.clearButton} onClick={clearSearch}>
          &times;
        </button>
      )}
    </form>
  );
};