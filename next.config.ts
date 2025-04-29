import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'media.istockphoto.com',
      },
      {
        hostname: 'heroui.com',
      },
    ]
  }
  /* config options here */
};

export default nextConfig;
