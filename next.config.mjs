/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'admin.dipaloventures.com',
        protocol: 'https',
      },
      {
        hostname: 'cdn-images-1.medium.com',
        protocol: 'https',
      },
      {
        hostname: 'i.ytimg.com',
        protocol: 'https',
      },
      {
        hostname: '*.cdninstagram.com',
        protocol: 'https',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/funds',
        destination: '/funds/fund-2',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
