// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cbu01.alicdn.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//     unoptimized: true,
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  // Modern Next.js image configuration
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
        hostname: 'cbu01.alicdn.com',
        port: '',
        pathname: '/img/**',
      }
    ],
    // Disable optimization for external images to avoid issues
    unoptimized: false,
    // Add formats for better performance
    formats: ['image/webp', 'image/avif'],
    // Set reasonable sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow dangerous SVG (if needed)
    dangerouslyAllowSVG: false,
    // Content security policy for SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Additional optimizations
  compress: true,
  
  // Experimental features (optional)
  experimental: {
    // Enable if you want to use app directory
    // appDir: true,
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;