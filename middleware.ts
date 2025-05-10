// export { auth as middleware } from "@/auth"

import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextRequest } from "next/server"

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  console.log('MiddlewareReq', req)
})