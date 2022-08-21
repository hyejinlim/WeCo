import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const instance = axios.create({
  // baseURL: 'http://hlcc.shop',
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: { Accept: '*/*', 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response.data;
    } else {
      if (response.status === 401) {
        // common error
      }
      return Promise.reject(response.data);
    }
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

// header에 token 셋팅
export const setAuthToken = (token: string) => {
  console.log('>>>>setAuthToken:' + token);
  instance.defaults.headers.common['Authorization'] = token;
  // LocalStore.setAuthToken(token);
  // SessionStore.setAuthToken(token);
};

export const ajaxGet = async <T = any,>(
  subUrl: string,
  params?: any
): Promise<AxiosResponse<T>> => {
  return instance.get(subUrl, params);
};

export const ajaxPost = async <T = any,>(
  subUrl: string,
  params?: any
): Promise<AxiosResponse<T>> => {
  return instance.post(subUrl, params);
};

export const ajaxPut = async <T = any,>(
  subUrl: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return instance.put(subUrl, params);
};

export const ajaxDelete = async <T = any,>(
  subUrl: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return instance.delete(subUrl, params);
};
