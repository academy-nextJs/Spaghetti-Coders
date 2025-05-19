// import { NextResponse } from "next/server";
// import type { NextRequest } from 'next/server';

// export default function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   console.log('MiddlewareRequest', request.url)
//   console.log('MiddlewareRequest', request.body)

//   // if (pathname !== '/login') {
//   //   const url = request.nextUrl.clone();
//   //   url.pathname = "/login";
//   //   return NextResponse.redirect(url);
//   // }
//   // return NextResponse.next()
// }

// export const config = {
//   matcher: ['/dashboard/:path*'],
// }



// export { auth as middleware } from "@/auth"



import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((request) => {
  const isAuthorized = !!request.auth?.accessToken
  
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/landing', request.url))
  }

  if (request.nextUrl.pathname === '/register') {
    return NextResponse.redirect(new URL('/register/email', request.url))
  }
  
  if (!isAuthorized && request.nextUrl.pathname === "/dashboard") {
    const newUrl = new URL("/login", request.nextUrl.origin)
    return Response.redirect(newUrl)
  }


})