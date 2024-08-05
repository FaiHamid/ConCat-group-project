import React from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import classNames from 'classnames';

export const Logo: React.FC = () => {
  const { theme } = useTheme();

return (
    <Link to="/">
      <button type="button">
        <div className={classNames(classes.Logo, {
      [classes.lightTheme]: theme === 'light',
      [classes.darkTheme]: theme === 'dark',
    })}>
          <img src="/img/icons/OK.png" className={classes.Logo__img} alt="Logo" />
        </div>
      </button>
    </Link>
  );
}