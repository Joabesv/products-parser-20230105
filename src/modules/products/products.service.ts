import { knex } from '../../database/connection';
import { ICreateProduct } from '../../models/schema';

export async function getProducts() {
  const products = await knex('products')
    .select('*')
    .paginate({ perPage: 5, currentPage: 1 });
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

export async function deleteProduct(id: number) {
  const productToDelete = await knex<ICreateProduct>('products')
    .where('id', id)
    .update('status', 'trash');
  console.log(
    'a query',
    knex<ICreateProduct>('products')
      .where('id', id)
      .update('status', 'trash')
      .toQuery(),
  );
  return productToDelete;
}
