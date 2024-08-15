import React, { useState } from "react";
import styles from './Settings.module.scss';

import { CursorSettings } from "../CursorSettings";
import { useTranslation } from 'react-i18next';

import { ThemeToggleButton } from "../../contexts/ThemeToggleButton";
import { useTheme } from "../../contexts/ThemeContext";
import classNames from "classnames";


interface SettingsProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Settings: React.FC<SettingsProps> = ({ onToggle, isOpen }) => {

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const { theme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 500);

    onToggle();
  };

  const suffixForImg = theme === 'dark' ? '' : '-light';

  return (
    <div className={classNames(styles.settings, {
        [styles.lightTheme]: theme === 'light',
        [styles.darkTheme]: theme === 'dark',
      })}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Toggle settings"
        className={classNames(styles.iconButton, { [styles.rotate]: isRotating })}
      >
        <img src={`/img/icons/settings${suffixForImg}.svg`} alt="Settings" />
      </button>
      <div className={classNames(styles.menu, { [styles.open]: isOpen })}>
        <div className={styles.menuItem}>
          <button
            type="button"
            className={styles.menuItem__language}
            onClick={changeLanguage}
          >
            <img src={`/img/icons/Globe${suffixForImg}.png`} alt="Language" />
          </button>
        </div>
        <div className={styles.menuItem}>
          <ThemeToggleButton />
        </div>
        <div className={styles.menuItem}>

          <CursorSettings />
        </div>
      </div>
    </div>
  );
};
