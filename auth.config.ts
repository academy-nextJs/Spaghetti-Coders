import { CredentialsSignin, type NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

declare module "next-auth" {
  interface User {
    accessToken: string;
    refreshToken: string;
  }
  interface Session {
    accessToken: string;
    refreshToken: string;
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

class InvalidLoginError extends CredentialsSignin {
  message = "ایمیل یا کلمه عبور شما صحیح نیست!"
}

export default {
  providers: [
    Google,
    GitHub,
    Credentials({
      authorize: async (credentials) => {
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
        if(!res.ok || !user) throw new InvalidLoginError()
        
        return user;
      },
    })
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if(user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session
    },
  }
} satisfies NextAuthConfig