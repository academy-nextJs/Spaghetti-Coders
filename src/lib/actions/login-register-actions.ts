'use server'

import { z } from "zod"

interface ActionStateType {
  message: {
    email?: string[] | undefined
  };
  payload: FormData
}

const schema = z.object({
  email: z.string().email({ message: 'ایمیل نامعتبر! ایمیل خود را چک کنید و دوباره تلاش کنید.'})
})

export async function registerEmail(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if(!validatedFields.success) return { 
    message: validatedFields.error.flatten().fieldErrors,
    payload: formData,
  }

  return {
    message: {},
    payload: formData,
  };
}