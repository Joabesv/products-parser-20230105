import fastify from 'fastify';
import { productRoutes } from './modules/products/products.routes';
import { prettyLogger } from './utils/logger';

export const app = fastify({
  logger: { transport: prettyLogger },
});

app.register(productRoutes, { prefix: '/products' });
