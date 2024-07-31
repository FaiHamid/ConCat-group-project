import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Favorites.module.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { IconList } from '../Icon/utils/IconList';

const activeClass = ({ isActive }: { isActive: boolean }) => {
  return classNames([classes.Favorites], { [classes.active]: isActive });
};

export const Favorites: React.FC = () => {
  return (
    <NavLink className={activeClass} to="/favorites">
      <Icon icon={IconList.favorites} />
    </NavLink>
  );
};

export const Test: React.FC = () => {
  return (
    <>
    <span className={classes.spanNav}> Home{' > '}Favourites</span>
    <div className={classes.Favourites}>
        <div>
        <h1 className={classes.titleFav}>Favourites</h1>
        <span className={classes.items}>5 Items</span>
        </div>

        <div className={classes.fav__container}>
            <div className={classes.item__fav}></div>
            <div className={classes.item__fav}></div>
            <div className={classes.item__fav}></div>
            <div className={classes.item__fav}></div>
            <div className={classes.item__fav}></div>
        </div>
    </div>
    </>
  );
};
