import { app } from './app';
import { knex } from './database/connection';
import { config } from './models/schema/env.schema';
import { formatMemoryUsage } from './utils/formatMemoryUsage';

app.get('/', async (request, reply) => {
  const isConnectionStable = (await knex('products').whereNotNull('id'))
    ? 'Stable'
    : 'Error querying database';
  // TODO: last time cron job was started = will query a FK in schema
  const requestMemUsage = process.memoryUsage().heapUsed;
  await reply.status(200).send({
    msg: 'This is a challenge by coodesh!',
    databaseStatus: isConnectionStable,
    RamUsage: formatMemoryUsage(requestMemUsage),
  });
});

app.listen({ port: config.PORT });
