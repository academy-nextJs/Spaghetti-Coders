// export { auth as middleware } from "@/auth"


// import NextAuth from "next-auth"
// import authConfig from "./auth.config"
// import { NextRequest } from "next/server"

// const { auth } = NextAuth(authConfig)
// export default auth(async function middleware(req: NextRequest) {
//   console.log('MiddlewareReq', req)
// })


import { auth } from "@/auth"

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    console.log(req)
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})