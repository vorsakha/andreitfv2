/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: false,
      },
      {
        source: '/projects/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/en',
        destination: '/',
        permanent: false,
      },
      {
        source: '/en/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/pt',
        destination: '/',
        permanent: false,
      },
      {
        source: '/pt/:path*',
        destination: '/',
        permanent: false,
      },
    ];
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
    qualities: [75, 85, 100],
  },
  outputFileTracingRoot: process.cwd(),
};

export default withPlaiceholder(nextConfig);
