/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cappic-website',
  assetPrefix: '/cappic-website/',
}

module.exports = nextConfig