/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  rimental: {
    urlImports: ["https://cdn.skypack.dev"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
