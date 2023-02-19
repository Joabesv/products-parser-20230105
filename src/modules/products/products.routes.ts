import type { FastifyInstance } from 'fastify';
import { listProducts, createProducts } from './products.controller';

export async function productRoutes(app: FastifyInstance) {
  app.get('/', listProducts);
  app.post('/', createProducts);
}
