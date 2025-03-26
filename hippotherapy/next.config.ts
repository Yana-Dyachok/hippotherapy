import type { NextConfig } from 'next';

export const URL_EMAIL = process.env.NEXT_PUBLIC_URL_EMAIL as string;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
};

export default nextConfig;
