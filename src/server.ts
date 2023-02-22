import { app } from './app';
import { config } from './models/schema';
// import { seedDatabase } from './jobs/feed-database';

app.listen({ port: config.PORT });
