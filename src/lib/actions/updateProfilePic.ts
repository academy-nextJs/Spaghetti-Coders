'use server';

import { auth } from '@/auth';
import api from '@/src/services/interceptors/server';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { uploadImage } from '../cloudinary'; // your working cloudinary util

type State = {
  success: boolean;
  message: string | null;
};

export async function updateUserImageAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const userId = (await auth())?.user.id;
  const profilePicture = formData.get('profilePicture');
  console.log(profilePicture);
  // ✅ Validate file
  if (!(profilePicture instanceof File) || profilePicture.size === 0) {
    return {
      success: false,
      message: 'فایل انتخاب‌شده معتبر نیست یا خالی است',
    };
  } else if (profilePicture.size >= 4000) {
    return {
      success: false,
      message: 'فایل انتخابی بزرگتر از 4 مگابایت است',
    };
  }

  // ✅ Upload to Cloudinary
  let imageUrl: string;
  try {
    imageUrl = await uploadImage(profilePicture);
  } catch (error) {
    console.error('❌ Cloudinary Upload Error:', error);
    return {
      success: false,
      message: 'خطا در آپلود تصویر به Cloudinary',
    };
  }

  // ✅ Save new profile picture to DB
  try {
    await api.put(`/users/${userId}`, {
      profilePicture: imageUrl,
    });

    revalidatePath('/'); // or the relevant path
    return {
      success: true,
      message: 'تصویر پروفایل با موفقیت بروزرسانی شد',
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('❌ API Error:', error.response?.data);
    }
    return {
      success: false,
      message: 'خطا در ذخیره تصویر جدید',
    };
  }
}
