import type { NextConfig } from 'next';

export const URL_EMAIL = process.env.NEXT_PUBLIC_URL_EMAIL as string;
export const PAYPAL_CLIENT_ID = process.env
  .NEXT_PUBLIC_PAYPAL_CLIENT_ID as string;
export const WFP_MERCHANT_ACCOUNT = process.env
  .NEXT_PUBLIC_WFP_MERCHANT_ACCOUNT as string;
export const WFP_MERCHANT_DOMAIN = process.env
  .NEXT_PUBLIC_WFP_MERCHANT_DOMAIN as string;
export const WFP_MERCHANT_EMAIL = process.env
  .NEXT_PUBLIC_WFP_MERCHANT_EMAIL as string;
export const WFP_MERCHANT_PHONE = process.env
  .NEXT_PUBLIC_WFP_MERCHANT_PHONE as string;
export const WFP_PRODUCT_NAME = process.env
  .NEXT_PUBLIC_WFP_PRODUCT_NAME as string;

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
