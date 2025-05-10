// export { auth as middleware } from "@/auth"



// import { NextRequest, NextResponse } from "next/server";
// import { auth } from "@/auth";
// import { AuthError } from "next-auth";

// // Create your own wrapper around `auth`
// export async function middleware(req: NextRequest) {
//   // 1) Log the incoming request
//   console.log('request', req);

//   // 2) Call the actual auth middleware
//   const response = await auth(req);

//   // 3) (Optionally) log something on the way out
//   console.log('auth Response', response);

//   // 4) Return the response from auth (or modify it if you like)
//   return response as NextResponse;
// }


import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextRequest } from "next/server"

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  console.log('MiddlewareReq', req)
})