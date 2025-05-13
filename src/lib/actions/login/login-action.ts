'use server'

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

  // try {
    return await signIn('credentials', {
      email, 
      password, 
      redirectTo: "/" 
    })
    // redirect('/')
    
    // return {
    //   message: {},
    //   payload: new FormData,
    // }
    // console.log('actionResult')
  // } catch {
  //   throw new Error("Annoying server error this is bullshit")
  // }  

}