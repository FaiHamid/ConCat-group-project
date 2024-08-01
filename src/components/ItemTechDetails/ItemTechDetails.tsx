import React from 'react';
import cn from 'classnames';
import { Item } from '../../types';
import styles from './ItemTechDetails.module.scss';

interface Props {
  item: Item;
}

export const ItemTechDetails: React.FC<Props> = ({ item }) => (
  <>
    <h3 className={styles.title_tech}>Tech specs</h3>

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

    <div className={styles.info__row}>
      <p className={styles['info-key']}>Built in memory</p>
      <p className={styles['info-value']}>{item?.capacity}</p>
    </div>

    <div className={styles.info__row}>
      <p className={styles['info-key']}>Camera</p>
      <p className={styles['info-value']}>{item?.camera}</p>
    </div>

    <div className={styles.info__row}>
      <p className={styles['info-key']}>Zoom</p>
      <p className={styles['info-value']}>{item?.zoom}</p>
    </div>

    <div className={styles.info__row}>
      <p className={styles['info-key']}>Cell</p>
      <p className={styles['info-value']}>{item?.cell}</p>
    </div>
  </div>
  </>
)