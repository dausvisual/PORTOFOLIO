'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Data Galeri dipusatkan
const galleryData = {
  vale: {
    title: "PT. Vale Indonesia Tbk.",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. VALE Indonesia Tbk.",
    images: ["/images/projects/vale1.webp", "/images/projects/vale2.webp", "/images/projects/vale3.webp", "/images/projects/vale4.webp", "/images/projects/vale5.webp", "/images/projects/vale6.webp", "/images/projects/vale7.webp", "/images/projects/vale8.webp", "/images/projects/vale9.webp", "/images/projects/vale10.webp", "/images/projects/vale11.webp", "/images/projects/vale12.webp"],
  },
  pam: {
    title: "PT. PAM Mineral Tbk.",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. PAM Mineral Tbk.",
    images: ["/images/projects/pam1.webp", "/images/projects/pam3.webp", "/images/projects/pam4.webp", "/images/projects/pam5.webp"],
  },
  mti: {
    title: "PT. Merdeka Tsingshan Indonesia",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, Udara dan Kebisingan, PT. Merdeka Tsingshan Indonesia",
    images: ["/images/projects/mti1.webp", "/images/projects/mti2.webp", "/images/projects/mti3.webp", "/images/projects/mti4.webp"],
  },
  msb: {
    title: "PT. Mitra Sulawesi Bersama",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, Udara dan Kebisingan, PT. Mitra Sulawesi Bersama",
    images: ["/images/projects/msb1.webp", "/images/projects/msb2.webp", "/images/projects/msb3.webp"],
  },
  imip: {
    title: "Indonesia Morowali Industrial Park",
    desc: "Ketua Tim Survei Pengambilan Sampel Udara, Indonesia Morowali Industrial Park",
    images: ["/images/projects/imip1.webp", "/images/projects/imip2.webp"],
  },
  awk: {
    title: "PT. Anindya Wiraputra Konsult",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, Udara dan Kebisingan, PT. Anindya Wiraputra Konsult",
    images: ["/images/projects/awk1.webp", "/images/projects/awk5.webp", "/images/projects/awk6.webp", "/images/projects/awk7.webp", "/images/projects/awk8.webp", "/images/projects/awk9.webp", "/images/projects/awk10.webp"],
  },
  igip: {
    title: "International Green Industrial Park",
    desc: "Ketua Tim Survei Pengambilan Sampel Udara, International Green Industrial Park",
    images: ["/images/projects/igip1.webp", "/images/projects/igip2.webp"],
  },
  ihip: {
    title: "Indonesia Huabao Industrial Park",
    desc: "Ketua Tim Survei Pengambilan Sampel Udara, Indonesia Huabao Industrial Park",
    images: ["/images/projects/ihip1.webp", "/images/projects/ihip2.webp", "/images/projects/ihip3.webp"],
  },
  adp: {
    title: "PT. Alaska Dwipa Perdana",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, Udara dan Kebisingan, PT. Alaska Dwipa Perdana",
    images: ["/images/projects/adp1.webp", "/images/projects/adp2.webp", "/images/projects/adp3.webp", "/images/projects/adp4.webp"],
  },
  fcm: {
    title: "PT. Farmel Cipta Mandiri",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, Udara dan Kebisingan, PT. Farmel Cipta Mandiri",
    images: ["/images/projects/fcm1.webp", "/images/projects/fcm2.webp", "/images/projects/fcm3.webp", "/images/projects/fcm4.webp", "/images/projects/fcm5.webp", "/images/projects/fcm6.webp", "/images/projects/fcm7.webp"],
  },
  mss: {
    title: "PT. Metal Smeltindo Selaras",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, PT. Metal Smeltindo Selaras",
    images: ["/images/projects/mss1.webp", "/images/projects/mss2.webp", "/images/projects/mss3.webp", "/images/projects/mss4.webp", "/images/projects/mss5.webp", "/images/projects/mss6.webp", "/images/projects/mss7.webp", "/images/projects/mss8.webp"],
  },
  khubsurat: {
    title: "PT. Khubsurat Meherban Ilahi",
    desc: "Ketua Tim Survei Pengambilan Sampel Air, Udara dan Kebisingan, PT. Khubsurat Meherban Ilahi",
    images: ["/images/projects/kmh1.webp", "/images/projects/kmh2.webp", "/images/projects/kmh3.webp", "/images/projects/kmh4.webp", "/images/projects/kmh5.webp", "/images/projects/kmh6.webp", "/images/projects/kmh7.webp", "/images/projects/kmh8.webp"],
  },
  benuanta: {
    title: "Benuanta Grup",
    desc: "Gabungan proyek survei pemetaan RDTR, Masterplan Jalan, dan kajian kawasan bersama Benuanta Grup.",
    images: ["/images/projects/benuanta1.webp", "/images/projects/benuanta2.webp", "/images/projects/benuanta3.webp", "/images/projects/benuanta4.webp", "/images/projects/benuanta5.webp", "/images/projects/benuanta6.webp", "/images/projects/benuanta7.webp", "/images/projects/benuanta8.webp", "/images/projects/benuanta9.webp", "/images/projects/benuanta10.webp"],
  },
  rmk: {
    title: "PT. Ruang Meja Kerja",
    desc: "Survei perencanaan kawasan pariwisata, profil desa, dan perintisan jalan di bawah PT. Ruang Meja Kerja.",
    images: ["/images/projects/rmk1.webp", "/images/projects/rmk2.webp", "/images/projects/rmk3.webp"],
  },
  pandit: {
    title: "PT. Pandit Eka Nusa Agrata",
    desc: "Survei Andalalin.",
    images: ["/images/projects/pandit1.webp"],
  },
  bira: {
    title: "Pemerintah Desa Bira",
    desc: "Tim Survei dan Pemetaan Desa.",
    images: ["/images/projects/bira1.webp"],
  },
  dispar: {
    title: "Pemetaan Pariwisata Bulukumba",
    desc: "Sistem Informasi Geografis Pariwisata.",
    images: ["/images/projects/dispar1.webp"],
  },
  bppwsulsel: {
    title: "BPPW Sulsel",
    desc: "Tim Survey Program SPAL-DS Tahap I dan II.",
    images: ["/images/projects/bppwsulsel1.webp"],
  },
  disperkimtan: {
    title: "DISPERKIMTAN Bulukumba",
    desc: "Survey Kawasan Permukiman Kumuh Jalanjang.",
    images: ["/images/projects/disperkimtan1.webp"],
  },
  wihamedia: {
    title: "Wiha Media Undangan Digital",
    desc: "Mapping dan Desain Digital.",
    images: ["/images/projects/wihamedia1.webp"],
  },
  freelance: {
    title: "Freelance Foto & Video Editing",
    desc: "Layanan Editing Visual dan Mapping.",
    images: ["/images/projects/freelance1.webp"],
  },
};



