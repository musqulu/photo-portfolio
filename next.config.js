/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Using local images from /public/images
    // Disable optimization temporarily for large files
    unoptimized: true,
  },
}

module.exports = nextConfig

