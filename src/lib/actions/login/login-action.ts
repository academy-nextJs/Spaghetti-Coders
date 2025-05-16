'use server'

import { signIn } from "@/auth";
import { z } from "zod";

interface ActionStateType {
  message: {
    email?: string[] | undefined
  };
  payload: FormData
}

const schema = z.object({
  email: z.string().email({ message: 'ایمیل نامعتبر! ایمیل خود را چک کنید و دوباره تلاش کنید.' })
})

export async function credentialLoginAct(_actionState: ActionStateType, formData: FormData): Promise<ActionStateType> {
  const validatedFields = schema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) return {
    message: validatedFields.error.flatten().fieldErrors,
    payload: formData,
  }

  const { email, password } = {
    email: validatedFields.data.email,
    password: formData.get('password')
  }

  return await signIn('credentials', {
    email, 
    password, 
    redirectTo: "/" 
  }) 
}

export async function socialLoginAct(_actionState: undefined, formData: FormData) {
  const provider = formData.get('provider')

  if(provider === "google" || provider === "github") {
    return await signIn(provider, { redirectTo: '/' })
  }
}