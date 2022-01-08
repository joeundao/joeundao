/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    urlImports: ["https://cdn.skypack.dev"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
