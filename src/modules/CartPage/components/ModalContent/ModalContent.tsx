import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './ModalContent.module.scss';
import { useTheme } from "../../../../contexts/ThemeContext";
import classNames from "classnames";

type Props = {
  closeModal: () => void;
};

export const ModalContent: React.FC<Props> = ({ closeModal }) => {

  const { theme } = useTheme();
  const { t } = useTranslation();
  
  return (
    <div className={classNames(classes.ModalContent, {
            [classes.lightTheme]: theme === 'light',
            [classes.darkTheme]: theme === 'dark',
        })}
        >
        <h2>
         {t('cart.checkoutNot')}
        <br />
        {t('cart.seeYou')}
      </h2>

      <button className={classes.ModalContent__button} onClick={closeModal}>
        Ok
      </button>
    </div>
  );
};
