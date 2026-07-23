'use client';
import { useLanguage } from '../context/LanguageContext';

// Komponen kecil client-side hanya untuk teks yang butuh terjemahan
export function HeroText() {
  const { language } = useLanguage();
  return (
    <>
      <div className="avail-badge">
        <span className="avail-dot"></span> {language === 'en' ? 'Works at PT. AFA Tombuku Pratama' : 'Bekerja di PT. AFA Tombuku Pratama'}
      </div>

      <h1 className="hero-title">
        FIRDAUS <span className="name-gradient">IKRAM, S.PWK</span>
      </h1>

      <p className="hero-subtitle">
        GIS SPECIALIST <span>|</span> URBAN PLANNER <span>|</span> ENVIRONMENTAL SURVEYOR <span>|</span> DRONE PILOT
      </p>

      {/* Buttons */}
      <div className="hero-btn-group">
        <a href="/cv/CV_FIRDAUS_IKRAM.pdf?v=3" download="CV_Firdaus_Ikram.pdf" className="btn btn-primary-glow">
          <i className='bx bx-download'></i> {language === 'en' ? 'DOWNLOAD CV' : 'UNDUH CV'}
        </a>
        <a href="#contact" className="btn btn-outline-glow">
          <i className='bx bx-send'></i> {language === 'en' ? 'CONTACT ME' : 'HUBUNGI SAYA'}
        </a>
      </div>

      {/* Socials */}
      <div className="hero-socials">
        <a href="https://www.linkedin.com/in/firdaus-ikram-86405b2a6" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile"><i className='bx bxl-linkedin'></i></a>
        <a href="https://www.instagram.com/firdausikram_17" target="_blank" rel="noreferrer" aria-label="Instagram Profile"><i className='bx bxl-instagram'></i></a>
        <a href="https://wa.me/6285770029172" target="_blank" rel="noreferrer" aria-label="WhatsApp Contact"><i className='bx bxl-whatsapp'></i></a>
      </div>

      {/* Description */}
      <p className="hero-desc">
        {language === 'en' ? 'Transforming geospatial data into accurate solutions through GIS services, surveying, drone mapping, and regional planning to support smarter decision-making and sustainable development.' : 'Mengubah data geospasial menjadi solusi yang akurat melalui layanan GIS, survei, pemetaan drone, dan perencanaan wilayah untuk mendukung pengambilan keputusan yang lebih cerdas dan pembangunan yang berkelanjutan.'}
      </p>
    </>
  );
}

export function HeroFloatingCards() {
  const { language } = useLanguage();
  return (
    <>
      <div className="float-card card-tl">
        <div className="icon-box"><i className='bx bx-layer'></i></div>
        <div className="text-box">
          <span className="float-title">{language === 'en' ? 'GIS Analysis' : 'Analisis GIS'}</span>
          <p>{language === 'en' ? 'Spatial Data Insights' : 'Insight Berbasis Data Spasial'}</p>
        </div>
      </div>
      <div className="float-card card-ml">
        <div className="icon-box"><i className='bx bx-target-lock'></i></div>
        <div className="text-box">
          <span className="float-title">{language === 'en' ? 'Surveyor' : 'Surveyor'}</span>
          <p>{language === 'en' ? 'Accurate & Reliable Measurement' : 'Pengukuran Akurat & Terpercaya'}</p>
        </div>
      </div>
      <div className="float-card card-bl">
        <div className="icon-box"><i className='bx bx-paper-plane'></i></div>
        <div className="text-box">
          <span className="float-title">{language === 'en' ? 'Drone Mapping' : 'Pemetaan Drone'}</span>
          <p>{language === 'en' ? 'Fast and Precise Mapping' : 'Pemetaan Cepat dan Presisi'}</p>
        </div>
      </div>
      <div className="float-card card-tr">
        <div className="icon-box"><i className='bx bx-buildings'></i></div>
        <div className="text-box">
          <span className="float-title">{language === 'en' ? 'Urban Planner' : 'Perencana Kota'}</span>
          <p>{language === 'en' ? 'Building Sustainable Cities' : 'Membangun Kota yang Berkelanjutan'}</p>
        </div>
      </div>
      <div className="float-card card-mr">
        <div className="icon-box" style={{ color: '#22c55e' }}><i className='bx bx-leaf'></i></div>
        <div className="text-box">
          <span className="float-title">{language === 'en' ? 'Environmental' : 'Lingkungan'}</span>
          <p>{language === 'en' ? 'Eco-Friendly Solutions' : 'Solusi Ramah Lingkungan'}</p>
        </div>
      </div>
      <div className="float-card card-br">
        <div className="icon-box"><i className='bx bxs-city'></i></div>
        <div className="text-box">
          <span className="float-title">{language === 'en' ? '3D Modeler' : 'Modeler 3D'}</span>
          <p>{language === 'en' ? 'Realistic Visual Representation' : 'Representasi Visual yang Realistis'}</p>
        </div>
      </div>
    </>
  );
}
