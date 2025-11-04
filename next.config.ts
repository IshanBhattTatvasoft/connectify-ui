import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_HOST || '',
        port: process.env.NEXT_PUBLIC_PORT || '',
        pathname: '/uploads/**',
      },
    ],
  },
  turbopack: {},
};

export default nextConfig;
