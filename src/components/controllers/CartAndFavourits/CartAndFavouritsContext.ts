import React from 'react';
import { CartActions, CartProduct, Product } from '../../../types';

export interface CartAndFavouritsContextType {
  cart: CartProduct[];
  favourites: Product[];
  onAddToCart: (product: Product) => void;
  onDeleteFromCart: (product: Product) => void;
  onUpdateFavorites: (product: Product) => void;
  onUpdateCart: (product: CartProduct, action: CartActions) => void;
  onCheckout: () => void;
}

export const CartAndFavouritsContext = React.createContext<CartAndFavouritsContextType>({
  cart: [],
  favourites: [],
  onAddToCart: () => {},
  onUpdateFavorites: () => {},
  onDeleteFromCart: () => {},
  onUpdateCart: () => {},
  onCheckout: () => {},
});
