import { config } from '../models/schema/env.schema';
import { ICreateProduct } from '../models/schema/product.schema';

export async function fetchData() {
  const response = await fetch(config.API_URL);
  const data: ICreateProduct[] = await response.json();
  return data;
}
