import { config, ICreateProduct } from '../models/schema';

export async function fetchData() {
  const response = await fetch(config.API_URL);
  const data: ICreateProduct[] = await response.json();
  return data;
}
