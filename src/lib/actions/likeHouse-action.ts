'use server';

import { cookies } from "next/headers";

export async function favouriteHouse(_prevState: unknown, formData: FormData) {
  const houseId = Number(formData.get('house_id'));
  const baseUrl = process.env.BASE_URL!;
  const token = (await cookies()).get('accessToken')?.value;
  console.log('token', token);

  try {
    const res = await fetch(`${baseUrl}/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ house_id: houseId }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Something went wrong');
    }

    const data = await res.json();

    return {
      success: true,
      data,
    };
  } catch (err: unknown) {
    const error = err as Error;
    return {
      success: false,
      error: error.message,
    };
  }
}
