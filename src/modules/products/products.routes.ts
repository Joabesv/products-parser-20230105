import type { FastifyInstance } from 'fastify';
import { listProducts } from './products.controller';

export async function productRoutes(app: FastifyInstance) {
  app.get('/', listProducts);
}
