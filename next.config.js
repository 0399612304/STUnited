/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    unoptimized : true
  },
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
