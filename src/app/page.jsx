'use client';
import { useState } from 'react';

// Mengimpor Komponen Utama dengan kepastian direktori relatif src
import Navbar from '../componen/Navbar';
import Hero from '../componen/Hero';
import About from '../componen/About';
import MyJourney from '../componen/MyJourney';
import Services from '../componen/Services';
import Certificates from '../componen/Certificates';
import Skills from '../componen/Skills';
import Projects from '../componen/Projects';
import Clients from '../componen/Clients';
import Contact from '../componen/Contact';
import Footer from '../componen/Footer';

export default function Home() {
  // Kontrol Jembatan Interaksi Klik Popup CV
  const [isCvPopupOpen, setIsCvPopupOpen] = useState(false);
  const link = document.createElement('a');
  link.href = '/cv/CV_Firdaus_Ikram.pdf';
  link.download = 'CV_Firdaus_Ikram.pdf';
  link.click();
  return (
    <>
      {/* 1. Header & Navigasi Utama */}
      <Navbar />

      {/* 2. Beranda Profil Utama */}
      <Hero onOpenCv={() => setIsCvPopupOpen(true)} />

      {/* 4. Tentang Saya & Kartu Melayang */}
      <About />

      {/* 5. Alur Riwayat Pendidikan */}
      <MyJourney />

      {/* 6. Grid Kemampuan Teknis Spasial */}
      <Services />

      {/* 7. Galeri Pelatihan & Sertifikasi */}
      <Certificates />

      {/* 8. Portofolio Pengalaman Proyek */}
      <Projects />

      {/* 9. Jajaran Partner / Riwayat Kolaborasi Klien */}
      <Clients />

      {/* 10. Area Formulir Hubungi Saya */}
      <Contact />

      {/* 11. Kaki Halaman & Hak Cipta */}
      <Footer />

      {/* Tombol melayang kembali ke atas */}
      <a href="#home" aria-label="ScrollTop" className="fas fa-angle-up" id="scroll-top"></a>

    
    </>
  );
}