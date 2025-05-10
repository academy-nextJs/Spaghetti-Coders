import { CredentialsSignin, type NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials";

const BASE_URL = process.env.BASE_URL

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password"
}

export default { 
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // try {
          let user = null

          const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          user = await res.json();
          console.log('credentials', credentials)
          console.log('user', user)
          if(!res.ok || !user) {
            throw new InvalidLoginError()
            // return null
          }
          // if(!res.ok || !user) return null
          
          return user;
        // } catch {
        //   return null;
        // }
      },
    })
  ]
} satisfies NextAuthConfig