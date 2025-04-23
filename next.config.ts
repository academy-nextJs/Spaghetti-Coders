import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.API_URL,
  },
  /* config options here */
};

export default nextConfig;
