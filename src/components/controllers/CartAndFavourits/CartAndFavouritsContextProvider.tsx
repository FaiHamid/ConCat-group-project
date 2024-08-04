import React, { useMemo } from 'react';
import { CartActions, CartProduct, Product } from '../../../types';
import { CartAndFavouritsContext } from './CartAndFavouritsContext';
import { useLocaleStorage } from '../../../utils/useLocaleStorage';


interface Props {
  children: React.ReactNode;
}

export const CartAndFavouritsContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocaleStorage<CartProduct[]>('cartItems', []);
  const [favourites, setFavourites] = useLocaleStorage<Product[]>(
    'favItem',
    [],
  );

  const updateFavorites = (product: Product) => {
    const existingItem = favourites.find(favouritesItem => favouritesItem.id === product.id);
    if (existingItem) {
      setFavourites(favourites.filter(favouritesItem =>
        favouritesItem.id !== product.id
      ));
    } else {
      setFavourites([...favourites,  product ]);
    }
  };

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find(cartItem => cartItem.id === product.id);
    if (existingItem) {
      setCart(cart.filter(cartItem =>
        cartItem.id !== product.id ));
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const handleDeleteFromCart = (product: Product) => {
    setCart(cart.filter(cartItem =>
      cartItem.id !== product.id ));
  }

  const updateCart = (product: CartProduct, action: CartActions) => {
    switch (action) {
      case CartActions.Increase:
        setCart(cart.map(item => 
          item.id === product.id && item.amount < 10 
            ? { ...item, amount: item.amount + 1 } 
            : item
        ));
        break;
      
        case CartActions.Decrease:
          setCart(cart.map(item => 
            item.id === product.id && item.amount > 1 
              ? { ...item, amount: item.amount - 1 } 
              : item
          ))
        break;
    }
  }

  const values = useMemo(
    () => ({
      cart,
      favourites,
      onAddToCart: handleAddToCart,
      onDeleteFromCart: handleDeleteFromCart,
      onUpdateFavorites: updateFavorites,
      onUpdateCart: updateCart,
    }),
    [cart, favourites],
  );

  return (
    <CartAndFavouritsContext.Provider value={values}>{children}</CartAndFavouritsContext.Provider>
  );
};
