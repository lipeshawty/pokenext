/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['raw.githubusercontent.com']
  },
  experimental: {
    largePageDataBytes: 800 * 1000,
  },
}

module.exports = nextConfig
