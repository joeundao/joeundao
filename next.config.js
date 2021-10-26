/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: ["https://cdn.skypack.dev"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
