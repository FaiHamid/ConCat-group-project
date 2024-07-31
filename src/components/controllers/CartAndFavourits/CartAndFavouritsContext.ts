import React from 'react';
import { CartProduct, Product } from '../../../types';

export interface CartAndFavouritsContextType {
  cart: CartProduct[];
  favourites: Product[];
  onAddToCart: (product: Product) => void;
  onUpdateFavorites: (product: Product) => void;
}

export const CartAndFavouritsContext = React.createContext<CartAndFavouritsContextType>({
  cart: [],
  favourites: [],
  onAddToCart: () => {},
  onUpdateFavorites: () => {},
});
