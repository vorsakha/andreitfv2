/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

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

export default withPlaiceholder(nextConfig)
