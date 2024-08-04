import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import styles from './ChoiceParams.module.scss';
import { Item, Product } from '../../types';
import { Buttons } from '../../modules/Buttons';
import { useLocation, useNavigate } from 'react-router-dom';


interface Props {
  item: Item;
  product: Product;
}

export const ChoiceParams: React.FC<Props> = ({ item, product }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      <div className={styles.section_params}>
              <p className={styles.colors_text}>Available colors</p>
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
              <p className={styles.capacity_text}>Select capacity</p>

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
              {discount ? (
                <div className={styles.product__prices}>
                  <p className={cn(styles.product__price)}>
                    ${item.priceDiscount}
                  </p>
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
                <p className={styles['info-key']}>Screen</p>
                <p className={styles['info-value']}>{item?.screen}</p>
              </div>

              <div className={styles.info__row}>
                <p className={styles['info-key']}>Resolution</p>
                <p className={styles['info-value']}>{item?.resolution}</p>
              </div>

              <div className={styles.info__row}>
                <p className={styles['info-key']}>Processor</p>
                <p className={styles['info-value']}>{item?.processor}</p>
              </div>

              <div className={styles.info__row}>
                <p className={styles['info-key']}>RAM</p>
                <p className={styles['info-value']}>{item?.ram}</p>
              </div>
            </div>
    </>
)}
