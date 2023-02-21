import { app } from './app';
import { config } from './models/schema/env.schema';
import { rootRoute } from './modules/root';
import { seedDatabase } from './jobs/feed-database';

app.register(rootRoute);

app.listen({ port: config.PORT }, async () => {
  // await seedDatabase();
  console.log('iniciei');
});
