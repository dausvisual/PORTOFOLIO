'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Mengimpor Komponen Utama
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import MyJourney from '../components/MyJourney';
import Services from '../components/Services';
import Certificates from '../components/Certificates';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // apakah animasi harus dijalankan hanya sekali?
      offset: 50,  // offset (dalam px) dari trigger point awal
    });
  }, []);

  // Download CV secara langsung
  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/cv/CV FIRDAUS IKRAM.pdf';
    link.download = 'CV_Firdaus_Ikram.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* 1. Header & Navigasi Utama */}
      <Navbar onOpenCv={handleDownloadCv} />

      {/* 2. Beranda Profil Utama */}
      <Hero onOpenCv={handleDownloadCv} />

      {/* 3. Tentang Saya & Kartu Melayang */}
      <About />

      {/* 4. Alur Riwayat Pendidikan */}
      <MyJourney />

      {/* 5. Grid Kemampuan Teknis Spasial */}
      <Services />

      {/* 6. Galeri Pelatihan & Sertifikasi */}
      <Certificates />

      {/* 7. Portofolio Pengalaman Proyek */}
      <Projects />

      {/* 8. Jajaran Partner / Riwayat Kolaborasi Klien */}
      <Clients />

      {/* 9. Area Formulir Hubungi Saya */}
      <Contact />

      {/* 10. Kaki Halaman & Hak Cipta */}
      <Footer />

      {/* Tombol melayang kembali ke atas — menggunakan Boxicons (Font Awesome dihapus) */}
      <a href="#home" aria-label="Kembali ke atas" className="bx bx-chevron-up" id="scroll-top"></a>
    </>
  );
}