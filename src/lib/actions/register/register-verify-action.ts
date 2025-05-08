'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

interface ActionStateType {
  message: {
    verifyCode?: string[] | undefined
  };
  payload: FormData
}

const BASE_URL = process.env.BASE_URL

const schema = z.object({
  verifyCode: z.string().regex(/^\d{6}$/, { message: "کد تایید باید 6 رقمی باشد." })
})

export async function registerVerifyCode(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  const cookieStore = await cookies()
  const validateFields = schema.safeParse({
    verifyCode: formData.get('verifyCode'),
  })

  if (!validateFields.success) return {
    message: validateFields.error.flatten().fieldErrors,
    payload: formData,
  }

  const verifyCode = validateFields.data.verifyCode;

  const tempUserId = cookieStore.get('tempUserId')?.value
  if (!tempUserId) throw new Error('مهلت ثبت نام شما به اتمام رسیده است. لطفا دوباره ایمیل خود را وارد کنید.')

  const result = await fetch(`${BASE_URL}/auth/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tempUserId, verificationCode: verifyCode }),
  })

  const response = await result.json()
  console.log(response)

  if (!result.ok) throw new Error(`خطا در تایید کد: ${response.message}`)

  cookieStore.delete('tempUserId')
  cookieStore.delete('userEmail')

  cookieStore.set({
    name: 'userId',
    value: response.userId,
    path: '/register/setup',
    httpOnly: true,
    maxAge: 60 * 5,
  })

  redirect('/register/setup')
}