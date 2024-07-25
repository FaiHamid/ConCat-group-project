import React from "react";
import classes from './Icon.module.scss';
import { IconList } from "./utils/IconList";

type Props = {
    icon: IconList
}

export const Icon: React.FC<Props> = ({ icon }) => (
    <div className={classes.Icon}>
        <img src={`img/icons/${icon}.svg`} alt="Icon" />
    </div>
)