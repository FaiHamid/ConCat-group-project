import React, { useMemo } from 'react';
import { CartProduct, Product } from '../../../types';
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

  const values = useMemo(
    () => ({
      cart,
      favourites,
      onAddToCart: handleAddToCart,
      onUpdateFavorites: updateFavorites,
    }),
    [cart, favourites],
  );

  return (
    <CartAndFavouritsContext.Provider value={values}>{children}</CartAndFavouritsContext.Provider>
  );
};
