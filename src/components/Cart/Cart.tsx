import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Cart.module.scss';
import classNames from "classnames";
import { IconList } from "../Icon/utils/IconList";
import { Icon } from "../Icon";

const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames([classes.cart], { [classes.active]: isActive });
};

export const Cart: React.FC = () => {
    return (
        <NavLink className={activeClass} to="/cart">
            <Icon icon={IconList.cart} />
        </NavLink>
    )
}