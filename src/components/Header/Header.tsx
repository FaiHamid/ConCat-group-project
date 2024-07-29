import React, { useState } from 'react';
import classes from './Header.module.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Favorites } from '../Favorites';
import { Cart } from '../Cart';
import { Menu } from '../../modules/Menu'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

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
          <button type="button" onClick={toggleMenu}>
            <img src="img/icons/Menu.svg" alt="burger-menu"/>
          </button>
        </div>
      </div>
      {isMenuOpen && <Menu onClose={toggleMenu} />}
    </header>
  );
};
