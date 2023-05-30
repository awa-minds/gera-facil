/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  assetPrefix: environment === 'production' ? '/gera-facil' : '',
  basePath: environment === 'production' ? '/gera-facil' : '',
  images: {
    unoptimized: environment === 'production',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
    ],
  },
  output: environment === 'production' ? 'export' : 'standalone',
}

module.exports = nextConfig
