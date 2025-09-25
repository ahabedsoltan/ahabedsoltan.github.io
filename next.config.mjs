/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // required for static export
  images: { unoptimized: true } // avoids Next image optimizer
  // optional: trailingSlash: true
};
export default nextConfig;
