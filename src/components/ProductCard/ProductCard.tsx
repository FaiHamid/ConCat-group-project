import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ProductCard.module.scss';
import classNames from 'classnames';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';
import { Buttons } from '../../modules/Buttons';
import { useTheme } from '../../contexts/ThemeContext';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  const {
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    itemId,
    category,
  } = product;
  const { theme } = useTheme();

  const discount = product.id % 3 === 0;

  const priceCell = () => (
    <div>
      {discount ? (
        <div className={styles.product__prices}>
          <p className={classNames(styles.product__price)}>${price}</p>
          <p
            className={classNames(
              styles.product__price,
              styles['product__price-discount'],
            )}
          >
            ${fullPrice}
          </p>
        </div>
      ) : (
        <p className={styles.product__price}>${fullPrice}</p>
      )}
    </div>
  );

  return (
    <div className={classNames(styles.product, {
      [styles.lightTheme]: theme === 'light',
      [styles.darkTheme]: theme === 'dark',
    })}>
      <Link
        to={`../../${category}/${itemId}`}
        className={styles.product__image}
        style={{ backgroundImage: `url(/${image})` }}
      />

      <Link
        to={`../../${category}/${itemId}`}
        className={styles.product__title}
      >
        {name}
      </Link>

      {priceCell()}

      <span className={styles.product__line} />

      <div className={classNames(styles.product__info, styles.info)}>
        <div className={styles.info__screen}>
          <p className={styles['info-key']}>{t('productCard.screen')}</p>
          <p className={styles['info-value']}>{screen}</p>
        </div>

        <div className={styles.info__capacity}>
          <p className={styles['info-key']}>{t('productCard.capacity')}</p>
          <p className={styles['info-value']}>{capacity}</p>
        </div>

        <div className={styles.info__ram}>
          <p className={styles['info-key']}>{t('productCard.ram')}</p>
          <p className={styles['info-value']}>{ram}</p>
        </div>
      </div>

      <div className={styles.button_hover}>
        <Buttons id={itemId} category={category} product={product} />
      </div>
    </div>
  );
};
