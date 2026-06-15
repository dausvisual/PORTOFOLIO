'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  // Data Sertifikat
  const certs = [
    { img: '/images/certificate/APDI.webp', title: 'Asosiasi Pilot Drone Indonesia', link: '/galeri?proyek=apdi', desc: 'Sertifikat Lisensi Pilot Drone Resmi dari APDI.', tags: ['Drone Pilot', 'Sertifikasi'] },
    { img: '/images/certificate/DJPU.webp', title: 'Direktorat Jenderal Perhubungan Udara', link: '/galeri?proyek=djpu', desc: 'Sertifikasi Registrasi Remote Pilot Resmi Kementerian.', tags: ['Drone Pilot', 'Sertifikasi'] },
    { img: '/images/certificate/LAB.webp', title: 'PT. Laboratorindo Alam Bestari', link: '/galeri?proyek=lab_cert', desc: 'Pelatihan Teknis Pengambilan Sampel Air Limbah & Baku Mutu Udara.', tags: ['Pelatihan', 'Pengambilan Sampel'] },
    { img: '/images/certificate/PGP.webp', title: 'PT. Professional Global Persada', link: '/galeri?proyek=pgp', desc: 'Pelatihan Teknik Pengujian Parameter Udara Ambien Sesuai Regulasi SNI.', tags: ['Pelatihan', 'Pengujian SNI'] },
    { img: '/images/certificate/bnsp.webp', title: 'Badan Nasional Sertifikasi Profesi', link: '/galeri?proyek=bnsp', desc: 'Sertifikasi Kompetensi Profesi Teknisi Pelaksana Pemasangan Perlengkapan Jalan.', tags: ['Sertifikasi', 'Kompetensi'] },
    { img: '/images/certificate/dicoding.webp', title: 'Dicoding Indonesia', link: '/galeri?proyek=dicoding', desc: 'Pelatihan Dasar Pemrograman Web.', tags: ['Sertifikasi', 'Pengembangan Software'] },
    { img: '/images/certificate/IMC.webp', title: 'Indonesia Mapping Community', link: '/galeri?proyek=imc', desc: 'Pelatihan pemetaan terestris menggunakan Drone Tingkat Dasar.', tags: ['Pelatihan', 'Pemetaan'] },
    { img: '/images/certificate/ITS.webp', title: 'HMP Planologi ITS Surabaya', link: '/galeri?proyek=its', desc: 'ArcGIS Schooling: Tingkat Lanjut Pemrosesan Spasial Kawasan Kota.', tags: ['Pelatihan', 'ArcGIS'] },
  ];

  return (
    <section id="certificates" className="projects-section-k3">
      <div className="section-header" style={{ marginBottom: '3rem' }}>
        <h5 className="heading-sm">SERTIFIKASI</h5>
        <h2 className="heading">Pelatihan & Sertifikasi</h2>
      </div>

      {/* Pembungkus Grid dengan Efek Potong */}
      <div className={`certs-grid-container ${!showAll ? 'is-collapsed' : ''}`}>
        <div className="certificates-grid">
          {certs.map((c, i) => (
            <div className="project-card" key={i}>
              <Image src={c.img} alt={c.title} width={600} height={400} />
              <div className="cert-text-content">
                <div className="project-info" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3>{c.title}</h3>
                  <Link href={c.link}><i className='bx bx-link-external' style={{ color: 'var(--neon-blue)', fontSize: '1.5rem' }}></i></Link>
                </div>
                <p className="project-desc">{c.desc}</p>
                <div className="tech-stack" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {c.tags.map((t, idx) => <span key={idx} style={{ fontSize: '1rem', color: 'var(--text-light)', fontWeight: '600' }}>{t}</span>)}
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
            Lihat Selengkapnya <i className='bx bx-chevron-down'></i>
          </button>
        ) : (
          <button className="btn btn-outline" onClick={() => setShowAll(false)}>
            Sembunyikan <i className='bx bx-chevron-up'></i>
          </button>
        )}
      </div>
    </section>
  );
}