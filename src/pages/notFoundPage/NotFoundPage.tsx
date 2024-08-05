import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.pageNotFound__wrapper}>
      <div className={classes.pageNotFound}>
        <div className={classes.pageNotFound__imageWrapper}>
          <img
            src="img/404-not-found.png"
            alt="page-not-found"
            className={classes.pageNotFound__img}
          />
        </div>
        <h1 className={classes.pageNotFound__title}>{t('empty.404')}</h1>
      </div>
    </div>
  );
};
