import { app } from './app';
import { knex } from './database/connection';
import { config } from './models/schema/env.schema';

app.get('/', async (request, reply) => {
  await reply.status(200).send({
    msg: 'This is a challenge by coodesh!',
  });
});

app.get('/list', async (request, reply) => {
  const products = await knex('products').select('*');
  return products;
});

app.listen({ port: config.PORT });
