/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: '/sec-app',
        destination: '/microfront',
      },
    ]
  }
};

module.exports = nextConfig;
