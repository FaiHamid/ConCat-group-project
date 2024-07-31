export type Product = {
  id: number;
  category: string;
  itemId: string;
  phoneId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};

export type CartProduct = Product & {
  amount: number;
};