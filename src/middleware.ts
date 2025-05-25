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

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('Authorization', `Bearer ${request.auth?.accessToken}`)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    }
  })
  
  // console.log({ response })
  return response
})