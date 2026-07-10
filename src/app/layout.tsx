import '../css/style.css';
import './globals.css';
import Script from 'next/script';
import type { ReactNode } from 'react';

// 1. Impor font langsung dari Next.js (optimal, no render-blocking)
import { Poppins } from 'next/font/google';

// 2. Impor Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

// 3. Konfigurasi ketebalan font yang dipakai
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Firdaus Ikram, S.PWK | GIS Specialist',
  description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, Web GIS Developer, & Drone Mapping profesional.',
  applicationName: 'FIRDAUS IKRAM, S.PWK',
  metadataBase: new URL('https://firdausikram.xyz'),
  keywords: [
    'Firdaus Ikram',
    'GIS Specialist',
    'Drone Mapping',
    'Konsultan GIS',
    'Urban Planner',
    'Pemetaan Drone',
    'Web GIS Developer',
    'Analisis Spasial',
    'Surveyor',
    'PT. Sinergi Citra Karya',
    'Direktur PT. Sinergi Citra Karya',
    'Founder Dausvisual',
    'Dausvisual',
    'dausvisual.site'
  ],
  icons: {
    icon: "/logo/logo-fi.webp",
    shortcut: "/logo/logo-fi.webp",
    apple: "/logo/logo-fi.webp",
  },
  // === PENGATURAN THUMBNAIL OPEN GRAPH (WHATSAPP, LINKEDIN, FB) ===
  openGraph: {
    title: 'Firdaus Ikram, S.PWK',
    description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, & Surveyor.',
    url: 'https://firdausikram.xyz',
    siteName: 'FIRDAUS IKRAM, S.PWK',
    images: [
      {
        url: 'https://firdausikram.xyz/logo/thumbnail-new.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview Portofolio Firdaus Ikram',
      },
    ],
    locale: 'id_ID',
    type: 'profile',
  },

  // === PENGATURAN THUMBNAIL KHUSUS TWITTER/X ===
  twitter: {
    card: 'summary_large_image',
    title: 'Firdaus Ikram, S.PWK',
    description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, & Surveyor.',
    images: ['https://firdausikram.xyz/logo/thumbnail-new.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        {/* Boxicons CSS — preload + async apply agar tidak render-blocking */}
        <link
          rel="preload"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>
      <body>
        {children}

        {/* JSON-LD Schema Markup untuk SEO */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Firdaus Ikram",
              "jobTitle": "GIS Specialist, Urban Planner, Direktur PT. Sinergi Citra Karya, Founder Dausvisual",
              "url": "https://firdausikram.xyz",
              "image": "https://firdausikram.xyz/logo/logo-fi.webp",
              "sameAs": [
                "https://www.linkedin.com/in/firdaus-ikram-86405b2a6",
                "https://www.instagram.com/firdausikram_17",
                "https://dausvisual.site"
              ],
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Universitas Islam Negeri Alauddin Makassar"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "PT. Sinergi Citra Karya"
                },
                {
                  "@type": "Organization",
                  "name": "Dausvisual",
                  "url": "https://dausvisual.site"
                }
              ]
            })
          }}
        />

        {/* Vercel Analytics */}
        <Analytics />

        {/* Particles.js — efek partikel di Hero & Education section */}
        <Script src="/js/particles.min.js" strategy="lazyOnload" />
        <Script src="/js/particles-config.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}