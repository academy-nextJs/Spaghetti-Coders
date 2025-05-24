import { decodeJwt } from "jose";
import { CredentialsSignin, type NextAuthConfig } from "next-auth"
// import { JWT } from "next-auth/jwt"
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import 'next-auth/jwt'

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

declare module 'next-auth/jwt' {
  interface JWT {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      image: string;
    }
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
        if(!res.ok || !user) {
          throw new InvalidLoginError()
          // return null
        }          
        return user;
      },
    })
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
        if(user?.accessToken) {
          const userData = decodeJwt(user.accessToken)
          console.log('userData', userData)
          
          token.user.id = userData.id as string
          token.user.name = userData.name as string
          token.user.email = userData.email as string
          token.user.role = userData.role as string
          token.user.image = userData.profilePicture as string | null ?? ''
          
          token.accessToken = user.accessToken;
          token.refreshToken = user.refreshToken;
        }

        return token
    },
    session: async ({ session, token }) => {
      if (token.user) {
        session.user.id = token.user.id;
        session.user.name = token.userName;
        session.user.email = token.userEmail;
        session.user.role = token.userRole;
        session.user.image = token.userImage
      }
      
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session
    },
    // authorized: async ({ auth, request }) => {
    //   const isAuthorized = !!auth?.accessToken;
    //   const IsPrivateRoute = request.nextUrl.pathname.startsWith('/dashboard');

    //   if(!isAuthorized && IsPrivateRoute) {
    //     const url = new URL(request.nextUrl)
    //     url.pathname = '/login'
    //     return Response.redirect(url)
    //   }
    //   return true
    // },
  }
} satisfies NextAuthConfig