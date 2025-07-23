'use server';

import { auth } from '@/auth';
import { userInfoSchema } from '@/src/schemas/updateUserSchema';
import api from '@/src/services/interceptors/server';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
// import { uploadImage } from '@/src/lib/cloudinary';
type State = {
  success: boolean;
  message: string | null;
  fieldErrors?: Partial<Record<keyof typeof userInfoSchema.shape, string>>;
};
export async function updateUserAction(
  prevState: { success: boolean; message: string | null },
  formData: FormData
): Promise<State> {
  const userId = (await auth())?.user.id;
  const raw = Object.fromEntries(formData.entries());
  // const image = formData.get('image') as File;
  const parsed = userInfoSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const mappedErrors = Object.fromEntries(
      Object.entries(fieldErrors).map(([key, val]) => [key, val?.[0] ?? ''])
    );
    return {
      success: false,
      message: 'لطفاً خطاهای فرم را برطرف کنید',
      fieldErrors: mappedErrors,
    };
  }
  // let imageUrl;
  // if (image && image instanceof File && image.size > 0) {
  //   try {
  //     imageUrl = await uploadImage(image);
  //   } catch (error) {
  //     console.error('Cloudinary upload error', error);
  //     return {
  //       success: false,
  //       message: 'خطا در آپلود تصویر',
  //     };
  //   }
  // }
  const data = {
    fullName: raw.fullName as string,
    firstName: raw.firstName as string,
    lastName: raw.lastName as string,
    email: raw.email as string,
    phoneNumber: raw.phoneNumber as string,
    password: raw.password as string,
    // ...(imageUrl && { profilePicture: imageUrl }),
  };

  try {
    await api.put(`/users/${userId}`, data);
    revalidatePath('/');
    return { success: true, message: ' اطلاعات با موفقیت ذخیره شد' };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      return { success: false, message: ' خطا در ذخیره اطلاعات' };
    }
    return { success: false, message: ' خطای ناشناخته‌ای رخ داد' };
  }
}
