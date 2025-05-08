'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

interface ActionStateType {
  message: {
    phoneNumber?: string[] | undefined
    password?: string[] | undefined
    passwordRepeat?: string[] | undefined
  };
  payload: FormData
}

const BASE_URL = process.env.BASE_URL

const schema = z
  .object({
    phoneNumber: z.string().regex(/(\+98|0|98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}/, { message: 'شماره همراه وارد شده معتبر نیست.' }),
    password: z.string().min(6, "کلمه عبور باید حداقل 6 رقم باشد. ").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, { message: 'کلمه عبور باید تشکیل شده از حروف بزرگ، حروف کوچک و اعداد باشد.' }),
    passwordRepeat: z.string(),
  })
  .refine(data => data.password === data.passwordRepeat, { message: 'کلمه عبور ها همخوانی ندارند.', path: ["passwordRepeat"] })

export async function registerSetup(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  const cookieStore = await cookies()
  
  const validatedFields = schema.safeParse({
    phoneNumber: formData.get('phoneNumber'),
    password: formData.get('password'),
    passwordRepeat: formData.get('passwordRepeat'),
  })

  if(!validatedFields.success) return {
    message: validatedFields.error.flatten().fieldErrors,
    payload: formData
  }

  const { phoneNumber, password } = {
    phoneNumber: validatedFields.data.phoneNumber,
    password: validatedFields.data.password,
  }

  const userId = cookieStore.get('userId')?.value
  if(!userId) throw new Error('مهلت ثبت نام شما به اتمام رسیده است. لطفا دوباره ایمیل خود را وارد کنید.')

  const result = await fetch(`${BASE_URL}/auth/complete-registration`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, password, phoneNumber }),
  })

  const response = await result.json()
  console.log(response)

  if(!result.ok) throw new Error(`خطا در تکمیل ثبت نام: ${response.message}`)

  cookieStore.delete('userId')

  redirect('/login')
}