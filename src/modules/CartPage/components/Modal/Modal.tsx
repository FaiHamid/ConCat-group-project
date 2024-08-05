import React, { ReactNode } from "react";
import classes from './Modal.module.scss';
import classNames from "classnames";
import { useTheme } from "../../../../contexts/ThemeContext";

type Props = {
    children: ReactNode;
    isOpen: boolean;
}

export const Modal: React.FC<Props> = ({ children, isOpen }) => {
    const { theme } = useTheme();
    
    return (
        <div className={classNames(classes.Modal, {
            [classes.lightTheme]: theme === 'light',
            [classes.darkTheme]: theme === 'dark',
        })}
        >
            <div className={classNames(classes[`visibility-${isOpen}`], classes.center)}>
                {children}
            </div>
        </div>
    )
}