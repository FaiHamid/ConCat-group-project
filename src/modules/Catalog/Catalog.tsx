import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import styles from './Catalog.module.scss';
import { Pagination } from '../../components/Pagination';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Product } from '../../types';
import { getProducts } from '../../api/dataFromServer';
import { ProductCard } from '../../components/ProductCard';
import { SortOptions } from '../../types/SortOptions';
import { getSearchWith, SearchParams, sortProducts } from '../../utils';
import { NoResults } from '../../components/NoResults';
import classNames from 'classnames';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const DEFAULT_ITEM_PER_PAGE = 16;

export const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  const sortBy = searchParams.get('sortBy') || SortOptions.Newest;
  const currentPage = +(searchParams.get('currentPage') || 1);
  const itemsPerPage = +(
    searchParams.get('itemsPerPage') || DEFAULT_ITEM_PER_PAGE
  );
  const searchQuery = searchParams.get('query') || '';

  const { pathname } = useLocation();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, [pathname]);

  function setSearchWith(params: SearchParams) {
    const search = getSearchWith(searchParams, params);
    setSearchParams(search);
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('currentPage', `${page}`);
    setSearchWith({ currentPage: `${page}` });
  };
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchWith({ query: newValue });
  };

  const clearSearch = () => {
    setSearchWith({ query: null });
  };

  const category = pathname.split('/')[1];

  const ALL_OPTIONS = {
    4: 4,
    8: 8,
    16: 16,
    All: products.filter(item => item.category === category).length,
  };

  const filteredProducts = products
    .filter(product => product.category === category)
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const sortedProducts = sortProducts(filteredProducts, sortBy);

  const changeItemsPerPage = (value: string) => {
    setSearchWith({ itemsPerPage: value, currentPage: '1' });
  };

  const handleSortBy = (value: string) => {
    setSearchWith({ sortBy: value });
  };

  const totalItems = sortedProducts.length;
  const currentItems = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const { theme } = useTheme();

  return (
    <div className={classNames(styles.catalog, {
      [styles.lightTheme]: theme === 'light',
      [styles.darkTheme]: theme === 'dark',
    })}>
      <div className={styles.breadCrumbs}>
        <Breadcrumbs />
      </div>
      <h1 className={styles.catalog_title}>{t(`pageTitles.${category}`)}</h1>
      <p
        className={styles.amount}
      >{`${sortedProducts.length} ${t('categories.models')}`}</p>
      <div className={styles.allfilters}>
      <div className={styles.filters}>
        <div className={styles.sort_wrap}>
          <p className={styles.sort}>{t('catalog.sortBy')}</p>
          <select
            id="sortBy"
            className={styles.sortFormControl}
            value={sortBy}
            onChange={event => handleSortBy(event.target.value)}
          >
            {Object.entries(SortOptions).map(([key, value]) => (
              <option key={value} value={value}>
                {t(`sortBy.${key}`)}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.sort_wrap}>
          <p className={styles.sort}>{t('catalog.itemsOnPage')}</p>
          <select
            id="perPageSelector"
            className={styles.pageFormControl}
            value={itemsPerPage}
            onChange={event => changeItemsPerPage(event.target.value)}
          >
            {Object.entries(ALL_OPTIONS).map(([key, value]) => (
              <option key={value} value={value}>
                {t(`sortBy.${key}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.search}>
        <form className={styles.searchForm}>
          <input
            value={searchQuery}
            type="text"
            className={styles.searchForm__input}
            placeholder="Search"
            onChange={handleQueryChange}
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={clearSearch}
            >
              &times;
            </button>
          )}
        </form>
      </div>
    </div>

      {isLoading && (
        <ThreeCircles
          visible={true}
          height="200"
          width="200"
          color="#ffffff"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass={styles.loader}
        />
      )}

      {!isLoading && currentItems.length > 0 && (
        <>
          <div
            className={cn(styles.card_holder, {
              [styles.card_holder_justify]: currentItems.length > 3,
            })}
          >
            {currentItems.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            total={totalItems}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {!isLoading && currentItems.length === 0 && (
        <NoResults
          title="We couldn't find any results"
          imgUrl={`${theme === 'light' ? 
            "/img/icons/pngwing.png" 
            : "/img/icons/pngwing_white.png"}`}
          withoutLink={true}
        />
      )}
    </div>
  );
};
