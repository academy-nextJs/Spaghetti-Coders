import { auth } from '@/auth';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = (await auth())?.accessToken
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
      return config;  
  },  
  (error) => {  
    return Promise.reject(error);  
  } 
);
api.interceptors.response.use(  
  (response) => response,  
  (error) => {  
    if (error.response?.status === 401) {  
      console.log('log in');
    }  
    return Promise.reject(error);  
  }  
); 
export default api;
