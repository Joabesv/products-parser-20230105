import { knex } from '../../database/connection';
import { ICreateProduct } from '../../models/schema/product.schema';

export async function getProducts() {
  // TODO: implement pagination;
  const products = await knex('products').select('*');
  return products;
}

export async function postProducts(data: ICreateProduct) {
  await knex<ICreateProduct>('products').insert(data);
}

export async function getProductById(id: number) {
  const product = await knex<ICreateProduct>('products')
    .where('id', id)
    .first();
  return product;
}
