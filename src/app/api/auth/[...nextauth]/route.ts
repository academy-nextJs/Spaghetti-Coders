// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const BASE_URL = process.env.BASE_URL

// const handler = NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: '/login',
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         const res = await fetch(`${BASE_URL}/auth/login`, {
//           method: 'POST',
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             email: credentials?.email,
//             password: credentials?.password,
//           })
//         });

//         const user = await res.json();
//         console.log('user', user)
//         if (user.status === 200 && user) {
//           return user;
//         } else {
//           console.log('credentials', credentials)
//           return null;
//         }
//       },
//     }),
//   ],
//   // callbacks: {
//   //   async jwt({ token, user }) {
//   //     if (user) {
//   //       token.accessToken = user.token; // Assuming your API returns a token
//   //     }
//   //     return token;
//   //   },
//   //   async session({ session, token }) {
//   //     session.accessToken = token.accessToken;
//   //     return session;
//   //   },
//   // },
// });

// export { handler as GET, handler as POST }

import { handlers } from "@/auth"
export const { GET, POST } = handlers