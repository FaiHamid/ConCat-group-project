import React from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import styles from './ChoiceParams.module.scss';
import { Item, Product } from '../../types';
import { Buttons } from '../../modules/Buttons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';
import { colorNameToRgb } from './availableColors';

interface Props {
  item: Item;
  product: Product;
}

export const ChoiceParams: React.FC<Props> = ({ item, product }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const { t } = useTranslation();

  const urlArr = pathname.split('-');

  let colorFromUrl = urlArr[urlArr.length - 1];
  let capacityFromUrl = urlArr[urlArr.length - 2];

  if (item.colorsAvailable.includes(`${capacityFromUrl} ${colorFromUrl}`)) {
    colorFromUrl = `${capacityFromUrl} ${colorFromUrl}`;
    capacityFromUrl = urlArr[urlArr.length - 3];
  }

  const category = pathname.split('/')[1];
  const itemId = pathname.split('/')[2];

  const handleChangeColor = (color: string) => {
    if (colorFromUrl.split(' ').length > 1) {
      urlArr.pop();
    }

    urlArr.pop();
    navigate(`${urlArr.join('-')}-${color.replace(' ', '-')}`);
  };

  const handleChangeCapacity = (capacity: string) => {
    const capacityLower = capacity.toLocaleLowerCase();
    let endElement = urlArr[urlArr.length - 1];
    let startIndex = urlArr.length - 2;

    if (colorFromUrl.split(' ').length > 1) {
      endElement = colorFromUrl.replace(' ', '-');
      startIndex = urlArr.length - 3;
    }

    navigate(
      `${urlArr.slice(0, startIndex).join('-')}-${capacityLower}-${endElement}`,
    );
  };

  const discount = product && product?.id % 3 === 0;

  return (
    <>
      <div
        className={classNames(styles.section_params, {
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        })}
      >
        <p className={styles.colors_text}>{t('productCard.color')}</p>
        <form className={styles.colors}>
          {item?.colorsAvailable.map(color => {
            const hexColor = colorNameToRgb(color)

            return (
              <input
                key={uuidv4()}
                type="radio"
                id="option1"
                name="color"
                className={cn(styles.radio_color, {
                  [styles.isActiveCol]: colorFromUrl === color,
                })}
                style={{ backgroundColor: hexColor  }}
                value={color}
                onChange={() => handleChangeColor(color)}
              />
            );
          })}
        </form>
      </div>

      <div
        className={classNames(styles.section_params, {
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        })}
      >
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

      <div
        className={classNames(styles.section_params_price, {
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        })}
      >
        {discount ? (
          <div className={styles.product__prices}>
            <p className={cn(styles.product__price)}>${product.price}</p>
            <p
              className={cn(
                styles.product__price,
                styles['product__price-discount'],
              )}
            >
              ${product.fullPrice}
            </p>
          </div>
        ) : (
          <p className={styles.product__price}>${product.fullPrice}</p>
        )}
      </div>

      <div
        className={classNames(styles.buttons, {
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        })}
      >
        {product && (
          <Buttons
            id={itemId}
            category={category}
            product={product}
            biggerButtons={true}
          />
        )}
      </div>

      <div
        className={classNames(styles.product__info, {
          [styles.lightTheme]: theme === 'light',
          [styles.darkTheme]: theme === 'dark',
        })}
      >
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
