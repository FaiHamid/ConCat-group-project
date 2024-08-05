import React from 'react';
import classes from './ThemeToggleButton.module.scss';
import cn from 'classnames';
import { useTheme } from './ThemeContext';

export const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const suffixForImg = theme === 'dark' ? '' : '-light';

  return (
    <button
      className={cn(classes.toggleButton, {
        [classes.lightTheme]: theme === 'light',
        [classes.darkTheme]: theme === 'dark',
      })}
      onClick={toggleTheme}
    >
      <img src={`/img/icons/Theme${suffixForImg}.svg`} alt="Theme icon" />
    </button>
  );
};