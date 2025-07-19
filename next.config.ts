// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;




// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: false,
//   compiler: {
//     styledComponents: true,
//   },
//   publicRuntimeConfig: {
//     // Available on both server and client
//     theme: "DEFAULT",
//   },
//   images: {
//     domains: ['cbu01.alicdn.com'],  // Add the domain here
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;






/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    theme: "DEFAULT",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cbu01.alicdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.alicdn.com',
        port: '',
        pathname: '/**',
      }
    ],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  
  // Add custom headers to handle CORS and referrer issues
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;