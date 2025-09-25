/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ✨ static export
  images: { unoptimized: true }, // needed for GitHub Pages
  trailingSlash: true,        // avoids missing asset paths on GH Pages
};
export default nextConfig;
