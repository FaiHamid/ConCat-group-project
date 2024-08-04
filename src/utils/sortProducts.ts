import { Product, SortOptions } from "../types";

export const sortProducts = (products: Product[], sortBy: string) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case SortOptions.Newest:
      return sortedProducts.sort(
        (product1, product2) => product2.year - product1.year,
      );

    case SortOptions.Alphabetically:
      return sortedProducts.sort((product1, product2) =>
        product1.name.localeCompare(product2.name),
      );

    case SortOptions.Cheapest:
      return sortedProducts.sort(
        (product1, product2) => product1.price - product2.price,
      );
  }

  return sortedProducts;
};