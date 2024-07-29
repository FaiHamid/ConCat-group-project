import React from 'react';
import classNames from 'classnames';
import styles from './Menu.module.scss';

interface MenuProps {
  favouritesCount?: number;
  cartCount?: number;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ 
  favouritesCount = 0,
  cartCount = 0,
  onClose,
}) => {
  return (
    <aside className={styles.menu} id="menu">
      <div className={styles.menu__header}>
        <div className="logo">
          <img src="/img/icons/logoMenu.svg" alt="Nice Gadgets Logo" />
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="/img/icons/Close.svg"/>
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.menu__center}>
          <nav className={styles.menu__nav}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#shop" onClick={onClose}>
                  Home
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#phones" onClick={onClose}>
                  Phones
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#tablets" onClick={onClose}>
                  Tablets
                </a>
              </li>
              <li className={styles.menu__item}>
                <a className={styles.menu__link} href="#accessories" onClick={onClose}>
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.menu__bottom}>
        <div className={styles.menu__icons}>
          <a
            className={classNames(styles.icon, styles['icon-favourite'])}
            href="#favourites"
            onClick={onClose}
          >
            {favouritesCount > 0 && (
              <span className={styles.icon__num}>{favouritesCount}</span>
            )}
          </a>
        </div>
        <div className={styles.menu__icons}>
          <a
            className={classNames(styles.icon, styles['icon-cart'])}
            href="#cart"
            onClick={onClose}
          >
            {cartCount > 0 && (
              <span className={styles.icon__num}>{cartCount}</span>
            )}
          </a>
        </div>
      </div>
    </aside>
  );
};
