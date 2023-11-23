/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    DOMAIN_ORIGIN: process.env.DOMAIN_ORIGIN,
  },
};

module.exports = nextConfig;
