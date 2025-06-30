import { decodeJwt } from 'jose';
import { CredentialsSignin, decodedJwt, type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import 'next-auth/jwt';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class InvalidLoginError extends CredentialsSignin {
  message = 'ایمیل یا کلمه عبور شما صحیح نیست!';
}

export default {
  // debug: true,
  providers: [
    Google,
    GitHub,
    Credentials({
      authorize: async (credentials) => {
        let user = null;

        const res = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        user = await res.json();
        // console.log('credentials', credentials);
        // console.log('user', user);
        if (!res.ok || !user) throw new InvalidLoginError();

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token, trigger, session }) => {
      if (trigger === 'signIn' && user?.accessToken) {
        token.hasAccessToken = true;

        const userData = decodeJwt(user.accessToken) as decodedJwt;
        // console.log('userData', userData);
        const iatISO = new Date(userData.iat! * 1000);
        const expISO = userData.exp! * 1000;
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
        // console.log('JWT SignIn Callback Running');
        return token;
      }

      if (trigger === 'update' && session) {
        token = {
          ...token,
          ...session,
        };
        // console.log('JWT Update Callback Running')
        return token;
      }
      if (Date.now() >= token.expires-2000) {
        try {
          const res = await axios.post(`${BASE_URL}/auth/refresh`, {
            token: token.refreshToken,
          });

          const refreshedUser = res.data;          
          token.accessToken = refreshedUser.accessToken;
          token.hasAccessToken = true;

          console.log('🔄 Token successfully refreshed');

          return token;
        } catch (err) {
          console.error('❌ Error refreshing token', err);
          // Optional: clear token so user gets logged out
          return null
        }
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
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        // console.log('session callback Running')
        return session;
      }

      // if (trigger === 'update') {
      //   session.user = {
      //     ...session.user,
      //     ...token.user
      //   }
      //   console.log('session UPDATE callback Running', session.user)
      // }

      // console.log('returned session')
      return session;
    },
  },
} satisfies NextAuthConfig;
