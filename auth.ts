import NextAuth from "next-auth"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth, unstable_update: update } = NextAuth({
  session: { strategy: 'jwt' },
  ...authConfig
})