import React from "react";
import classes from './ModalContent.module.scss';

type Props = {
    closeModal: () => void;
};

export const ModalContent: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className={classes.ModalContent}>
        <h2>
        Checkout is not implemented yet.
        <br />
        See you soon :)
        </h2>

        <button
        className={classes.ModalContent__button}
        onClick={closeModal}
        >
        Ok
        </button>
    </div>
  );
};