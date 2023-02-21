import { z } from 'zod';

export const createProductBody = z.object({
  id: z.number().int().optional(),
  status: z.enum(['draft', 'trash', 'published']),
  imported_t: z.string().datetime(),
  url: z.string().url(),
  creator: z.string(),
  created_t: z.number(),
  last_modified_t: z.number(),
  product_name: z.string(),
  quantity: z.string(),
  brands: z.string(),
  categories: z.string(),
  labels: z.string(),
  cities: z.string(),
  purchase_places: z.string(),
  stores: z.string(),
  ingredients_text: z.string(),
  traces: z.string(),
  serving_size: z.string(),
  serving_quantity: z.number(),
  nutriscore_score: z.number().int(),
  main_category: z.string(),
  image_url: z.string().url(),
});

export const ProductParams = z.object({
  id: z.coerce.number(),
});

export type ICreateProduct = z.infer<typeof createProductBody>;
