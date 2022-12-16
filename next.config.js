/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimentalCodeSplitting: true,
  images: {
    domains: ['images.ctfassets.net', 'i.scdn.co'],
  },
}

module.exports = nextConfig
