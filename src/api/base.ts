import axios from 'axios';
import {useGlobalStore} from '~/store/context/global';
export interface ErrorCode {
  data: any;
  error: {
    code: number;
    content: string;
  };
}

const api = (subPath: string = '') => {
  const {actions: globalActions} = useGlobalStore();
  const api = axios.create({
    baseURL: `https://avl-frontend-exam.herokuapp.com/api/${subPath}`,
    headers: {'Content-Type': 'application/json'},
  });

  api.interceptors.request.use(
      (config) => {
        globalActions.setLoading(true);
        return config;
      },
      (error) => {
        globalActions.setLoading(false);
        return Promise.reject(error);
      },
  );
  api.interceptors.response.use(
      (response) => {
        globalActions.setLoading(false);
        const date: ErrorCode = response.data;
        console.log(date.error.code);
        if (date.error.code === -2) {
          localStorage.removeItem('token');
        }

        return response;
      },
      (error) => {
        globalActions.setLoading(false);
        return Promise.reject(error);
      },
  );
  return api;
};

export default api;
