import '../css/style.css';
import './globals.css';
import Script from 'next/script';
import type { ReactNode } from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import LenisProvider from '../components/LenisProvider';
import BoxiconsStyle from '../components/BoxiconsStyle';

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
  metadataBase: new URL('https://firdausikram.com'),
  keywords: [
    'Firdaus Ikram',
    'Firdaus Ikram, S.PWK',
    'Firdaus Ikram GIS',
    'Firdaus Ikram Web GIS',
    'Firdaus Ikram Drone',
    'Firdaus Ikram Surveyor',
    'Firdaus Ikram Urban Planner',
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
    'Owner Daus Visual Creative Industry',
    'Daus Visual',
    'dausvisual.site',
    'Founder FIN Bina Nusantara',
    'FIN Bina Nusantara',
    'Lembaga Sosial',
    'Gerakan Sosial',
    'Google Scholar Firdaus Ikram',
    'Jurnal Publikasi Firdaus Ikram',
    'Penelitian Firdaus Ikram',
    'Komisaris Zonasvara Grup',
    'Idda',
    'Konsultan Lingkungan',
    'Konsultan Perencanaan',
    'Surveyor Lingkungan',
    'Surveyor Topografi',
    'Surveyor Geologi',
    'Surveyor Hidrologi',
    'Surveyor Hidro-Oseanografi',
    'Surveyor Geoteknik',
    'Surveyor Geologi',
    'Surveyor Hidrologi',
    'Surveyor Hidro-Oseanografi',
    'Surveyor Geoteknik',
    'Surveyor Geologi',
    'Surveyor Hidrologi',
    'Surveyor Hidro-Oseanografi',
    'Surveyor Geoteknik',
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
    url: 'https://firdausikram.com',
    siteName: 'FIRDAUS IKRAM, S.PWK',
    images: [
      {
        url: 'https://firdausikram.com/logo/thumbnail-new.jpg',
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
    images: ['https://firdausikram.com/logo/thumbnail-new.jpg'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        {/* Boxicons CSS — loaded asynchronously to avoid render-blocking */}
        <BoxiconsStyle />
      </head>
      <body>
        <LenisProvider>
          <LanguageProvider>
            <div style={{ overflowX: 'hidden', width: '100%', position: 'relative', minHeight: '100vh' }}>
            {children}
          </div>

          {/* JSON-LD Schema Markup untuk SEO */}
          <Script
            id="json-ld-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Firdaus Ikram",
                "jobTitle": "GIS Specialist, Urban Planner, Direktur PT. Sinergi Citra Karya, Owner Daus Visual, Founder FIN Bina Nusantara",
                "url": "https://firdausikram.com",
                "image": "https://firdausikram.com/logo/logo-fi.webp",
                "sameAs": [
                  "https://www.linkedin.com/in/firdaus-ikram-86405b2a6",
                  "https://www.instagram.com/firdausikram_17",
                  "https://dausvisual.site",
                  "https://scholar.google.co.id/citations?user=Kxneo9AAAAAJ&hl=id",
                  "https://jurnalruang.arsitektur.fatek.untad.ac.id/index.php/JURNALRUANG/article/view/335",
                  "https://journal.unismuh.ac.id/index.php/linears/article/view/19473"
                ],
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "Universitas Muhammadiyah Bulukumba"
                },
                "worksFor": [
                  {
                    "@type": "Organization",
                    "name": "PT. Sinergi Citra Karya"
                  },
                  {
                    "@type": "Organization",
                    "name": "Daus Visual Creative Industry",
                    "url": "https://dausvisual.site"
                  },
                  {
                    "@type": "Organization",
                    "name": "FIN Bina Nusantara"
                  }
                ]
              })
            }}
          />

          {/* Vercel Analytics */}
          <Analytics />


          </LanguageProvider>
        </LenisProvider>
      </body>
    </html>
  );
}