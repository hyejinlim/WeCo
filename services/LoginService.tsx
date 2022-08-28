import { ajaxPost } from './BaseService';

export const tempAuthLogin = async () => {
  const response = await ajaxPost('/signin', {
    email: 'testEmail@naver.com',
    password: 'asdfqwer1234~',
  });
  return response;
};
