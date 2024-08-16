import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Favourites.module.scss';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { IconList } from '../Icon/utils/IconList';
import { useCartAndFavouritsContextContext } from '../controllers/CartAndFavourits/useCartAndFavouritsContext';

const activeClass = ({ isActive }: { isActive: boolean }) => {
  return classNames([classes.Favourites], { [classes.active]: isActive });
};

export const Favourites: React.FC = () => {
  const {favourites} = useCartAndFavouritsContextContext();
  
  return (
    <NavLink className={activeClass} to="/favourites">
      <Icon icon={IconList.favourites} counter={favourites.length}/>
    </NavLink>
  );
};
