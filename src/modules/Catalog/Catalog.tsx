import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Catalog.module.scss';
import { Pagination } from '../../components/Pagination';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Product } from '../../types';
import { getProducts } from '../../api/dataFromServer';
import { ThreeCircles } from 'react-loader-spinner';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { SortOptions } from '../../types/SortOptions';
import { Search } from '../../components/Searcher';

const sortProducts = (products: Product[], sortBy: string) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case SortOptions.Newest: 
      return sortedProducts.sort(
        (product1, product2) => product2.year - product1.year,
      );
    
    case SortOptions.Alphabetically:
      return sortedProducts.sort((product1, product2) =>
        product1.name.localeCompare(product2.name),
      );
    
    case SortOptions.Cheapest:
      return sortedProducts.sort(
        (product1, product2) => product1.price - product2.price,
      );
  }

  return sortedProducts;
};

const DEFAULT_ITEM_PER_PAGE = 16;

export const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || SortOptions.Newest;
  const currentPage = +(searchParams.get('currentPage') || 1);
  const itemsPerPage = +(searchParams.get('itemsPerPage') || DEFAULT_ITEM_PER_PAGE);
  const searchQuery = searchParams.get('query') || '';

  const ALL_OPTIONS = { 4: 4, 8: 8, 16: 16, all: products.length };

  const { pathname } = useLocation();

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      })
      .finally(() => setIsLoading(false));
  }, [pathname]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('currentPage', `${page}`);
    setSearchParams(params);
  };


  const category = pathname.split('/')[1];

  const filteredProducts = products
    .filter(product => product.category === category)
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));


  const sortedProducts = sortProducts(filteredProducts, sortBy);

  const changeItemsPerPage = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('itemsPerPage', value);
    params.set('currentPage', '1');
    setSearchParams(params);
  };

  const handleSortBy = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sortBy', value);
    setSearchParams(params);
  };

  const totalItems = sortedProducts.length;
  const currentItems = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className={styles.catalog}>
      <div className={styles.breadCrumbs}>
        <Breadcrumbs />
      </div>

      <h1 className={styles.catalog_title}>{category}</h1>
      <p className={styles.amount}>{`${sortedProducts.length} models`}</p>
      <div className={styles.allfilters}>
        <div className={styles.filters}>
          <div className={styles.sort_wrap}>
            <p className={styles.sort}>Sort by</p>
            <select
              id="sortBy"
              className={styles.sortFormControl}
              value={sortBy}
              onChange={event => handleSortBy(event.target.value)}
            >
              {Object.entries(SortOptions).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.sort_wrap}>
            <p className={styles.sort}>Items on page</p>
            <select
              id="perPageSelector"
              className={styles.pageFormControl}
              value={itemsPerPage}
              onChange={event => changeItemsPerPage(event.target.value)}
            >
              {Object.entries(ALL_OPTIONS).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>
          <div className={styles.search}>
            <Search />
          </div>
      </div>


      {isLoading ? (
        <ThreeCircles
          visible={true}
          height="200"
          width="200"
          color="#ffffff"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass={styles.loader}
        />
      ) : (
        <>
          <ul className={cn(styles.card_holder, {[styles.card_holder_justify]: currentItems.length > 3 })}>
            {currentItems.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </ul>

          <Pagination
            total={totalItems}
            perPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};
