'use server'

import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { z } from "zod";

interface ActionStateType {
  message: {
    email?: string[] | undefined
  };
  payload: FormData
}

// const BASE_URL = process.env.BASE_URL

const schema = z.object({
  email: z.string().email({ message: 'ایمیل نامعتبر! ایمیل خود را چک کنید و دوباره تلاش کنید.' })
})

export async function loginAct(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  // const cookieStore = await cookies()

  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) return {
    message: validatedFields.error.flatten().fieldErrors,
    payload: formData,
  }

  // const { email, password } = {
  //   email: validatedFields.data.email,
  //   password: formData.get('password')
  // }

  // const response = 
  await signIn('credentials', formData)
  
  // console.log(response)
  // if(!response?.ok) throw new Error('Res not OK')

  // const res = await fetch(
  //   `${process.env.NEXTAUTH_URL}/api/auth/signin/credentials`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       cookie: cookieStore.toString(),
  //     },
  //     body: new URLSearchParams({
  //       // csrfToken,
  //       callbackUrl: '/',
  //       email: String(email),
  //       password: String(password),
  //     }),
  //     credentials: 'include',
  //   }
  // );

  // console.log(res.json())
  
  redirect('/')
}