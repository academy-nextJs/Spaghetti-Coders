import { decodeJwt } from "jose";
import { CredentialsSignin, DefaultSession, type NextAuthConfig } from "next-auth"
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
    issuedAt: Date;
    expires: Date;
    user: {
      role: string;
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    issuedAt: Date;
    expires: Date;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      image: string;
    }
  }
}

interface decodedJwt {
  id: string;
  email: string;
  role: string;
  name: string;
  profilePicture: string | null;
  iat: number;
  exp: number;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

class InvalidLoginError extends CredentialsSignin {
  message = "ایمیل یا کلمه عبور شما صحیح نیست!"
}

export default {
  debug: true,
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
    jwt: async ({ user, token, trigger, session }) => {  //TODO: can we avoid the session callbakc and directly add values to session instead of passing it to token and then adding it to session through session callback???
        if(user?.accessToken) {
          token.hasAccessToken = true;

          const userData = decodeJwt(user.accessToken) as decodedJwt;
          // console.log('userData', userData);+
          const iatISO = new Date(userData.iat! * 1000);
          const expISO = new Date(userData.exp! * 1000);
          // console.log('tokenExpired?', new Date() < expISO)

          token.user = {
            id: userData.id ?? '',
            name: userData.name ?? '',
            email: userData.email ?? '',
            role: userData.role ?? '',
            image: userData.profilePicture ?? '',
          };
          token.issuedAt = iatISO;
          token.expires = expISO;
          token.accessToken = user.accessToken;
          token.refreshToken = user.refreshToken;
        };

        if(trigger === 'update' && session) {
          token.user = {
            ...token.user,
            role: session.user.role as string
          }
          console.log('token.user.role', token.user.role)
          return token;
        }
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
  }
} satisfies NextAuthConfig