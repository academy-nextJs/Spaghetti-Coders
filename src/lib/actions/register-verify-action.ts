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

const schema = z.object({
  verifyCode: z.string().regex(/^\d{6}$/, { message: "کد تایید باید 6 رقمی باشد." })
})

const BASE_URL = process.env.BASE_URL

export async function registerVerifyCode(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  const validateFields = schema.safeParse({
    verifyCode: formData.get('verifyCode'),
  })

  if (!validateFields.success) return {
    message: validateFields.error.flatten().fieldErrors,
    payload: formData,
  }

  const verifyCode = validateFields.data.verifyCode;

  const cookieStore = await cookies()

  const tempUserId = cookieStore.get('tempUserId')?.value
  if (!tempUserId) throw new Error('مهلت ثبت نام شما به اتمام رسیده است. لطفا دوباره ایمیل خود را وارد کنید.')

  const result = await fetch(`${BASE_URL}/auth/verify-email`, {
    method: 'POST',
    body: JSON.stringify({ tempUserId, verificationCode: verifyCode }),
    headers: { 'Content-Type': 'application/json' },
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