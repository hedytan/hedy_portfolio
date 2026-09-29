/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep live previews independent from production build output.
  distDir: process.env.NEXT_DEV_OUTPUT || '.next',
};
export default nextConfig;
