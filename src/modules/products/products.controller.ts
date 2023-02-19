import type { FastifyReply, FastifyRequest } from 'fastify';
import { createProductBody } from '../../models/schema/product.schema';
import { getProducts, postProducts } from './products.service';

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
