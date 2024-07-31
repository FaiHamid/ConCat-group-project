import { Product } from "../types";

export const getCategory = (id: string, products: Product[]) => (
  products.filter(product => product.itemId === id).map(product => product.category).toString()
)