'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod"

interface ActionStateType {
  message: {
    email?: string[] | undefined
  };
  payload: FormData
}

const BASE_URL = process.env.BASE_URL

const schema = z.object({
  email: z.string().email({ message: 'ایمیل نامعتبر! ایمیل خود را چک کنید و دوباره تلاش کنید.' })
})

export async function registerEmail(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  const cookieStore = await cookies()
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) return {
    message: validatedFields.error.flatten().fieldErrors,
    payload: formData,
  }

  const email = validatedFields.data.email
  console.log(email)

  const result = await fetch(`${BASE_URL}/auth/start-registration`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })
  
  const response = await result.json()
  console.log(response)
  
  if (!result.ok) throw new Error(`خطا در ارسال کد تایید: ${response.message}`);

  cookieStore.set({
    name: 'tempUserId',
    value: response.tempUserId,
    path: '/register/verify',
    httpOnly: true,
    maxAge: 60 * 5,
  });
  
  cookieStore.set({
    name: 'userEmail',
    value: email,
    path: '/register/verify',
    httpOnly: true,
    maxAge: 60 * 5,
  });

  redirect('/register/verify')
}