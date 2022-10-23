/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    baseURL: "https://hacker-news.firebaseio.com/v0/",
  },
};

module.exports = nextConfig;
