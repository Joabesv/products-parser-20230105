import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { app } from '../../src/app';

describe('Test the `root` route', () => {
  beforeAll(async () => {
    await app.ready();
  });
  afterAll(async () => {
    await app.close();
  });

  it('should return infos about the API situation', async () => {
    const response = await app.inject({
      url: '/',
    });

    expect(response.statusCode).toBe(200);
  });
});
