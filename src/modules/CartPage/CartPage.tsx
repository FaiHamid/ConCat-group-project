import React, { useEffect, useState } from 'react';
import classes from './CartPage.module.scss';
import { NoResults } from '../../components/NoResults';
import { CartItem } from './components/CartItem';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Modal } from './components/Modal';
import { ModalContent } from './components/ModalContent';
import { useLocaleStorage } from '../../utils/useLocaleStorage';
import { CartProduct } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const CartPage: React.FC = () => {
  const [cart, setCart] = useLocaleStorage<CartProduct[]>('cartItems', []);
  const [sum, setSum] = useState(0);
  const [amount, setAmount] = useState(0);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    const validCart = cart.filter(item => item.price !== undefined && item.amount !== undefined && item.amount > 0);

    if (validCart.length !== cart.length) {
      setCart(validCart);
    }

    const total = validCart.reduce((p, item) => p + item.price * item.amount, 0);
    const quantity = validCart.reduce((p, item) => p + item.amount, 0);

    setSum(total);
    setAmount(quantity);
  }, [cart, setCart]);

  const increaseAmount = (id: number) => {
    const updatedCart = cart.map(item => 
      item.id === id && item.amount < 10 
        ? { ...item, amount: item.amount + 1 } 
        : item
    );
    setCart(updatedCart);
  };

  const decreaseAmount = (id: number) => {
    const updatedCart = cart.map(item => 
      item.id === id && item.amount > 1 
        ? { ...item, amount: item.amount - 1 } 
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className={classes.CartPage}>
      <Breadcrumbs />

      {!cart.length && (
        <NoResults title="Your cart is empty" imgUrl="img/cart-is-empty.png" />
      )}
        
      {cart.length > 0 && (
        <div className={classes.CartPage__container}>
          <h2>Cart</h2>

          <div className={classes.CartPage__content}>
            <div className={classes.CartPage__list}>
              {cart.map(item => (
                <CartItem
                  key={uuidv4()}
                  product={item}
                  increaseAmount={() => increaseAmount(item.id)}
                  decreaseAmount={() => decreaseAmount(item.id)}
                  removeItem={() => removeItem(item.id)}
                />
              ))}
            </div>

            <div className={classes.CartPage__total}>
              <div className={classes.CartPage__sum}>{`$${sum}`}</div>
              <div className={classes.CartPage__number}>
                {`Total for ${amount} item${amount === 1 ? '' : 's'}`}
              </div>
              <div className={classes.CartPage__line} />
              <button
                type="button"
                className={classes.CartPage__button}
                onClick={() => setModalVisibility(true)}
              >
                Checkout
              </button>

              <Modal isOpen={modalVisibility}>
                <ModalContent closeModal={() => setModalVisibility(false)} />
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};