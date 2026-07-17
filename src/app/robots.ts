import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      {
        // Secara eksplisit mengizinkan AI crawlers
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Googlebot', 'Googlebot-Image', 'Bingbot', 'Slurp', 'DuckDuckBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://firdausikram.com/sitemap.xml',
  }
}
