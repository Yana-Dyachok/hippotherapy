import type { NextConfig } from 'next';

export const URL_EMAIL = process.env.NEXT_PUBLIC_URL_EMAIL as string;
export const PAYPAL_CLIENT_ID = process.env
  .NEXT_PUBLIC_PAYPAL_CLIENT_ID as string;

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
