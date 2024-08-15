import React, { useState } from 'react';
import classes from './Header.module.scss';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { Favorites } from '../Favorites';
import { Cart } from '../Cart';
import { Menu } from '../../modules/Menu';
import { Settings } from '../Settings';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  const { theme } = useTheme();

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleSettings = () => {
    setIsSettingsOpen(prevState => !prevState);
  };

  return (
    <header className={classNames(classes.Header, {
      [classes.lightTheme]: theme === 'light',
      [classes.darkTheme]: theme === 'dark',
    })}>
      <div className={classes.Header__left}>
        <div className={classes.Header__logo}>
          <Logo />
        </div>

        <div className={classes.Header__nav}>
          <Nav />
        </div>
      </div>

      <div className={classes.Header__right}>
        <div className={classes.Header__settings}>
          <Settings isOpen={isSettingsOpen} onToggle={toggleSettings} />
        </div>


        <div className={classes.Header__favorites}>
          <Favorites />
        </div>

        <div className={classes.Header__cart}>
          <Cart />
        </div>

        <div className={classes.Header__menu}>

          <div className={classes.Header__settings_menu}>
            <Settings isOpen={isSettingsOpen} onToggle={toggleSettings} />
          </div>

          <button
            type="button"
            onClick={handleToggleMenu}
            aria-label="Toggle menu"
          >
            <img
              src={isMenuOpen ? ( theme === 'dark' ? '/img/icons/Close.svg' : '/img/icons/close_dark.svg') 
                : (theme === 'dark' ? '/img/icons/Menu.svg' : '/img/icons/burger_dark.svg')}
              alt={isMenuOpen ? 'close-menu' : 'burger-menu'}
            />
          </button>
          
        </div>
      </div>

      <Menu
        isOpen={isMenuOpen}
        onClickClose={handleToggleMenu}
      />
      
    </header>
  );
};
