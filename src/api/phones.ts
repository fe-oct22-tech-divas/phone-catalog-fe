import { client } from '../utils/fetchClient';
import { Phone } from '../types/Phone';
import { PhoneFullInfo } from '../types/PhoneFullInfo';

export const getPhones = () => {
  return client.get<Phone[]>('/products');
};

export const getPhoneById = (id: string) => {
  return client.get<PhoneFullInfo>(`/product_details/${id}`);
};
