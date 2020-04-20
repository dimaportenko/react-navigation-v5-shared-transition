import {Product} from '../models/Product';

export const getProducts = (limit = 10) => {
  const products = [];
  for (let i = 0; i < limit; ++i) {
    products.push(new Product());
  }
  return products;
};
