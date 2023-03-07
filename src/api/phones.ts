import { client } from '../utils/fetchClient';
import { Phone } from '../types/Phone';

export const getPhones = () => {
  return client.get<Phone[]>('/products');
};
