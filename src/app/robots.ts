import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // GANTI MENGGUNAKAN DOMAIN ASLI KAMU
    sitemap: 'https://firdausikram.xyz/sitemap.xml',
  };
}