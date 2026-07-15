import type { NextConfig } from "next";

// Konfigurasi Content Security Policy (CSP) ketat
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' unpkg.com va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' unpkg.com fonts.googleapis.com;
    img-src 'self' blob: data: unpkg.com server.arcgisonline.com cdnjs.cloudflare.com;
    font-src 'self' fonts.gstatic.com unpkg.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
`;

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
  
  // Inject Advanced Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
          /* 
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Diubah dari DENY agar Ekstensi Mobile View bisa bekerja
          }, 
          */
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Mencegah MIME-type sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Menjaga privasi referer
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Memaksa HTTPS (HSTS)
          },
        ],
      },
    ];
  },
};

export default nextConfig;