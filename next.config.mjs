/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com',
      },
    ],
    qualities: [75, 100],
  },
  outputFileTracingRoot: process.cwd(),
}

export default withPlaiceholder(nextConfig)
