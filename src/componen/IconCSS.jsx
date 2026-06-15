'use client';
import { useEffect } from 'react';

export default function IconCSS() {
  useEffect(() => {
    // Memuat CSS secara asinkron setelah render awal selesai
    // sehingga benar-benar tidak memblokir LCP/FCP.
    const l1 = document.createElement('link');
    l1.rel = 'stylesheet';
    l1.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    document.head.appendChild(l1);

    const l2 = document.createElement('link');
    l2.rel = 'stylesheet';
    l2.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    document.head.appendChild(l2);
  }, []);

  return null;
}
