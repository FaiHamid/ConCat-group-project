import React from 'react';
import styles from './Search.module.scss';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';
import { useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';


export const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');
  const searchQuery = searchParams.get('query') || '';
  const { t } = useTranslation();

  // console.log('search', searchParams);
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
  const { theme } = useTheme();

  return (
    <form className={classNames(styles.searchForm, {
      [styles.lightTheme]: theme === 'light',
      [styles.darkTheme]: theme === 'dark',
    })}>
      <input
        value={searchQuery}
        type="text"
        className={styles.searchForm__input}
        placeholder={t('productCard.search')}
        onChange={handleQueryChange}
      />
      {value && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={clearSearch}
        >
          &times;
        </button>
      )}
    </form>
  );
};
