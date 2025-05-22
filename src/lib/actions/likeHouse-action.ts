'use server';

import { ApiClient } from '@/src/services/interceptors/client';
import axios from 'axios';

export async function favouriteHouse(_prevState: unknown, formData: FormData) {
  const houseId = Number(formData.get('house_id'));
  try {
    const res = await ApiClient().post('/favorites/add', { house_id: houseId });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      throw error;
    }

    console.error('Unexpected error:', error);
    throw error;
  }
}
