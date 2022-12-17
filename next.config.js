/** @type {import('next').NextConfig} */
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

module.exports = nextConfig
