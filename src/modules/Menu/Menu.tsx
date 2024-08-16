import classNames from 'classnames';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Cart } from '../../components/Cart';
import { Favourites } from '../../components/Favourites';
import { useTranslation } from 'react-i18next';

interface MenuProps {
  onClickClose: () => void;
  isOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClickClose }) => {

  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <aside className={classNames(styles.menu, { [styles.isOpen]: isOpen,
      [styles.lightTheme]: theme === 'light',
      [styles.darkTheme]: theme === 'dark',
    })}>
      <div className={styles.container}>
        <div className={styles.menu__center}>
          <nav className={styles.menu__nav}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/"
                  onClick={onClickClose}
                >
                  {t('nav.home')}
                </Link>
              </li>

              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/phones"
                  onClick={onClickClose}
                >
                  {t('nav.phones')}
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/tablets"
                  onClick={onClickClose}
                >
                  {t('nav.tablets')}
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link
                  className={styles.menu__link}
                  to="/accessories"
                  onClick={onClickClose}
                >
                  {t('nav.accessories')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.menu__bottom}>

        <div className={styles.menu__icons}>
          <Favourites />
        </div>
        <div className={styles.menu__icons}>

          <Cart />
        </div>
      </div>
    </aside>
  );
};
