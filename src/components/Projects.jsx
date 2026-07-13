'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const shouldShowAll = hash.includes('#project-');
      
      if (shouldShowAll) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setShowAll(true);
      }

      if (hash && hash.includes('#project-')) {
        setTimeout(() => {
          const el = document.getElementById(hash.substring(1));
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 300);
      }
    }
  }, []);

  const handleToggleShowAll = (state) => {
    setShowAll(state);
  };

  // DATA PROYEK LENGKAP
  const projects = [
    { id: 'vale', title: 'PT. Vale Indonesia Tbk.', cat: language === 'en' ? 'Water Sampling Survey' : 'Survey Pengambilan Sampel Air', img: '/images/projects/vale1.webp' },
    { id: 'pam', title: 'PT. PAM Mineral Tbk.', cat: language === 'en' ? 'Water and Air Sampling Survey' : 'Survey Pengambilan Sampel Air dan Udara', img: '/images/projects/pam1.webp' },
    { id: 'mti', title: 'PT. Merdeka Tsingshan Indonesia', cat: language === 'en' ? 'Water, Air, and Noise Sampling Survey' : 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/mti3.webp' },
    { id: 'msb', title: 'PT. Mitra Sulawesi Bersama', cat: language === 'en' ? 'Water, Air, and Noise Sampling Survey' : 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/msb1.webp' },
    { id: 'awk', title: 'PT. Anindya Wiraputra Konsult', cat: language === 'en' ? 'Water, Air, and Noise Sampling Survey' : 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/awk1.webp' },
    { id: 'imip', title: 'Indonesia Morowali Industrial Park (IMIP)', cat: language === 'en' ? 'Air Sampling Survey' : 'Survey Pengambilaan Sampel Udara', img: '/images/projects/imip1.webp' },
    { id: 'igip', title: 'International Green Industrial Park (IGIP)', cat: language === 'en' ? 'Air Sampling Survey' : 'Survey Pengambilan Sampel Udara', img: '/images/projects/igip2.webp' },
    { id: 'ihip', title: 'Indonesia Huabao Industrial Park (IHIP)', cat: language === 'en' ? 'Air Sampling Survey' : 'Survey Pengambilan Sampel Udara', img: '/images/projects/ihip1.webp' },
    { id: 'adp', title: 'PT. Alaska Dwipa Perdana', cat: language === 'en' ? 'Water, Air, and Noise Sampling Survey' : 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/adp1.webp' },
    { id: 'fcm', title: 'PT. Farmel Cipta Mandiri', cat: language === 'en' ? 'Water Sampling Survey' : 'Survey Pengambilan Sampel Air', img: '/images/projects/fcm1.webp' },
    { id: 'mss', title: 'PT. Metal Smeltindo Selaras', cat: language === 'en' ? 'Water Sampling Survey' : 'Survey Pengambilan Sampel Air', img: '/images/projects/mss1.webp' },
    { id: 'bma', title: 'PT. Bumi Morowali Abadi', cat: language === 'en' ? 'Mapping Survey' : 'Survey Pemetaan', img: '/images/projects/bma1.webp' },
    { id: 'khubsurat', title: 'PT. Khubsurat Meherban Ilahi', cat: language === 'en' ? 'Water, Air, and Noise Sampling Survey' : 'Survey Pengambilan Sampel Air, Udara dan Kebisingan', img: '/images/projects/kmh1.webp' },
    { id: 'ortho', title: 'Mapping & Orthopotho', cat: language === 'en' ? 'Mapping & Orthophoto' : 'Pemetaan & Orthophoto', img: '/images/projects/ortho1.webp' },
    { id: 'benuanta', title: 'Benuanta Grup', cat: language === 'en' ? 'RDTR Survey & Mapping' : 'Survey & Pemetaan RDTR', img: '/images/projects/benuanta1.webp' },
    { id: 'pandit', title: 'PT. Pandit Eka Nusa Agrata', cat: language === 'en' ? 'Traffic Impact Analysis Survey' : 'Survey Andalalin', img: '/images/projects/pandit1.webp' },
    { id: 'bira', title: 'Pemerintah Desa Bira', cat: language === 'en' ? 'Survey and Mapping Team' : 'Tim Survei dan Pemetaan', img: '/images/projects/bira1.webp' },
    { id: 'dispar', title: 'Pemetaan Pariwisata Bulukumba', cat: 'GIS', img: '/images/projects/dispar1.webp' },
    { id: 'bppwsulsel', title: 'BPPW Sulsel', cat: language === 'en' ? 'SPAL-DS Program Survey Team Phase I & II' : 'Tim Survey Program SPAL-DS Tahap I dan II', img: '/images/projects/bppwsulsel1.webp' },
    { id: 'rmk', title: 'PT. Ruang Meja Kerja', cat: language === 'en' ? 'Regional Planning Survey & Village Profile Preparation' : 'Survey Perencanaan Kawasan & Penyusunan Profil Desa', img: '/images/projects/rmk1.webp' },
    { id: 'disperkimtan', title: 'DISPERKIMTAN Bulukumba', cat: language === 'en' ? 'Jalanjang Slum Area Survey' : 'Survey Kawasan Permukiman Kumuh Jalanjang', img: '/images/projects/disperkimtan1.webp' },
    { id: 'wihamedia', title: 'Undangan Digital', cat: language === 'en' ? 'Digital Website Invitation Creation' : 'Pembuatan Undangan Digital Website', img: '/images/projects/wihamedia1.webp', href: 'https://dausvisual.site' },
    { id: 'freelance', title: 'Freelance Foto & Video Editing', cat: 'Freelance', img: '/images/projects/freelance1.webp', href: 'https://www.instagram.com/daus_visual?igsh=NHVhMnBlbWNhd2c1' },
  ];

  return (
    <section id="projects" className="projects-section-k3">
      <span className="heading-sm display-block" data-aos="fade-up">{language === 'en' ? 'PROJECTS' : 'PROYEK'}</span>
      <h2 className="heading" data-aos="fade-up" data-aos-delay="100">{language === 'en' ? 'Selected Works' : 'Proyek Pilihan'}</h2>

      <div className="projects-tabs" data-aos="fade-up" data-aos-delay="200">
        <button className={`tab-btn ${activeTab === 'All' ? 'active' : ''}`} onClick={() => setActiveTab('All')}>{language === 'en' ? 'All' : 'Semua'}</button>
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
            <div id={`project-${p.id}`} className="project-card" key={i} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <Image src={p.img} alt={p.title} width={600} height={400} sizes="(max-width: 768px) 100vw, 33vw" />
              <h3>{p.title}</h3>
              <p>{p.cat}</p>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="view-link" aria-label={`Kunjungi link: ${p.title}`}>
                  {p.id === 'wihamedia' ? (language === 'en' ? 'View Web' : 'Lihat Web') : (language === 'en' ? 'View Instagram' : 'View Instagram')} <i className='bx bx-link-external'></i>
                </a>
              ) : (
                <Link href={`/galeri?proyek=${p.id}`} className="view-link" aria-label={`Lihat detail proyek: ${p.title}`}>
                  {language === 'en' ? 'View Project' : 'Lihat Proyek'} <i className='bx bx-right-arrow-alt'></i>
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
            {language === 'en' ? 'See More' : 'Lihat Selengkapnya'} <i className='bx bx-chevron-down'></i>
          </button>
        ) : (
          <button className="btn btn-outline" onClick={() => handleToggleShowAll(false)}>
            {language === 'en' ? 'Hide' : 'Sembunyikan'} <i className='bx bx-chevron-up'></i>
          </button>
        )}
      </div>
    </section>
  );
}