import React from 'react';
import classes from './FavoritesPage.module.scss';
import { ProductCard } from '../../components/ProductCard';
import { useCartAndFavouritsContextContext } from '../../components/controllers/CartAndFavourits/useCartAndFavouritsContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { NoResults } from '../../components/NoResults';

export const FavouritePage: React.FC = () => {
  const { favourites } = useCartAndFavouritsContextContext();

  return (
    <div className={classes.Favourites}>
      <Breadcrumbs />

      {!favourites.length && (
        <NoResults title="Your favourites is empty" imgUrl="img/cart-is-empty.png" />
      )}

      {favourites.length > 0 && (
        <>
          <div>
            <h1 className={classes.titleFav}>Favourites</h1>
            <span className={classes.items}>{favourites.length} Items</span>
          </div>

          <div className={classes.fav__container}>
            {favourites.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