function GalleryContent() {
  const searchParams = useSearchParams();
  const proyekId = searchParams.get('proyek');
  const [activeImg, setActiveImg] = useState(null);

  const currentGallery = galleryData[proyekId];

  // Mematikan scroll layar belakang saat lightbox terbuka
  useEffect(() => {
    document.body.style.overflow = activeImg ? 'hidden' : 'auto';
  }, [activeImg]);

  return (
    <section className="gallery-section">
      <Link href="/#projects" className="btn-back">
        <i className='bx bx-arrow-back'></i> Kembali
      </Link>

      {currentGallery ? (
        <div className="gallery-group active">
          <h2 className="heading">Galeri Proyek: <span>{currentGallery.title}</span></h2>
          <p className="gallery-desc">{currentGallery.desc}</p>

          <div className="gallery-grid">
            {currentGallery.images.map((src, index) => (
              <div className="gallery-card" key={index} onClick={() => setActiveImg(src)}>
                <Image src={src} alt={`${currentGallery.title} ${index + 1}`} width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="gallery-card-overlay">
                  <i className='bx bx-zoom-in'></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="gallery-error">
          <h2 className="heading">Silakan pilih proyek valid dari halaman utama.</h2>
          <Link href="/#projects" className="btn btn-primary">Lihat Project</Link>
        </div>
      )}

      {/* Lightbox Pop-up */}
      <div className={`lightbox ${activeImg ? 'show' : ''}`} onClick={() => setActiveImg(null)}>
        <span className="close-lightbox" onClick={() => setActiveImg(null)}>&times;</span>
        <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
          {activeImg && <Image className="lightbox-content" src={activeImg} alt="Preview Hasil Potret Spasial" width={1200} height={800} />}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="gallery-loading">Memuat Galeri Kerja Spasial...</div>}>
      <GalleryContent />
    </Suspense>
  );
}