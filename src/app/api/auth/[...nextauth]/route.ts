import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    newUser: '/register/setup',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phoneNumber: { label: "PhoneNumber", type: "tel" },
        password: { label: "Password", type: "password" },
        userId: 
      },
      async authorize(credentials) {
        const res = await fetch("https://your-api.com/auth/login", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phoneNumber: credentials.phoneNumber,
            password: credentials.password,
          })
        });

        const user = await res.json();

        if (user.status === 200 && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token; // Assuming your API returns a token
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST }