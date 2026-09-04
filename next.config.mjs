/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: '/cv', destination: '/cv/CV_EN.pdf', permanent: true },
      { source: '/cv/pt', destination: '/cv/CV_PT.pdf', permanent: true },
      { source: '/projects/:path*', destination: '/work', permanent: true },
      { source: '/blog/:path*', destination: '/#notes', permanent: true },
      { source: '/en/:path*', destination: '/', permanent: true },
      { source: '/pt/:path*', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
