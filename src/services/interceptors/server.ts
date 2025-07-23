'use server';
import { auth, signOut } from '@/auth';
import axios from 'axios';
import { redirect } from 'next/navigation';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    const token = (await auth())?.accessToken;
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
      signOut()
      redirect('/login');
    } else if (error.response?.status === 403) {
      signOut()
      redirect('/login');
    }
    return Promise.reject(error);
  }
);
export default api;
