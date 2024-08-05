import React from "react";
import classes from './CartItem.module.scss';
import { Link } from "react-router-dom";
import { Icon } from "../../../../components/Icon";
import { IconList } from "../../../../components/Icon/utils/IconList";
import { CartAmountButton } from "../CartAmountButton";
import { CartProduct } from "../../../../types";
import { useCartAndFavouritsContextContext } from "../../../../components/controllers/CartAndFavourits/useCartAndFavouritsContext";
import { useTheme } from "../../../../contexts/ThemeContext";
import classNames from "classnames";

type Props = {
  product: CartProduct;
  increaseAmount: () => void;
  decreaseAmount: () => void;
};

const MAX_PRODUCTS = 10;

export const CartItem: React.FC<Props> = ({ product, increaseAmount, decreaseAmount }) => {
  const { image, name, price, amount } = product;
  const { onDeleteFromCart } = useCartAndFavouritsContextContext();
  const { theme } = useTheme();

  return (
    <article className={classNames(classes.CartItem, {
      [classes.lightTheme]: theme === 'light',
      [classes.darkTheme]: theme === 'dark',
    })}>
      <div className={classes.CartItem__container}>
        <button
          className={classes.CartItem__remove}
          type="button"
          onClick={() => onDeleteFromCart(product)}
        >
          <img src="img/icons/Close-grey.svg" alt="Remove" />
        </button>

        <Link
          className={classes.CartItem__link}
          to={`/${product.category}/${product.itemId}`}
          title="More details"
        >
          <div className={classes['CartItem__img-wrapper']}>
            <img className={classes.CartItem__image} src={image} alt={name} />
          </div>

          <h5 className={classes.CartItem__title}>{name}</h5>
        </Link>
      </div>

      <div className={classes.CartItem__container}>
        <div className={classes['CartItem__quantity-wrapper']}>
        <CartAmountButton
            active={amount > 1}
            onClick={decreaseAmount}
          >
            {amount > 1 ? (
              <Icon icon={IconList.minus} />
            ) : (
              <Icon icon={IconList.minusDisabled} />
            )}
          </CartAmountButton>
          <span className={classes.CartItem__quantity}>{amount}</span>
          <CartAmountButton
            active={amount < MAX_PRODUCTS}
            onClick={increaseAmount}
          >
            {amount < MAX_PRODUCTS ? (
              <Icon icon={IconList.plus} />
            ) : (
              <Icon icon={IconList.plusDisabled} />
            )}
          </CartAmountButton>
        </div>
        <p className={classes.CartItem__price}>{`$${price}`}</p>
      </div>
    </article>
  );
}