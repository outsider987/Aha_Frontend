import axios from 'axios';
import {useGlobalStore} from '~/store/context/global';

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
        const date = response.data;

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
