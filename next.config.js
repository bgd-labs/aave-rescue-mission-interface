/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.experiments = { topLevelAwait: true };
    return config;
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
