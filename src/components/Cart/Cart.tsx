import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import classes from './Cart.module.scss';
import classNames from "classnames";
import { IconList } from "../Icon/utils/IconList";
import { Icon } from "../Icon";

const activeClass = ({ isActive }: { isActive: boolean }) => {
    return classNames([classes.cart], { [classes.active]: isActive });
};

export const Cart: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCounter(cartItems.length);
      }, []);

    return (
        <NavLink className={activeClass} to="/cart">
            <Icon icon={IconList.cart} counter={counter} />
        </NavLink>
    )
}