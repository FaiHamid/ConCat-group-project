import React, { useMemo } from 'react';
import { CartProduct, Product } from '../../../types';
import { CartAndFavouritsContext } from './CartAndFavouritsContext';
import { useLocaleStorage } from '../../../utils/useLocaleStorage';

interface Props {
  children: React.ReactNode;
}

export const CartAndFavouritsContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocaleStorage<CartProduct[]>('cartItems', []);


  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find(cartItem => cartItem.id === product.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === product.id ? { ...cartItem, amount: (cartItem.amount || 1) + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const values = useMemo(
    () => ({
      cart,
      onAddToCart: handleAddToCart,
    }),
    [cart],
  );

  return (
    <CartAndFavouritsContext.Provider value={values}>{children}</CartAndFavouritsContext.Provider>
  );
};