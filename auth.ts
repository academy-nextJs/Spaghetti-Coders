import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const BASE_URL = process.env.BASE_URL

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null
  
          const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            })
          });
  
          user = await res.json();
          console.log('user', user)
          if(user.status !== 200 || !user) throw new Error('کاربری با مشخصات وارد شده وجود ندارد!')
          
          console.log('credentials', credentials)
          return user;
        } catch {
          return null
        }
      },
    })
  ],
})