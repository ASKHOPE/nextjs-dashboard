import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/", // Change this to the page you want to redirect
        destination: "/HCH-Home", // Change this to the target page
        permanent: true, // 308 redirect (permanent)
      },
    ];
  }, env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
