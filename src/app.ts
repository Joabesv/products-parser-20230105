import fastify from 'fastify';
import { rootRoute } from './modules/root';
import { productRoutes } from './modules/products';
import { prettyLogger } from './utils/logger';

export const app = fastify({
  logger: { transport: prettyLogger },
});
app.register(rootRoute);
app.register(productRoutes, { prefix: '/products' });
