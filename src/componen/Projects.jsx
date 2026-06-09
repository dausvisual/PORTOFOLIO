'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // DATA PROYEK LENGKAP
  const projects = [
    { id: 'vale', title: 'PT. Vale Indonesia Tbk.', cat: 'Survey Pengambilan Sampel Air', img: '/images/projects/vale1.jpg.jpg' },
    { id: 'pam', title: 'PT. PAM Mineral Tbk.', cat: 'Survey Pengambilan Sampel Air dan Udara', img: '/images/projects/pam1.jpg' },
    { id: 'mti', title: 'PT. Merdeka Tsingshan Indonesia', cat: 'Survey Pengambilan Sampel Air', img: '/images/projects/mti3.jpg' },
    { id: 'msb', title: 'PT. Mitra Sulawesi Bersama', cat: 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/msb1.jpg' },
    { id: 'awk', title: 'PT. Anindya Wiraputra Konsult', cat: 'Survey Pengambilan Sampel Air dan Udara', img: '/images/projects/awk3.JPG' },
    { id: 'imip', title: 'Indonesia Morowali Industrial Park', cat: 'Survey Pengambilaan Sampel Udara', img: '/images/projects/imip1.jpg' },
    { id: 'igip', title: 'International Green Industrial Park', cat: 'Survey Pengambilan Sampel Udara', img: '/images/projects/igip2.jpg' },
    { id: 'ihip', title: 'Indonesia Huabao Industrial Park', cat: 'Survey Pengambilan Sampel Udara', img: '/images/projects/ihip1.jpg' },
    { id: 'adp', title: 'PT. Alaska Dwipa Perdana', cat: 'Survey Pengambilan Sampel Air. Udara dan Kebisingan', img: '/images/projects/adp1.jpg' },
    { id: 'fcm', title: 'PT. Farmel Cipta Mandiri', cat: 'Survey Pengambilan Sampel Air', img: '/images/projects/fcm1.jpg' },
    { id: 'default', title: 'PT. Pandit Eka Nusa Agrata', cat: 'Survey Andalalin', img: '/images/projects/1.jpeg' },
    { id: 'default', title: 'Benuanta Grup', cat: 'Survei Project RDTR', img: '/images/projects/6.jpeg' },
    { id: 'default', title: 'Benuanta Grup', cat: 'Tim Pemetaan RDTR WP I & II Kota Jayapura', img: '/images/projects/9.jpeg' },
    { id: 'default', title: 'Benuanta Grup', cat: 'Tim Pemetaan Masterplan Jalan Mamberamo Tengah', img: '/images/projects/8.jpeg' },
    { id: 'default', title: 'Pemerintah Desa Bira', cat: 'Tim Survei dan Pemetaan', img: '/images/projects/P.jpg' },
    { id: 'default', title: 'Pemetaan Pariwisata Bulukumba', cat: 'GIS', img: '/images/projects/11.jpeg' },
    { id: 'default', title: 'Benuanta Grup', cat: 'Survei Project RDTR Papua Perbatasan', img: '/images/projects/2.jpeg' },
    { id: 'default', title: 'BPPW Sulsel', cat: 'Tim Survey Program SPAL-DS Tahap I dan II', img: '/images/projects/4.jpeg' },
    { id: 'default', title: 'PT. Ruang Meja Kerja', cat: 'Survey Perencanaan Kawasan Pariwisata Pentuanginan', img: '/images/projects/111.png' },
    { id: 'default', title: 'PT. Ruang Meja Kerja', cat: 'Tim Survei dan Penyusun Profil Desa Mappetajang', img: '/images/projects/DJI_0165.JPG' },
    { id: 'default', title: 'PT. Ruang Meja Kerja', cat: 'Survey Perintisan Jalan Mappetajang', img: '/images/projects/12.jpeg' },
    { id: 'default', title: 'DISPERKIMTAN Bulukumba', cat: 'Survey Kawasan Permukiman Kumuh Jalanjang', img: '/images/projects/13.JPG' },
    { id: 'default', title: 'Wiha Media Undangan Digital', cat: 'Mapping', img: '/images/projects/UD.png' },
    { id: 'default', title: 'Freelance Foto & Video Editing', cat: 'Mapping', img: '/images/projects/HITAM.jpg' }
  ];

  return (
    <section id="projects" className="projects-section-k3">
      <h5 className="heading-sm">PROJECTS</h5>
      <h2 className="heading">Selected Works</h2>
      
      <div className="projects-tabs">
        <button className="tab-btn active">All</button>
        <button className="tab-btn">GIS</button>
        <button className="tab-btn">Mapping</button>
        <button className="tab-btn">Survey</button>
      </div>

      {/* 1. KOTAK PEMBUNGKUS (Hanya berisi grid dan efek visual kabut) */}
      <div className={`projects-grid-container ${!showAll ? 'is-collapsed' : ''}`}>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <img src={p.img} alt={p.title} loading="lazy" />
              <h3>{p.title}</h3>
              <p>{p.cat}</p>
              <Link href={`/galeri?proyek=${p.id}`} className="view-link">
                View Project <i className='bx bx-right-arrow-alt'></i>
              </Link>
            </div>
          ))}
        </div>

        {/* Efek Gradasi Transparan murni kosmetik */}
        {!showAll && <div className="fade-overlay"></div>}
      </div>

      {/* 2. TOMBOL AKSI (Dikeluarkan sepenuhnya dari kotak pembungkus di atas) */}
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