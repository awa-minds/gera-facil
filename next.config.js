/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const isProduction = environment === 'production'
const basePath = isProduction ? '/gera-facil' : ''

const nextConfig = {
  assetPrefix: basePath ? `${basePath}/` : '',
  basePath: basePath,
  env: {
    basePath: basePath,
  },
  images: {
    unoptimized: isProduction,
  },
  output: isProduction ? 'export' : 'standalone',
  trailingSlash: true,
}

module.exports = nextConfig
