import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import classes from './Breadcrumbs.module.scss';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const Breadcrumbs: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const BreadcrumbsHome = () => <div className={classes.BreadcrumbsHome} />;

  const routes = [{ path: '/', breadcrumb: BreadcrumbsHome },
    {path: '/phones', breadcrumb: t('breadcrumbs.phones')},
    {path: '/tablets', breadcrumb: t('breadcrumbs.tablets')},
    {path: '/accessories', breadcrumb: t('breadcrumbs.accessories')},
    {path: '/favourites', breadcrumb: t('breadcrumbs.favourites')},
    {path: '/cart', breadcrumb: t('breadcrumbs.cart')},
  ];

  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className={classNames(classes.Breadcrumbs, {
      [classes.lightTheme]: theme === 'light',
      [classes.darkTheme]: theme === 'dark',
    })}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        return (
          <div key={match.pathname} className={classes.Breadcrumbs__container}>
            <Link to={match.pathname} className={classes.Breadcrumbs__link}>
              {breadcrumb}
            </Link>

            {index < breadcrumbs.length - 1 && (
              <div className={classes.Breadcrumbs__icon} />
            )}
          </div>
        );
      })}
    </div>
  );
};