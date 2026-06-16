import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimasi gambar Next.js
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Kompresi response HTTP
  compress: true,

  // Keamanan: sembunyikan header X-Powered-By
  poweredByHeader: false,
};

export default nextConfig;