import React, { ReactNode } from 'react';
import classes from './CartAmountButton.module.scss';

type Props = {
  active?: boolean;
  big?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export const CartAmountButton: React.FC<Props> = ({
  children,
  active = true,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classes.CartAmountButton}
      disabled={!active}
    >
      {children}
    </button>
  );
};