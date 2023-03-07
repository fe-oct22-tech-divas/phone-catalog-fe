import { fetch } from '../utils/fetchClient.ts';
import { Phone } from '../types/Phone.ts';

export const getPhones = () => {
  return client.get<Phone[]>(`/products`);
};
