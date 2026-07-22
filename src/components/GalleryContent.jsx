'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function GalleryContent({ proyekId, currentGallery }) {
  const { language } = useLanguage();
  const [activeImg, setActiveImg] = useState(null);

  // Mematikan scroll layar belakang saat lightbox terbuka
  useEffect(() => {
    document.body.style.overflow = activeImg ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; }; // Cleanup
  }, [activeImg]);

  return (
    <section className="gallery-section">
      <Link href={`/#project-${proyekId}`} className="btn-back">
        <i className='bx bx-arrow-back'></i> {language === 'en' ? 'Back' : 'Kembali'}
      </Link>

      {currentGallery ? (
        <div className="gallery-group active">
          <div className="gallery-header-v2">
            <span className="gallery-subtitle">{language === 'en' ? 'Project Gallery' : 'Galeri Proyek'}</span>
            <h2 className="gallery-title">{currentGallery.title}</h2>
            <p className="gallery-desc-v2">{currentGallery.desc}</p>
          </div>

          <div className="gallery-meta-box">
            <div className="meta-item">
              <i className='bx bx-group'></i>
              <div className="meta-text">
                <span>{language === 'en' ? 'Role' : 'Peran'}</span>
                <strong>{currentGallery.peran || (language === 'en' ? 'Expert Team' : 'Tim Ahli')}</strong>
              </div>
            </div>
            <div className="meta-item">
              <i className='bx bx-buildings'></i>
              <div className="meta-text">
                <span>{language === 'en' ? 'Assigned Company' : 'Perusahaan Penugasan'}</span>
                <strong>{currentGallery.perusahaan || '-'}</strong>
              </div>
            </div>
            <div className="meta-item">
              <i className='bx bx-map'></i>
              <div className="meta-text">
                <span>{language === 'en' ? 'Location' : 'Lokasi'}</span>
                <strong>{currentGallery.lokasi || 'Indonesia'}</strong>
              </div>
            </div>
            <div className="meta-item">
              <i className='bx bx-calendar'></i>
              <div className="meta-text">
                <span>{language === 'en' ? 'Period' : 'Periode'}</span>
                <strong>{currentGallery.periode || '2023'}</strong>
              </div>
            </div>
          </div>

          <div className="gallery-grid">
            {currentGallery.images.map((src, index) => (
              <div className="gallery-card" key={index} onClick={() => setActiveImg(src)}>
                <Image src={src} alt={`${currentGallery.title} ${index + 1}`} width={600} height={600} sizes="(max-width: 768px) 100vw, 20vw" />
                <div className="gallery-card-overlay">
                  <i className='bx bx-zoom-in'></i>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-pagination">
            <button className="page-btn"><i className='bx bx-left-arrow-alt'></i></button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn"><i className='bx bx-right-arrow-alt'></i></button>
          </div>
        </div>
      ) : (
        <div className="gallery-error">
          <h2 className="heading">{language === 'en' ? 'Project not found.' : 'Proyek tidak ditemukan.'}</h2>
          <Link href="/#projects" className="btn btn-primary">{language === 'en' ? 'View Projects' : 'Lihat Project'}</Link>
        </div>
      )}

      {/* Lightbox Pop-up */}
      <div className={`lightbox ${activeImg ? 'show' : ''}`} onClick={() => setActiveImg(null)}>
        <span className="close-lightbox" onClick={() => setActiveImg(null)}>&times;</span>
        <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
          {activeImg && <Image className="lightbox-content" src={activeImg} alt="Preview Hasil Potret Spasial" width={1200} height={800} unoptimized />}
        </div>
      </div>
    </section>
  );
}
