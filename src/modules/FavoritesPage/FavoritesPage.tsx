import React from 'react';
import classes from './FavoritesPage.module.scss';
import { ProductCard } from '../../components/ProductCard';
import { useCartAndFavouritsContextContext } from '../../components/controllers/CartAndFavourits/useCartAndFavouritsContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';


export const FavouritePage: React.FC = () => {
    const {favourites} = useCartAndFavouritsContextContext();
  
    return (
        <div className={classes.Favourites}>
        <Breadcrumbs />
          <div>
            <h1 className={classes.titleFav}>Favourites</h1>
            <span className={classes.items}>{favourites.length}</span>
          </div>
  
          <div className={classes.fav__container}>
            {favourites.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    );
  };
  