import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NoResults.module.scss';
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import classNames from "classnames";

type Props = {
  title: string;
  imgUrl?: string;
  withoutLink?: boolean;
};

export const NoResults: React.FC<Props> = ({
  title,
  imgUrl = 'img/product-not-found.png',
  withoutLink,
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
        
return (
  <div className={classNames(classes.NoResults, {
    [classes.lightTheme]: theme === 'light',
    [classes.darkTheme]: theme === 'dark',
    })}
  >
    <h2 className={classes.NoResults__title}>{title}</h2>


    <img src={imgUrl} className={classes.NoResults__img} alt="404" />
        
    {!withoutLink && (
      <Link to="/" className={classes.NoResults__button}>
        {t('buttons.goHome')}
      </Link>
    )}
  </div>
  )
};

