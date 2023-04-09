import { ajaxGet } from './BaseService';

// get 예시
export const getPostAllList = async (param: any) => {
  const params = {
    sort: '',
    offset: '',
    limit: '',
    period: '',
    type: '',
  };
  const response = await ajaxGet('/api/hello', params);
  console.log(response);
};
