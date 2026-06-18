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
  title: 'Firdaus Ikram, S.PWK',
  description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, & Surveyor.',
  applicationName: 'FIRDAUS IKRAM, S.PWK',
  keywords: [
    'Firdaus Ikram',
    'Firdaus Ikram S.PWK',
    'Portofolio Firdaus Ikram',
    'GIS Specialist',
    'Urban Planner',
    'Surveyor',
    'Perencanaan Wilayah dan Kota',
    'Analisis Spasial',
    'idda',
    'daus',
    'PT. Sinergi Citra Karya',
    'Sinergi Citra Karya',
    'FIN Bina Nusantara',
    'daus visual',
    'Pemetaan'
  ],
  icons: {
    icon: "/logo/logo fi.png",
    shortcut: "/logo/logo fi.png",
    apple: "/logo/logo fi.png",
  },
  // === PENGATURAN THUMBNAIL OPEN GRAPH (WHATSAPP, LINKEDIN, FB) ===
  openGraph: {
    title: 'Firdaus Ikram, S.PWK',
    description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, & Surveyor.',
    url: 'https://firdausikram.xyz',
    siteName: 'FIRDAUS IKRAM, S.PWK',
    images: [
      {
        url: 'https://firdausikram.xyz/logo/thumbnail2.png',
        width: 1200,
        height: 630,
        alt: 'Preview Portofolio Firdaus Ikram',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  // === PENGATURAN THUMBNAIL KHUSUS TWITTER/X ===
  twitter: {
    card: 'summary_large_image',
    title: 'Firdaus Ikram, S.PWK',
    description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, & Surveyor.',
    images: ['https://firdausikram.xyz/logo/thumbnail2.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={poppins.className}>
      <head>
        {/* Boxicons CSS — dimuat langsung di head untuk menghindari FOUC */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </head>
      <body>
        {children}

        {/* Vercel Analytics */}
        <Analytics />

        {/* Particles.js — efek partikel di Hero & Education section */}
        <Script src="/js/particles.min.js" strategy="lazyOnload" />
        <Script src="/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}