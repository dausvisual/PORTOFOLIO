'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0 && navEntries[0].type === 'reload') {
        sessionStorage.removeItem('showAllProjects');
      } else {
        const stored = sessionStorage.getItem('showAllProjects');
        if (stored === 'true') {
          setShowAll(true);
        }
      }
    }
  }, []);

  const handleToggleShowAll = (state) => {
    setShowAll(state);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('showAllProjects', state);
    }
  };

  // DATA PROYEK LENGKAP
  const projects = [
    { id: 'vale', title: 'PT. Vale Indonesia Tbk.', cat: 'Survey Pengambilan Sampel Air', img: '/images/projects/vale1.webp' },
    { id: 'pam', title: 'PT. PAM Mineral Tbk.', cat: 'Survey Pengambilan Sampel Air dan Udara', img: '/images/projects/pam1.webp' },
    { id: 'mti', title: 'PT. Merdeka Tsingshan Indonesia', cat: 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/mti3.webp' },
    { id: 'msb', title: 'PT. Mitra Sulawesi Bersama', cat: 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/msb1.webp' },
    { id: 'awk', title: 'PT. Anindya Wiraputra Konsult', cat: 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/awk1.webp' },
    { id: 'imip', title: 'Indonesia Morowali Industrial Park (IMIP)', cat: 'Survey Pengambilaan Sampel Udara', img: '/images/projects/imip1.webp' },
    { id: 'igip', title: 'International Green Industrial Park (IGIP)', cat: 'Survey Pengambilan Sampel Udara', img: '/images/projects/igip2.webp' },
    { id: 'ihip', title: 'Indonesia Huabao Industrial Park (IHIP)', cat: 'Survey Pengambilan Sampel Udara', img: '/images/projects/ihip1.webp' },
    { id: 'adp', title: 'PT. Alaska Dwipa Perdana', cat: 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/adp1.webp' },
    { id: 'fcm', title: 'PT. Farmel Cipta Mandiri', cat: 'Survey Pengambilan Sampel Air', img: '/images/projects/fcm1.webp' },
    { id: 'khubsurat', title: 'PT. Khubsurat Meherban Ilahi', cat: 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/kmh1.webp' },
    { id: 'benuanta', title: 'Benuanta Grup', cat: 'Survey & Pemetaan RDTR', img: '/images/projects/benuanta1.webp' },
    { id: 'pandit', title: 'PT. Pandit Eka Nusa Agrata', cat: 'Survey Andalalin', img: '/images/projects/pandit1.webp' },
    { id: 'bira', title: 'Pemerintah Desa Bira', cat: 'Tim Survei dan Pemetaan', img: '/images/projects/bira1.webp' },
    { id: 'dispar', title: 'Pemetaan Pariwisata Bulukumba', cat: 'GIS', img: '/images/projects/dispar1.webp' },
    { id: 'bppwsulsel', title: 'BPPW Sulsel', cat: 'Tim Survey Program SPAL-DS Tahap I dan II', img: '/images/projects/bppwsulsel1.webp' },
    { id: 'rmk', title: 'PT. Ruang Meja Kerja', cat: 'Survey Perencanaan Kawasan & Penyusunan Profil Desa', img: '/images/projects/rmk1.webp' },
    { id: 'disperkimtan', title: 'DISPERKIMTAN Bulukumba', cat: 'Survey Kawasan Permukiman Kumuh Jalanjang', img: '/images/projects/disperkimtan1.webp' },
    { id: 'wihamedia', title: 'Undangan Digital', cat: 'Pembuatan Undangan Digital Website', img: '/images/projects/wihamedia1.webp', href: 'https://sabdacinta.com/Daus-Visual-' },
    { id: 'freelance', title: 'Freelance Foto & Video Editing', cat: 'Freelance', img: '/images/projects/freelance1.webp', href: 'https://www.instagram.com/daus_visual?igsh=NHVhMnBlbWNhd2c1' },
  ];

  return (
    <section id="projects" className="projects-section-k3">
      <span className="heading-sm display-block" data-aos="fade-up">PROJECTS</span>
      <h2 className="heading" data-aos="fade-up" data-aos-delay="100">Selected Works</h2>

      <div className="projects-tabs" data-aos="fade-up" data-aos-delay="200">
        <button className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>All</button>
        <button className={`tab-btn ${activeTab === 'GIS' ? 'active' : ''}`} onClick={() => setActiveTab('GIS')}>GIS</button>
        <button className={`tab-btn ${activeTab === 'Mapping' ? 'active' : ''}`} onClick={() => setActiveTab('Mapping')}>Mapping</button>
        <button className={`tab-btn ${activeTab === 'Survey' ? 'active' : ''}`} onClick={() => setActiveTab('Survey')}>Survey</button>
      </div>

      {/* Kotak pembungkus grid dengan efek potong */}
      <div className={`projects-grid-container ${!showAll ? 'is-collapsed' : ''}`}>
        <div className="projects-grid">
          {projects.filter(p => {
            if (activeTab === 'All') return true;
            const cat = p.cat.toLowerCase();
            if (activeTab === 'GIS') return cat.includes('gis');
            if (activeTab === 'Mapping') return cat.includes('mapping') || cat.includes('pemetaan');
            if (activeTab === 'Survey') return cat.includes('survey') || cat.includes('survei');
            return true;
          }).map((p, i) => (
            <div className="project-card" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <Image src={p.img} alt={p.title} width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" />
              <h3>{p.title}</h3>
              <p>{p.cat}</p>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="view-link" aria-label={`Kunjungi link: ${p.title}`}>
                  {p.id === 'wihamedia' ? 'Lihat Web' : 'View Instagram'} <i className='bx bx-link-external'></i>
                </a>
              ) : (
                <Link href={`/galeri?proyek=${p.id}`} className="view-link" aria-label={`Lihat detail proyek: ${p.title}`}>
                  View Project <i className='bx bx-right-arrow-alt'></i>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Efek gradasi transparan */}
        {!showAll && <div className="fade-overlay"></div>}
      </div>

      {/* Tombol aksi */}
      <div className={`projects-action-bar ${!showAll ? 'floating-btn' : 'normal-btn'}`}>
        {!showAll ? (
          <button className="btn btn-primary" onClick={() => handleToggleShowAll(true)}>
            Lihat Selengkapnya <i className='bx bx-chevron-down'></i>
          </button>
        ) : (
          <button className="btn btn-outline" onClick={() => handleToggleShowAll(false)}>
            Sembunyikan <i className='bx bx-chevron-up'></i>
          </button>
        )}
      </div>
    </section>
  );
}