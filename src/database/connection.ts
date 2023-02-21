import { knex as setupKnex, Knex } from 'knex';
import { attachPaginate } from 'knex-paginate';
import { config } from '../models/schema/env.schema';

export const knexConfig: Knex.Config = {
  client: config.DATABASE_CLIENT,
  connection: config.DATABASE_URL,
  searchPath: ['knex', 'public'],
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
};

export const knex = setupKnex(knexConfig);
attachPaginate();
