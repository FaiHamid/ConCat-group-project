import { Product } from "../types";


export const getId = (category: string, products: Product[], id: string): number | undefined => {
  switch (category) {
    case 'phones':
      return products.find(item => item.itemId === id)?.id;

    case 'tablets':
      return products.find(item => item.itemId === id)?.id;

    case 'accessories':
      return products.find(item => item.itemId === id)?.id;

    default:
      return undefined;
  }
};