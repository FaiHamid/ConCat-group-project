import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import styles from './ChoiceParams.module.scss';
import { Item, Product } from '../../types';
import { Buttons } from '../../modules/Buttons';
import { getProducts } from '../../api/dataFromServer';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  item: Item;
}

export const ChoiceParams: React.FC<Props> = ({ item }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const urlArr = pathname.split('-');
  const colorFromUrl = urlArr[urlArr.length - 1];
  const capacityFromUrl = urlArr[urlArr.length - 2];

  const category = pathname.split('/')[1];
  const itemId = pathname.split('/')[2];

  useEffect(() => {
    getProducts()
      .then(devices => {
        if (devices !== undefined) {
          setProduct(devices.find(device => device.itemId === itemId) || null);
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleChangeColor = (color: string) => {
    urlArr.pop();
    navigate(`${urlArr.join('-')}-${color}`);
  };

  const handleChangeCapacity = (capacity: string) => {
    const capacityLower = capacity.toLocaleLowerCase();
    navigate(
      `${urlArr.slice(0, urlArr.length - 2).join('-')}-${capacityLower}-${urlArr[urlArr.length - 1]}`,
    );
  };

  return (
    <>
      <div className={styles.section_params}>
        <p className={styles.colors_text}>{t('productCard.color')}</p>
        <form className={styles.colors}>
          {item?.colorsAvailable.map(color => {
            return (
              <input
                key={uuidv4()}
                type="radio"
                id="option1"
                name="color"
                className={cn(styles.radio_color, {
                  [styles.isActiveCol]: colorFromUrl === color,
                })}
                style={{ backgroundColor: color }}
                value={color}
                onChange={() => handleChangeColor(color)}
              />
            );
          })}
        </form>
      </div>

      <div className={styles.section_params}>
        <p className={styles.capacity_text}>
          {t('productCard.selectCapacity')}
        </p>

        <div>
          {item?.capacityAvailable.map(capacity => {
            return (
              <button
                key={uuidv4()}
                className={cn(styles.capacity_button, {
                  [styles.isActiveButton]:
                    capacity.toLocaleLowerCase() === capacityFromUrl,
                  [styles.notActive]:
                    capacity.toLocaleLowerCase() !== capacityFromUrl,
                })}
                type="button"
                onClick={() => handleChangeCapacity(capacity)}
              >
                {capacity}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.section_params_price}>
        {item?.priceDiscount ? (
          <div className={styles.product__prices}>
            <p className={cn(styles.product__price)}>${item.priceDiscount}</p>
            <p
              className={cn(
                styles.product__price,
                styles['product__price-discount'],
              )}
            >
              ${item.priceRegular}
            </p>
          </div>
        ) : (
          <p className={styles.product__price}>${item?.priceRegular}</p>
        )}
      </div>

      <div className={styles.buttons}>
        {product && (
          <Buttons
            id={itemId}
            category={category}
            product={product}
            biggerButtons={true}
          />
        )}
      </div>

      <div className={cn(styles.product__info, styles.info)}>
        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.screen')}</p>
          <p className={styles['info-value']}>{item?.screen}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.resolution')}</p>
          <p className={styles['info-value']}>{item?.resolution}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.processor')}</p>
          <p className={styles['info-value']}>{item?.processor}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.ram')}</p>
          <p className={styles['info-value']}>{item?.ram}</p>
        </div>
      </div>
    </>
  );
};
