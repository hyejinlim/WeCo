import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const addZero = (date: number) => {
  if (date < 10) {
    const zeroDate = ('00' + date).slice(-2);
    return zeroDate;
  }
  return date;
};

export const setCookie = async (name: string, value: string, option?: any) => {
  return await cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
  const cookie = cookies.get(name);
  return cookie ? cookie : '';
};

export const isCookieExist = (name: string) => {
  const isCookie = getCookie(name);
  if (isCookie) {
    return true;
  }
  return false;
};
