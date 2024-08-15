import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

import classNames from 'classnames';
import { useTheme } from '../../contexts/ThemeContext';


import { useTranslation } from 'react-i18next';


export const Footer: React.FC = () => {
  const { t } = useTranslation();

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  const { theme } = useTheme();

  return (
    <>
      <footer className={classNames(styles.footer, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
        })}
      >
        <div className={styles.container}>
          <Logo />
          <div className={styles.footer__links}>
            <a className={styles.link} href="https://github.com/fs-apr24-ConCats/ConCats-group-project">
              GitHub
            </a>
            <Link className={styles.link} to="/contacts">
              {t('footer.contacts')}
            </Link>
            <Link className={styles.link} to="/rights">
              {t('footer.rights')}
            </Link>
          </div>
          <div className={styles.footer__backToTop}>
            <a onClick={scrollToTop} className={styles.footer__textInfo}>
              {t('footer.top')}
            </a>
            <a onClick={scrollToTop} className={styles.arrow}></a>
          </div>
        </div>
      </footer>
    </>
  );
};
