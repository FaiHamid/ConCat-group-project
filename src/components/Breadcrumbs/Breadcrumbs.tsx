import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import classes from './Breadcrumbs.module.scss';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

export const Breadcrumbs: React.FC = () => {
  const { theme } = useTheme();

  const BreadcrumbsHome = () => <div className={classes.BreadcrumbsHome} />;

  const routes = [{ path: '/', breadcrumb: BreadcrumbsHome }];

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