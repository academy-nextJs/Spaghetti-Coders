'use server';

import api from '@/src/services/interceptors/server';
import { redirect } from 'next/navigation';
import axios from 'axios';

export async function favouriteHouse(_prevState: unknown, formData: FormData) {
  const houseId = Number(formData.get('house_id'));
  try {
    const res = await api.post('/favorites', { house_id: houseId });
    console.log(res.data);
    return res.data;
  } catch (error) {
        if (axios.isAxiosError(error)) {
      console.error(error.response?.data);

      if (error.response?.status === 401) {
        redirect('/login');
      }

      throw error;
    }

    console.error('Unexpected error:', error);
    throw error;
  }
}
