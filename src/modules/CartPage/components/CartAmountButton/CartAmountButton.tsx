import React, { ReactNode } from 'react';
import classes from './CartAmountButton.module.scss';
import classNames from 'classnames';
import { useTheme } from '../../../../contexts/ThemeContext';

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
  const { theme } = useTheme();

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(classes.CartAmountButton, {
        [classes.lightTheme]: theme === 'light',
        [classes.darkTheme]: theme === 'dark',
      })}
      disabled={!active}
    >
      {children}
    </button>
  );
};