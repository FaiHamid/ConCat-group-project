import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import styles from './Buttons.module.scss';
import { Product } from '../../types/Product';
import { getId } from '../../utils/getId';
import { useCartAndFavouritsContextContext } from '../../components/controllers/CartAndFavourits/useCartAndFavouritsContext';
import { getQuickProducts } from '../../api/dataFromServer';
import { useTheme } from '../../contexts/ThemeContext';

type Props = {
  id: string;
  category: string;
  product: Product;
  biggerButtons?: boolean;
};

export const Buttons: React.FC<Props> = ({
  id,
  category,
  product,
  biggerButtons,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, onAddToCart } = useCartAndFavouritsContextContext();
  const { favourites, onUpdateFavorites } = useCartAndFavouritsContextContext();

  const { theme } = useTheme();

  const { t } = useTranslation();


  useEffect(() => {
    getQuickProducts().then(setProducts);
  }, []);

  const hasInCart = cart.some(
    item => item.id === getId(category, products, id),
  );

  const onClickFavHandle = () => {
    onUpdateFavorites(product);
  };

  const onClickCart = () => {
    onAddToCart(product);
  };

  return (
    <div
      className={classNames(
        styles.buttons,
        {
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        }
      )}
    >
      {hasInCart ? (
        <button
          className={classNames(
            styles.buttons__button,
            styles['buttons__button-cart'],
            styles['buttons__button-cartActive'],
            {
              [styles.biggerHeight]: biggerButtons,
            },
          )}
          onClick={onClickCart}
        >
          {t('productCard.added')}
        </button>
      ) : (
        <button
          className={classNames(
            styles.buttons__button,
            styles['buttons__button-cart'],
            {
              [styles.biggerHeight]: biggerButtons,
            },
          )}
          onClick={onClickCart}
        >
          {t('productCard.addToCart')}
        </button>
      )}

      <button
        className={classNames(
          styles.buttons__button,
          styles['buttons__button-fav'],
          {
            [styles['buttons__button-fav-selected']]: favourites.some(
              item => item.id === getId(category, products, id),
            ),
            [styles.biggerHeight]: biggerButtons,
          },
        )}
        onClick={onClickFavHandle}
      />
    </div>
  );
};
