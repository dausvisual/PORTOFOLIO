'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Clients() {
  const { language } = useLanguage();
  // Daftar lengkap riwayat kolaborasi
  const clients = [
    { name: 'PT. Sinergi Citra Karya', img: '/images/client/SCK.webp' },
    { name: 'PT. AFA Tombuku Pratama', img: '/images/client/AFA.webp' },
    { name: 'PT. Laboratorindo Alam Bestari', img: '/images/client/LAB.webp', url: 'https://www.ptlab.co.id/' },
    { name: 'PT. VALE Indonesia Tbk.', img: '/images/client/VALE.webp', url: 'https://vale.com/in/indonesia' },
    { name: 'PT. PAM Mineral Tbk.', img: '/images/client/PAM.webp', url: 'https://pammineral.co.id/' },
    { name: 'PT. Merdeka Tsingshan Indonesia', img: '/images/client/MTI.webp', url: 'https://merdekacoppergold.com/' },
    { name: 'PT. Mitra Sulawesi Bersama', img: '/images/client/MSB.webp' },
    { name: 'PT. Ang & Fang Brother', img: '/images/client/AFB.webp' },
    { name: 'PT. Anindya Wiraputra Konsult', img: '/images/client/ANINDYA.webp', url: 'https://web.anindya.biz/' },
    { name: 'Indonesia Morowali Industrial Park', img: '/images/client/IMIP.webp', url: 'https://imip.co.id/' },
    { name: 'Indonesia Huabao Industrial Park', img: '/images/client/IHIP.webp', url: 'https://www.huabao-industrialpark.com' },
    { name: 'International Green Industrial Park', img: '/images/client/IGP.webp' },
    { name: 'PT. Alaska Dwipa Perdana', img: '/images/client/ADP.webp' },
    { name: 'PT. Farmel Cipta Mandiri', img: '/images/client/FCM.webp', url: 'https://farmel.co.id/' },
    { name: 'PT. Metal Smeltindo Selaras', img: '/images/client/MSS.webp', url: 'http://idnmss.com/id/col.jsp?id=110' },
    { name: 'PT. Khubsurat Meherban Ilahi', img: '/images/client/KHUBSURAT.webp' },
    { name: 'Kabupaten Bulukumba', img: '/images/client/BLK.webp', url: 'https://bulukumbakab.go.id/' },
    { name: 'Kabupaten Morowali', img: '/images/client/MRW.webp', url: 'https://morowalikab.go.id/' },
    { name: 'Kabupaten Luwu', img: '/images/client/LUWU.webp', url: 'https://luwukab.go.id/' },
    { name: 'BPPW SULSEL', img: '/images/client/PU.webp', url: 'https://ciptakarya.pu.go.id/bppw-detail?satker=505940' },
    { name: 'Disperkimtan Bulukumba', img: '/images/client/PER.webp' },
    { name: 'Benuanta Group', img: '/images/client/BG.webp' },
    { name: 'PT. Pandit Eka Nusa Agrata', img: '/images/client/PND.webp', url: 'https://panditekanusa.com/' },
    { name: 'PT. Ruang Meja Kerja', img: '/images/client/RMK.webp' },
    { name: 'GEOPLAN Spatial', img: '/images/client/GPS.webp' },
    { name: 'PT. Arya Graha Putratama', img: '/images/client/AGP.webp' },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      position: "Manager, PT. Sinergi Citra Karya",
      textId: "Hasil pemetaan drone sangat akurat dan diselesaikan tepat waktu. Sangat membantu dalam perencanaan proyek kami.",
      textEn: "The drone mapping results were highly accurate and delivered on time. It greatly helped in our project planning."
    },
    {
      name: "Andi Wijaya",
      position: "Direktur, Benuanta Group",
      textId: "Analisis spasial yang diberikan memberikan wawasan baru bagi pengembangan kawasan. Profesional dan sangat direkomendasikan.",
      textEn: "The spatial analysis provided gave new insights for regional development. Professional and highly recommended."
    },
    {
      name: "Siti Rahmawati",
      position: "Kepala Proyek, PT. Anindya Wiraputra Konsult",
      textId: "Data dan visualisasi GIS yang disajikan sangat mudah dipahami dan membantu pengambilan keputusan yang lebih cepat.",
      textEn: "The GIS data and visualization provided are very easy to understand and facilitate faster decision-making."
    },
    {
      name: "Hendra Gunawan",
      position: "Senior Surveyor, PT. VALE Indonesia Tbk.",
      textId: "Kerja sama yang luar biasa. Pengambilan sampel air dan udara dilakukan dengan standar presisi tinggi dan sangat teliti.",
      textEn: "Outstanding collaboration. The water and air sampling was conducted with high precision standards and meticulous care."
    },
    {
      name: "Arif Rahman",
      position: "Project Manager, PT. Merdeka Tsingshan Indonesia",
      textId: "Hasil pemetaan topografi dan analisis kebisingan yang diberikan sangat detail, memudahkan langkah kami selanjutnya di lapangan.",
      textEn: "The detailed topographic mapping and noise analysis provided made our next steps in the field much easier."
    },
    {
      name: "Lestari Putri",
      position: "Koordinator Lingkungan, IMIP",
      textId: "Kualitas survey udara yang dikerjakan sangat memuaskan. Responsif terhadap revisi dan komunikatif selama proyek berlangsung.",
      textEn: "The quality of the air survey was very satisfying. Highly responsive to revisions and communicative throughout the project."
    },
    {
      name: "Fajar Hidayat",
      position: "Perencana Wilayah, Dinas Perkimtan",
      textId: "Data pemetaan kawasan kumuh yang dihasilkan sangat komprehensif, menjadi dasar utama kebijakan tata ruang kami tahun ini.",
      textEn: "The slum area mapping data produced is highly comprehensive, serving as the main foundation for our spatial planning policy this year."
    },
    {
      name: "Reza",
      position: "Direktur Operasional, PT. PAM Mineral Tbk.",
      textId: "Tim survei sangat profesional menghadapi medan yang berat. Hasil orthophoto sangat jernih dan sesuai dengan standar yang kami minta.",
      textEn: "The survey team was highly professional in dealing with difficult terrain. The orthophoto results are very clear and meet our requested standards."
    },
    {
      name: "Diana Kusumawati",
      position: "Kepala Desa, Pemerintah Desa Bira",
      textId: "Pendampingan tim dalam penyusunan profil desa sangat membantu warga. Pendekatannya ramah dan hasil pemetaannya mudah dimengerti masyarakat.",
      textEn: "The team's assistance in compiling the village profile really helped the residents. The approach was friendly and the mapping results were easy for the community to understand."
    },
    {
      name: "Rizky Firmansyah",
      position: "Consultant, GEOPLAN Spatial",
      textId: "Mitra andalan untuk urusan Web GIS. Sistem yang dibangun berjalan lancar, ringan, dan sangat user-friendly.",
      textEn: "A reliable partner for Web GIS matters. The built system runs smoothly, is lightweight, and very user-friendly."
    }
  ];

  const scrollRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(350);
  const [itemGap, setItemGap] = useState(32);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    
    const handleScroll = () => {
      if (el) {
        setScrollX(el.scrollLeft);
        
        // Infinite scroll logic
        const totalOriginal = testimonials.length;
        if (el.children.length > 0) {
          const itemW = el.children[0].offsetWidth;
          const gapStr = window.getComputedStyle(el).gap;
          const gap = gapStr !== 'normal' ? parseFloat(gapStr) : 32;
          const setWidth = totalOriginal * (itemW + gap);
          
          // Teleport back to middle set silently when reaching edges
          if (el.scrollLeft <= 1) {
            el.scrollLeft = setWidth;
          } else if (el.scrollLeft >= setWidth * 2 - 1) {
            el.scrollLeft = el.scrollLeft - setWidth;
          }
        }
      }
    };
    
    const updateDimensions = () => {
      if (el) {
        setContainerWidth(el.offsetWidth);
        if (el.children.length > 0) {
          const child = el.children[0];
          setItemWidth(child.offsetWidth);
          // Get gap from computed style
          let currentGap = 32;
          const gapStr = window.getComputedStyle(el).gap;
          if (gapStr && gapStr !== 'normal') {
            currentGap = parseFloat(gapStr);
            setItemGap(currentGap);
          }
          
          // Initialize scroll position to the middle set
          if (!el.dataset.initialized) {
            const setWidth = testimonials.length * (child.offsetWidth + currentGap);
            el.scrollLeft = setWidth;
            el.dataset.initialized = "true";
          }
        }
      }
    };

    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      
      // Request animation frame for initial render positioning
      requestAnimationFrame(() => {
        handleScroll();
        if (el.dataset.initialized !== "true") {
           updateDimensions();
        }
      });
      
      return () => {
        el.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, [testimonials.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="clients" className="projects-section-k3">
      <h2 className="section-title-new" data-aos="fade-up">
        <i className="bx bx-buildings" style={{ marginRight: '8px' }}></i>
        {language === 'en' ? 'TRUSTED ' : 'MITRA '}
        <span>{language === 'en' ? 'PARTNERS' : 'TERPERCAYA'}</span>
      </h2>
      <p className="section-desc-new" data-aos="fade-up" data-aos-delay="100">
        {language === 'en' ? 'Companies and agencies we have worked with' : 'Perusahaan dan instansi yang telah bekerja sama'}
      </p>

      <div className="clients-grid-container">
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index} data-aos="zoom-in" data-aos-delay={(index % 4) * 50}>
              {client.url ? (
                <a href={client.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}>
                  <Image src={client.img} alt={client.name} width={150} height={150} />
                  <p>{client.name}</p>
                </a>
              ) : (
                <>
                  <Image src={client.img} alt={client.name} width={150} height={150} />
                  <p>{client.name}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="testimonials-section" style={{ marginTop: '3rem' }}>
        <h2 className="section-title-new" data-aos="fade-up">
          <i className="bx bx-chat" style={{ marginRight: '8px' }}></i>
          {language === 'en' ? 'CLIENT ' : 'TESTIMONI '}
          <span>{language === 'en' ? 'TESTIMONIALS' : 'KLIEN'}</span>
        </h2>
        <p className="section-desc-new" data-aos="fade-up" data-aos-delay="100">
          {language === 'en' ? 'What they say about our services' : 'Apa yang mereka katakan tentang layanan kami'}
        </p>

        <div 
          className="testimonials-grid" 
          data-aos="fade-up" 
          data-aos-delay="200"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            paddingTop: '100px',
            paddingBottom: '20px',
            marginBottom: '-60px',
            overflowY: 'hidden'
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testi, i) => {
            const cardCenter = (i * (itemWidth + itemGap)) + (itemWidth / 2);
            const viewCenter = scrollX + (containerWidth / 2);
            const distanceFromCenter = cardCenter - viewCenter;
            
            let normalizedDist = 0;
            if (containerWidth > 0) {
              normalizedDist = distanceFromCenter / (containerWidth * 0.7);
            }
            
            // Limit normalized distance so the curve doesn't go off screen
            const limitedDist = Math.max(-1.5, Math.min(1.5, normalizedDist));
            
            // Center cards shift UP (negative translateY), edge cards stay at 0 or shift down slightly.
            const maxShift = 80; 
            const translateY = - (1 - Math.pow(limitedDist, 2)) * maxShift;
            
            // Rotate slightly for coverflow effect
            const rotateZ = limitedDist * 8; // -8deg to +8deg
            
            return (
              <div 
                className="testimonial-card" 
                key={i}
                style={{
                  transform: `translateY(${translateY}px) rotateZ(${rotateZ}deg) scale(${1 - Math.abs(limitedDist) * 0.1})`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              >
                <div className="testi-header">
                  <div className="testi-avatar">
                    <i className='bx bxs-quote-alt-left'></i>
                  </div>
                  <div className="testi-info">
                    <h4>{testi.name}</h4>
                  </div>
                </div>
                <p className="testi-text">
                  "{language === 'en' ? testi.textEn : testi.textId}"
                </p>
                <div className="testi-rating">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}