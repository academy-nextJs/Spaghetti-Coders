import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
      {
        hostname:'avatars.githubusercontent.com'
      }
    ],
  },
};

export default nextConfig;
