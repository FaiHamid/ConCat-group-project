import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './FavoritesPage.module.scss';
import { ProductCard } from '../../components/ProductCard';
import { useCartAndFavouritsContextContext } from '../../components/controllers/CartAndFavourits/useCartAndFavouritsContext';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { NoResults } from '../../components/NoResults';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

export const FavouritePage: React.FC = () => {
  const { favourites } = useCartAndFavouritsContextContext();

  const { theme } = useTheme();

  const { t } = useTranslation();


  return (
    <div className={classNames(classes.Favourites, {
      [classes.lightTheme]: theme === 'light',
      [classes.darkTheme]: theme === 'dark',
    })}>
      <Breadcrumbs />

      {!favourites.length && (
        <NoResults title={t('empty.fav')} imgUrl="img/cart-is-empty.png" />
      )}

      {favourites.length > 0 && (
        <>
          <div>
            <h1 className={classes.titleFav}>{t('pageTitles.fav')}</h1>
            <span className={classes.items}>
              {`${favourites.length} ${t('categories.models')}`}
            </span>
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
