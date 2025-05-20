import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { serverSourceMaps: false },
  productionBrowserSourceMaps: false,
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
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
