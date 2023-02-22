import type { FastifyReply, FastifyRequest } from 'fastify';
import { createProductBody, ProductParams } from '../../models/schema';
import {
  deleteProduct,
  getProductById,
  getProducts,
  postProducts,
} from './products.service';

export async function listProducts() {
  const products = await getProducts();
  return products;
}

export async function createProducts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const product = createProductBody.parse(request.body);
  await postProducts(product);

  return reply.status(201).send();
}

export async function listProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = ProductParams.parse(request.params);
  const product = await getProductById(id);
  console.log(product);
  return reply.status(200).send({
    product,
  });
}

export async function removeProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const product = ProductParams.parse(request.params);
  await deleteProduct(product.id);

  return reply.status(204).send('deletei');
}
