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
    user: {
      role: string;
    }
    accessToken: string;
    refreshToken: string;
    issuedAt: Date;
    expires: Date;
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
    accessToken: string;
    refreshToken: string;
    issuedAt: Date;
    expires: Date;
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
          token.hasAccessToken = true;

          const userData = decodeJwt(user.accessToken);
          console.log('userData', userData);
          const iatISO = new Date(userData.iat! * 1000);
          const expISO = new Date(userData.exp! * 1000);
          // console.log('tokenExpired?', new Date() > expISO)

          token.user = {
            id: userData.id as string ?? '', //TODO: declare interface for userData object !!!
            name: userData.name as string ?? '',
            email: userData.email as string ?? '',
            role: userData.role as string ?? '',
            image: userData.profilePicture as string | null ?? '',
          };
          token.issuedAt = iatISO;
          token.expires = expISO;
          token.accessToken = user.accessToken;
          token.refreshToken = user.refreshToken;
        };
        return token;
    },
    session: async ({ session, token }) => {
      if (token.hasAccessToken) {
        session.user.id = token.user.id;
        session.user.name = token.user.name;
        session.user.email = token.user.email;
        session.user.role = token.user.role;
        session.user.image = token.user.image;

        session.issuedAt = token.issuedAt;
        session.expires = token.expires;
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }
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