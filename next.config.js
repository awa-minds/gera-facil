/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/gera-facil/',
  basePath: '/gera-facil',
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
