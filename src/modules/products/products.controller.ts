import { getProducts } from './products.service';

export async function listProducts() {
  const products = await getProducts();
  return products;
}
