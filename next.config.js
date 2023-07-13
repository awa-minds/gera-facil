/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const isProduction = environment === 'production'
const basePath = isProduction ? '' : ''

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
module.exports = {
  env: {
    GA_TRACKING_ID: 'G-4M7FX549LS', // Substitua pelo seu código de rastreamento
  },
};

