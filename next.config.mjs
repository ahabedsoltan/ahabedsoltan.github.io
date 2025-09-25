/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ✨ static export
  images: { unoptimized: true }, // needed for GitHub Pages
  trailingSlash: true,        // avoids missing asset paths on GH Pages
  basePath: '',               // empty for user.github.io repo
};
export default nextConfig;
