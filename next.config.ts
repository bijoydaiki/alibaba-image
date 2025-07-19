// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cbu01.alicdn.com'], // ✅ allow Alibaba CDN
  },
};

module.exports = nextConfig;
