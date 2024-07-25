import React from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => (
  <Link to="/">
    <button type="button">
      <div className={classes.Logo}>
        <img src="/img/icons/OK.png" className={classes.Logo__img} alt="Logo" />
      </div>
    </button>
  </Link>
);