import React from "react";
import classes from './Icon.module.scss';
import { IconList } from "./utils/IconList";
import classNames from "classnames";
import { useTheme } from "../../contexts/ThemeContext";

type Props = {
    icon: IconList
    counter?: number;
}

export const Icon: React.FC<Props> = ({ icon, counter = 0 }) => {

    const { theme } = useTheme(); 

    const iconSrc = theme === 'light' ? `/img/icons/${icon}-light.svg` : `/img/icons/${icon}.svg`;

    return (
        <div className={classNames(classes.Icon, {
            [classes['Icon--counter']]: counter,
        })}>
            <img src={iconSrc} alt="Icon" />

            {counter > 0 && <div className={classes.Icon__counter}>{counter}</div>}
        </div>
    )
}