import React from "react";
import classes from './NoResults.module.scss';
import { Link } from "react-router-dom";

type Props = {
    title: string;
    imgUrl?: string;
  };
  
  export const NoResults: React.FC<Props> = ({
    title,
    imgUrl = 'img/product-not-found.png',
  }) => (
    <div className={classes.NoResults}>
      <h2 className={classes.NoResults__title}>{title}</h2>
  
      <img src={imgUrl} className={classes.NoResults__img} alt="404" />
  
      <Link to="/" className={classes.NoResults__button}>
        GO HOME
      </Link> 
    </div>
  );