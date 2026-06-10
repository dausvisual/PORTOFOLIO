import '../css/style.css';
import './globals.css';
import Script from 'next/script';
import type { ReactNode } from 'react';
// 1. Impor font langsung dari Next.js
import { Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"

// 2. Konfigurasi ketebalan font yang dipakai
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'], // Sesuaikan dengan font-weight di CSS Bos Daus
});

export const metadata = {
  title: 'Firdaus Ikram - Portofolio S.PWK',
  // ... (metadata lainnya tetap sama)
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // 3. Masukkan variabel font ke dalam tag html/body
    <html lang="en" className={poppins.className}>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body>
        {children}
        
        {/* ... (Script lainnya tetap sama) ... */}
        {/* Pastikan dipanggil di paling bawah sebelum tag penutup </body> */}
<Script src="/js/particles.min.js" strategy="beforeInteractive" />
<Script src="/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}