'use client';
import { useState } from 'react';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Certificates() {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Data Sertifikat
  const certs = [
    { img: '/images/certificate/APDI.webp', title: language === 'en' ? 'Indonesian Drone Pilot Association' : 'Asosiasi Pilot Drone Indonesia', link: '/galeri?proyek=apdi', desc: language === 'en' ? 'Official Drone Pilot License Certificate from APDI.' : 'Sertifikat Lisensi Pilot Drone Resmi dari APDI.', tags: language === 'en' ? ['Drone Pilot', 'Certification'] : ['Drone Pilot', 'Sertifikasi'] },
    { img: '/images/certificate/DJPU.webp', title: language === 'en' ? 'Directorate General of Civil Aviation' : 'Direktorat Jenderal Perhubungan Udara', link: '/galeri?proyek=djpu', desc: language === 'en' ? 'Ministry Official Remote Pilot Registration Certification.' : 'Sertifikasi Registrasi Remote Pilot Resmi Kementerian.', tags: language === 'en' ? ['Drone Pilot', 'Certification'] : ['Drone Pilot', 'Sertifikasi'] },
    { img: '/images/certificate/LAB.webp', title: 'PT. Laboratorindo Alam Bestari', link: '/galeri?proyek=lab_cert', desc: language === 'en' ? 'Technical Training on Wastewater Sampling & Air Quality Standards.' : 'Pelatihan Teknis Pengambilan Sampel Air Limbah & Baku Mutu Udara.', tags: language === 'en' ? ['Training', 'Sampling'] : ['Pelatihan', 'Pengambilan Sampel'] },
    { img: '/images/certificate/PGP.webp', title: 'PT. Professional Global Persada', link: '/galeri?proyek=pgp', desc: language === 'en' ? 'Technical Training on Ambient Air Parameter Testing According to SNI Regulations.' : 'Pelatihan Teknik Pengujian Parameter Udara Ambien Sesuai Regulasi SNI.', tags: language === 'en' ? ['Training', 'SNI Testing'] : ['Pelatihan', 'Pengujian SNI'] },
    { img: '/images/certificate/bnsp.webp', title: language === 'en' ? 'National Professional Certification Board' : 'Badan Nasional Sertifikasi Profesi', link: '/galeri?proyek=bnsp', desc: language === 'en' ? 'Professional Competency Certification for Road Equipment Installation Technician.' : 'Sertifikasi Kompetensi Profesi Teknisi Pelaksana Pemasangan Perlengkapan Jalan.', tags: language === 'en' ? ['Certification', 'Competency'] : ['Sertifikasi', 'Kompetensi'] },
    { img: '/images/certificate/dicoding.webp', title: 'Dicoding Indonesia', link: '/galeri?proyek=dicoding', desc: language === 'en' ? 'Basic Web Programming Training.' : 'Pelatihan Dasar Pemrograman Web.', tags: language === 'en' ? ['Certification', 'Software Development'] : ['Sertifikasi', 'Pengembangan Software'] },
    { img: '/images/certificate/IMC.webp', title: 'Indonesia Mapping Community', link: '/galeri?proyek=imc', desc: language === 'en' ? 'Basic Terrestrial Mapping Training using Drones.' : 'Pelatihan pemetaan terestris menggunakan Drone Tingkat Dasar.', tags: language === 'en' ? ['Training', 'Mapping'] : ['Pelatihan', 'Pemetaan'] },
    { img: '/images/certificate/ITS.webp', title: 'HMP Planologi ITS Surabaya', link: '/galeri?proyek=its', desc: language === 'en' ? 'ArcGIS Schooling: Advanced Spatial Processing for Urban Areas.' : 'ArcGIS Schooling: Tingkat Lanjut Pemrosesan Spasial Kawasan Kota.', tags: language === 'en' ? ['Training', 'ArcGIS'] : ['Pelatihan', 'ArcGIS'] },
  ];

  return (
    <section id="certificates" className="projects-section-k3">
      <div className="section-header section-header-spacing" data-aos="fade-up">
        <span className="heading-sm display-block">{language === 'en' ? 'CERTIFICATION' : 'SERTIFIKASI'}</span>
        <h2 className="heading">{language === 'en' ? 'Training & Certification' : 'Pelatihan & Sertifikasi'}</h2>
      </div>

      {/* Pembungkus Grid dengan Efek Potong */}
      <div className={`certs-grid-container ${!showAll ? 'is-collapsed' : ''}`}>
        <div className="certificates-grid">
          {certs.map((c, i) => (
            <div className="project-card" key={i}>
              <Image src={c.img} alt={c.title} width={600} height={400} sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="cert-text-content">
                <div className="project-info cert-info-header">
                  <h3>{c.title}</h3>
                </div>
                <p className="project-desc">{c.desc}</p>
                <div className="tech-stack">
                  {c.tags.map((t, idx) => <span key={idx}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Efek Gradasi Transparan */}
        {!showAll && <div className="fade-overlay"></div>}
      </div>

      {/* Tombol Aksi */}
      <div className={`projects-action-bar ${!showAll ? 'floating-btn' : 'normal-btn'}`}>
        {!showAll ? (
          <button className="btn btn-primary" onClick={() => setShowAll(true)}>
            {language === 'en' ? 'See More' : 'Lihat Selengkapnya'} <i className='bx bx-chevron-down'></i>
          </button>
        ) : (
          <button className="btn btn-outline" onClick={() => setShowAll(false)}>
            {language === 'en' ? 'Hide' : 'Sembunyikan'} <i className='bx bx-chevron-up'></i>
          </button>
        )}
      </div>
    </section>
  );
}