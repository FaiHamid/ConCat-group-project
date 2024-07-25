import React from 'react';
import classes from './Nav.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../pages/pages';

export const Nav: React.FC = () => {
  const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames([classes.Nav__item], { [classes.active]: isActive });
  };

  return (
    <nav className={classes.Nav}>
      {PAGES.map(page => (
        <NavLink
          to={`/${page === 'home' ? '' : page}`}
          key={page}
          className={activeClass}
        >
          {page}
        </NavLink>
      ))}
    </nav>
  );
};