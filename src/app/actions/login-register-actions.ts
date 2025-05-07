'use server'

// import { registerStore } from "@/src/store/registerStore";
import { redirect } from "next/navigation";
import { z } from "zod"

interface ActionStateType {
  message: {
    email?: string[] | undefined
  };
  payload: FormData
}

const schema = z.object({
  email: z.string().email({ message: 'ایمیل نامعتبر! ایمیل خود را چک کنید و دوباره تلاش کنید.' })
})

const BASE_URL = process.env.BASE_URL

export async function registerEmail(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) return {
    message: validatedFields.error.flatten().fieldErrors,
    payload: formData,
  }

  const email = validatedFields.data.email
  console.log(email)
  // const setUserEmail = registerStore((state) => state.setUserEmail)
  // setUserEmail(email)

  const res = await fetch(`${BASE_URL}/auth/start-registration`, {
    body: JSON.stringify({ email }),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  const response = await res.json()
  console.log(response)

  if (!res.ok) throw new Error(`خطا در ارسال کد تایید: ${response.message}`)

  redirect('/register/verification')

  // return {
  //   message: {},
  //   payload: formData,
  // };
}