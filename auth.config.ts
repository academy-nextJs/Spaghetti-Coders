import { CredentialsSignin, type NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials";

const BASE_URL = process.env.BASE_URL

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid identifier or password"
}

export default { 
  providers: [
    Credentials({
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
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session
    },
    authorized: async ({ auth, request }) => {
      const isAuthorized = !!auth?.accessToken;
      const IsPrivateRoute = request.nextUrl.pathname.startsWith('/dashboard');

      if(!isAuthorized && IsPrivateRoute) {
        const url = new URL(request.nextUrl)
        url.pathname = '/login'
        return Response.redirect(url)
      }
      return true
    },
  }
} satisfies NextAuthConfig