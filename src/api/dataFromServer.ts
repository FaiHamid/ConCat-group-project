import { Item, Product } from "../types";
import { client } from "../utils/fetchClient";

export const getItems = (url: string) => {
  return client.get<Item[]>(url + '.json');
};

export const getProducts = () => {
  return client.get<Product[]>('products.json');
};

export const getQuickProducts = () => {
  return client.getQuick<Product[]>('products.json');
};

