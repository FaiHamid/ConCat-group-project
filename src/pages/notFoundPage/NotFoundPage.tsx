import React from 'react';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
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
        <h1 className={classes.pageNotFound__title}>
          Oooops! Page not found...
        </h1>
      </div>
    </div>
  );
};
