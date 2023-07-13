/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const isProduction = environment === 'production'
const basePath = isProduction ? '' : ''

const nextConfig = {
  assetPrefix: basePath ? `${basePath}/` : '',
  basePath: basePath,
  env: {
    basePath: basePath,
    GA_TRACKING_ID: 'G-4M7FX549LS',
  },
  images: {
    unoptimized: isProduction,
  },
  output: isProduction ? 'export' : 'standalone',
  trailingSlash: true,
}

module.exports = nextConfig