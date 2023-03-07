import { client } from '../utils/fetchClient';
import { Phone } from '../types/Phone';

export const getPhones = () => {
  return client.get<Phone[]>('/products');
};

export const getPhoneById = (id: string) => {
  return client.get<Phone>(`/product_details/${id}`);
};
