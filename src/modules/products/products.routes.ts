import type { FastifyInstance } from 'fastify';
import {
  listProducts,
  createProducts,
  listProduct,
} from './products.controller';

export async function productRoutes(app: FastifyInstance) {
  app.get('/', listProducts);
  app.get('/:id', listProduct);
  app.post('/', createProducts);
}
