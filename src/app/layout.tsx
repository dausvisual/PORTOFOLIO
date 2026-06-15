import '../css/style.css';
import './globals.css';
import Script from 'next/script';
import type { ReactNode } from 'react';

// 1. Impor font langsung dari Next.js
import { Poppins } from 'next/font/google';

// 2. Impor Vercel Analytics (Gunakan /react sesuai standar Next.js App Router)
import { Analytics } from '@vercel/analytics/react';

// 3. Konfigurasi ketebalan font yang dipakai
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'], // Sesuaikan dengan font-weight di CSS
  display: 'swap', // Teks langsung tampil tanpa menunggu font selesai download
});

export const metadata = {
  title: 'Firdaus Ikram, S.PWK',
  description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, & Surveyor.',
  icons: {
    icon: "/logo/logo fi.png",
    shortcut: "/logo/logo fi.png",
    apple: "/logo/logo fi.png",
  },
  // === PENGATURAN THUMBNAIL OPEN GRAPH (WHATSAPP, LINKEDIN, FB) ===
  openGraph: {
    title: 'Firdaus Ikram, S.PWK',
    description: 'Portofolio Firdaus Ikram - GIS Specialist, Urban Planner, & Surveyor.',
    url: 'https://firdausikram.xyz', // Ganti dengan tautan/domain asli Vercel kamu
    siteName: 'Firdaus Ikram, S.PWK',
    images: [
      {
        url: 'https://firdausikram.xyz/logo/thumbnail.webp', // Alamat gambar thumbnail kamu di folder public
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
    images: ['https://firdausikram.xyz/logo/thumbnail.webp'], // Sama, arahkan ke gambar thumbnail
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body>
        {children}
        
        {/* WAJIB: Render komponen Analytics agar pelacakan Vercel aktif */}
        <Analytics />
        
        {/* Script Animasi & Efek UI */}
        <Script src="/js/scrollreveal.js" strategy="lazyOnload" />
        <Script src="/js/particles.min.js" strategy="lazyOnload" />
        <Script src="/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}