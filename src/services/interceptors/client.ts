import axios from 'axios';
import { useSession } from 'next-auth/react';

export function ApiClient() {
    const { data: session } = useSession();
    const token = (session?.accessToken);
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
  });
  instance.interceptors.request.use((config) => {

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
}
