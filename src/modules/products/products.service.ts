import { knex } from '../../database/connection';

export async function getProducts() {
  // TODO: implement pagination;
  const products = await knex('products').select('*');
  return products;
}
