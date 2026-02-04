/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use Terser instead of the native SWC minifier to avoid native binary issues on Windows.
  swcMinify: false,
};

module.exports = nextConfig;