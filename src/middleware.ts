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
  
  // //this whole IF block must be diagnosed, as using the updateAccessToken action here will run the console.logs inside it ( multiple times rapidly ), but wont update the actuall session!!! TODO: fix maybe
  // if (request.auth) { 
  //   const expireDate = new Date(request.auth.expires)
  //   const currentDate = new Date()
  //   const isTokenValid = currentDate < expireDate
  //   console.log('currentDate' ,currentDate)
  //   console.log('isTokenValid', isTokenValid)
    
  //   if(!isTokenValid) {
  //     updateAccessToken()
  //   }

  // }

  // const requestHeaders = new Headers(request.headers)
  // requestHeaders.set('Authorization', `Bearer ${request.auth?.accessToken}`)

  // const response = NextResponse.next({
  //   request: {
  //     headers: requestHeaders,
  //   }
  // })
  
  // console.log({ response })
  // return NextResponse.next()
})