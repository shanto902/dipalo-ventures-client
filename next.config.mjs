/** @type {import('next').NextConfig} */


const nextConfig = {
    async redirects() {
    return [
      // Basic redirect
      {
        source: '/funds',
        destination: '/funds/fund-2',
        permanent: true,
      },
    ]
  },};

export default nextConfig;
