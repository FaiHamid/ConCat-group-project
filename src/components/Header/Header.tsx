import React from 'react';
import classes from './Header.module.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Favorites } from '../Favorites';
import { Cart } from '../Cart';

export const Header: React.FC = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__left}>
        <div className={classes.Header__logo}>
          <Logo />
        </div>

        <div className={classes.Header__nav}>
          <Nav />
        </div>
      </div>

      <div className={classes.Header__right}>
        <div className={classes.Header__favorites}>
          <Favorites />
        </div>
        
        <div className={classes.Header__cart}>
          <Cart />
        </div>

        <div className={classes.Header__menu}>
          <button type="button">
            <img src="img/icons/Menu.svg" alt="burger-menu"/>
          </button>
        </div>
      </div>
    </header>
  );
};
