import { ToastUi } from '@/src/components/common/ui/ToastUi';
import axios from 'axios';
import { getSession, signIn, signOut } from 'next-auth/react';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use(async (config) => {
  const session = await getSession();
  const token = session?.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = (await getSession())?.refreshToken;
      if (refreshToken) {
        const response = await fetch(`${baseURL}/auth/refresh`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: refreshToken }),
        });
        const data = await response.json();
        if (response.ok) {
          await signIn('credentials', {
            redirect: false,
            accessToken: data?.accessToken,
            refreshToken: data?.refreshToken,
          });
        } else {
          await signOut({ callbackUrl: '/login' });
          ToastUi({ title: 'ورود ناموفق بود', color: 'danger' });
        }
      } else {
        await signOut({ callbackUrl: '/login' });
        ToastUi({ title: 'ورود ناموفق بود', color: 'danger' });
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
