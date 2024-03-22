/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const isProduction = environment === 'production'
const basePath = isProduction ? '' : ''

const nextConfig = {
  assetPrefix: basePath ? `${basePath}/` : '',
  basePath: basePath,
  env: {
    basePath: basePath,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: 'G-4M7FX549LS',
    REACT_APP_TOKEN_MAIL: '42755748-5ad6-44b8-aa11-3a57d0c2ed8e',
  },
  images: {
    unoptimized: isProduction,
    domains: ['api.qrserver.com'],
  },
  output: isProduction ? 'export' : 'standalone',
  trailingSlash: true,
}

module.exports = nextConfig
