import { ajaxGet } from './BaseService';

export const getAuthToken = async () => {
  const response = await ajaxGet('/api/auth');
  return response;
};
