import dynamic from 'next/dynamic';
import AosInit from '../components/AosInit';

export const metadata = {
  alternates: {
    canonical: '/',
  },
};

// Komponen Navbar dan Hero dimuat statis karena berada di area atas (above-the-fold)
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Komponen di bawah area lipatan dimuat secara dinamis (Lazy Loading) untuk mempercepat First Load
const About = dynamic(() => import('../components/About'));
const MyJourney = dynamic(() => import('../components/MyJourney'));
const Services = dynamic(() => import('../components/Services'));
const Certificates = dynamic(() => import('../components/Certificates'));
const Projects = dynamic(() => import('../components/Projects'));
const Clients = dynamic(() => import('../components/Clients'));
const Contact = dynamic(() => import('../components/Contact'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  return (
    <>
      <AosInit />
      {/* 1. Header & Navigasi Utama */}
      <Navbar />

      {/* 2. Beranda Profil Utama */}
      <Hero />

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