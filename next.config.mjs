/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'admin.dipaloventures.com',
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
