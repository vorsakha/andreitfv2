/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require("@plaiceholder/next");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
   compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net', 'i.scdn.co'],
  },
}

module.exports = withPlaiceholder(nextConfig)
