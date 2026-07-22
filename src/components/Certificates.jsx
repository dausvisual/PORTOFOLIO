'use client';
import { useState } from 'react';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Certificates() {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  // Data Sertifikat
  const certs = [
    { img: '/images/certificate/APDI.webp', title: language === 'en' ? 'Indonesian Drone Pilot Association' : 'Asosiasi Pilot Drone Indonesia', link: '/galeri?proyek=apdi', verifyLink: 'https://member.apdi.id/search?number=732512170001', desc: language === 'en' ? 'Official Drone Pilot License Certificate from APDI.' : 'Sertifikat Lisensi Pilot Drone Resmi dari APDI.', tags: language === 'en' ? ['Drone Pilot', 'Certification'] : ['Drone Pilot', 'Sertifikasi'] },
    { img: '/images/certificate/DJPU.webp', title: language === 'en' ? 'Directorate General of Civil Aviation' : 'Direktorat Jenderal Perhubungan Udara', link: '/galeri?proyek=djpu', verifyLink: 'https://imsis-djpu.dephub.go.id/QRVerificator/RPCQR.php?id=YmNmNTQxYjhlZjcyOTlmYzM2YWRhNTNiYmNmM2U0OTg=', desc: language === 'en' ? 'Ministry Official Remote Pilot Registration Certification.' : 'Sertifikasi Registrasi Remote Pilot Resmi Kementerian.', tags: language === 'en' ? ['Drone Pilot', 'Certification'] : ['Drone Pilot', 'Sertifikasi'] },
    { img: '/images/certificate/LAB.webp', title: 'PT. Laboratorindo Alam Bestari', link: '/galeri?proyek=lab_admin', verifyLink: '/verify/lab_admin', desc: language === 'en' ? 'Technical Training on Laboratory Administration Standards.' : 'Pelatihan Pemahaman Standar Administrasi Laboratorium Penguji dan Lingkungan.', tags: language === 'en' ? ['Training', 'Administration'] : ['Pelatihan', 'Administrasi'] },
    { img: '/images/certificate/LAB.webp', title: 'PT. Laboratorindo Alam Bestari', link: '/galeri?proyek=lab_cert', verifyLink: '/verify/lab_sampel', desc: language === 'en' ? 'Technical Training on Air & Water Sampling.' : 'Pelatihan Pengambilan Sampel Udara dan Sampel Air.', tags: language === 'en' ? ['Training', 'Sampling'] : ['Pelatihan', 'Pengambilan Sampel'] },
    { img: '/images/certificate/PGP.webp', title: 'PT. Professional Global Persada', link: '/galeri?proyek=pgp', verifyLink: '/verify/pgp', desc: language === 'en' ? 'Technical Training on Ambient Air Parameter Testing According to SNI Regulations.' : 'Pelatihan Teknik Pengujian Parameter Udara Ambien Sesuai Regulasi SNI.', tags: language === 'en' ? ['Training', 'SNI Testing'] : ['Pelatihan', 'Pengujian SNI'] },
    { img: '/images/certificate/bnsp.webp', title: language === 'en' ? 'National Professional Certification Board' : 'Badan Nasional Sertifikasi Profesi', link: '/galeri?proyek=bnsp', verifyLink: '/verify/bnsp', desc: language === 'en' ? 'Professional Competency Certification for Road Equipment Installation Technician.' : 'Sertifikasi Kompetensi Profesi Teknisi Pelaksana Pemasangan Perlengkapan Jalan.', tags: language === 'en' ? ['Certification', 'Competency'] : ['Sertifikasi', 'Kompetensi'] },
    { img: '/images/certificate/dicoding.webp', title: 'Dicoding Indonesia', link: '/galeri?proyek=dicoding', verifyLink: 'https://www.dicoding.com/certificates/JMZVDWOGQZN9', desc: language === 'en' ? 'Basic Web Programming Training.' : 'Pelatihan Dasar Pemrograman Web.', tags: language === 'en' ? ['Certification', 'Software Development'] : ['Sertifikasi', 'Pengembangan Software'] },
    { img: '/images/certificate/IMC.webp', title: 'Indonesia Mapping Community', link: '/galeri?proyek=imc', verifyLink: '/verify/imc', desc: language === 'en' ? 'Basic Terrestrial Mapping Training using Drones.' : 'Pelatihan pemetaan terestris menggunakan Drone Tingkat Dasar.', tags: language === 'en' ? ['Training', 'Mapping'] : ['Pelatihan', 'Pemetaan'] },
    { img: '/images/certificate/ITS.webp', title: 'HMP Planologi ITS Surabaya', link: '/galeri?proyek=its', verifyLink: '/verify/its', desc: language === 'en' ? 'ArcGIS Schooling: Advanced Spatial Processing for Urban Areas.' : 'ArcGIS Schooling: Tingkat Lanjut Pemrosesan Spasial Kawasan Kota.', tags: language === 'en' ? ['Training', 'ArcGIS'] : ['Pelatihan', 'ArcGIS'] },
  ];

  return (
    <section id="certificates" className="projects-section-k3">
      <div className="section-header section-header-spacing" data-aos="fade-up">
        <h2 className="section-title-new">
          <i className="bx bx-award" style={{ marginRight: '8px' }}></i>
          {language === 'en' ? 'TRAINING & ' : 'PELATIHAN & '}
          <span>{language === 'en' ? 'CERTIFICATIONS' : 'SERTIFIKASI'}</span>
        </h2>
        <p className="section-desc-new">
          {language === 'en' ? 'List of professional licenses and certifications' : 'Daftar lisensi dan sertifikasi profesional'}
        </p>
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

                {c.verifyLink && (
                  <a href={c.verifyLink} target={c.verifyLink.startsWith('http') ? '_blank' : '_self'} rel={c.verifyLink.startsWith('http') ? 'noopener noreferrer' : ''} className="verify-btn">
                    <i className='bx bx-check-shield'></i> {language === 'en' ? 'Verify Credential' : 'Verifikasi Sertifikat'}
                  </a>
                )}
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
          <button className="btn btn-outline" onClick={() => {
            setShowAll(false);
            const el = document.getElementById('certificates');
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 100;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}>
            {language === 'en' ? 'Hide' : 'Sembunyikan'} <i className='bx bx-chevron-up'></i>
          </button>
        )}
      </div>
    </section>
  );
}