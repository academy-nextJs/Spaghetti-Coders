import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    accessToken: string;
    refreshToken: string;
    issuedAt: Date;
    user: {
      role: string;
    } & DefaultSession['user']
  }

  interface decodedJwt {
  id: string;
  email: string;
  role: string;
  name: string;
  profilePicture: string | null;
  iat: number;
  exp: number;
}
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
    issuedAt: Date;
    expires: number;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      image: string;
    }
  }
}