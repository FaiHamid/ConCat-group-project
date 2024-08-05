import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Favorites.module.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { IconList } from '../Icon/utils/IconList';
import { useCartAndFavouritsContextContext } from '../controllers/CartAndFavourits/useCartAndFavouritsContext';

const activeClass = ({ isActive }: { isActive: boolean }) => {
  return classNames([classes.Favorites], { [classes.active]: isActive });
};

export const Favorites: React.FC = () => {
  const {favourites} = useCartAndFavouritsContextContext();
  
  return (
    <NavLink className={activeClass} to="/favorites">
      <Icon icon={IconList.favorites} counter={favourites.length}/>
    </NavLink>
  );
};
