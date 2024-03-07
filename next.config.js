/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
