import React from "react";
import classes from './Rights.module.scss';
import { Breadcrumbs } from "../Breadcrumbs";
import { useTheme } from '../../contexts/ThemeContext';
import classNames from "classnames";

export const Rights: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames(classes.Rights, {
        [classes.lightTheme]: theme === 'light',
        [classes.darkTheme]: theme === 'dark',
        })}
    >
      <Breadcrumbs />
      <div className={classes.our}>
        <h1 className={classes.rights}> {`OUR RIGHTS     >`} </h1>
        <div>
          <img className={classes.imagerights} src="/img/icons/rights.jpg" alt="Rights" />
        </div>
        <h1 className={classes.lefts}> {`<     OUR LEFTS`} </h1>
      </div>

    </div>
  );
};