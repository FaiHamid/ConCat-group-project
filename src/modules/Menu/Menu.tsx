import classNames from 'classnames';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

interface MenuProps {
  favouritesCount: number;
  cartCount: number;
  onClickClose: () => void;
  isOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({ favouritesCount, cartCount, isOpen, onClickClose }) => {
  return (
    <aside className={classNames(styles.menu, { [styles.isOpen]: isOpen })}>
      <div className={styles.container}>
        <div className={styles.menu__center}>
          <nav className={styles.menu__nav}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <a
                  className={styles.menu__link}
                  href="#shop"
                  onClick={onClickClose}
                >
                  Home
                </a>
              </li>

              <li className={styles.menu__item}>
                <a
                  className={styles.menu__link}
                  href="#contacts"
                  onClick={onClickClose}
                >
                  Phones
                </a>
              </li>
              <li className={styles.menu__item}>
                <a
                  className={styles.menu__link}
                  href="#about"
                  onClick={onClickClose}
                >
                  Tablets
                </a>
              </li>
              <li className={styles.menu__item}>
                <a
                  className={styles.menu__link}
                  href="#about"
                  onClick={onClickClose}
                >
                  Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.menu__bottom}>
        <div className={styles.menu__icons}>
          <Link
            className={classNames(styles.icon, styles['icon-favourite'])}
            to="/favourites"
            onClick={onClickClose}
          >
            {favouritesCount > 0 && (
              <span className={styles.icon__num}>{favouritesCount}</span>
            )}
          </Link>
        </div>
        <div className={styles.menu__icons}>
          <Link
            className={classNames(styles.icon, styles['icon-cart'])}
            to="/cart"
            onClick={onClickClose}
          >
            {cartCount > 0 && (
              <span className={styles.icon__num}>{cartCount}</span>
            )}
          </Link>
        </div>
      </div>
    </aside>
  );
};
