import React from 'react';
import { useTranslation } from 'react-i18next';
import { Item } from '../../types';
import styles from './ItemTechDetails.module.scss';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

interface Props {
  item: Item;
}

export const ItemTechDetails: React.FC<Props> = ({ item }) => {

  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title_tech}>{t('productCard.tech')}</h3>

      <div className={classNames(styles.product__info, styles.info, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
        })}>
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
          <p className={styles['info-key']}>{t('productCard.resolution')}</p>
          <p className={styles['info-value']}>{item?.ram}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.capacity')}</p>
          <p className={styles['info-value']}>{item?.capacity}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.camera')}</p>
          <p className={styles['info-value']}>{item?.camera}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.zoom')}</p>
          <p className={styles['info-value']}>{item?.zoom}</p>
        </div>

        <div className={styles.info__row}>
          <p className={styles['info-key']}>{t('productCard.cell')}</p>
          <p className={styles['info-value']}>{item?.cell}</p>
        </div>
      </div>
    </>
  )
}
