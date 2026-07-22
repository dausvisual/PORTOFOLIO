'use client';
import { useState } from 'react';
import JourneyMap from './JourneyMap';
import { useLanguage } from '../context/LanguageContext';

export default function MyJourney() {
  const [showAllTimeline, setShowAllTimeline] = useState(false);
  const { language } = useLanguage();
  return (
    <section className="journey-section" id="myjourney">

      {/* HEADER SECTION */}
      <div className="section-header-spacing" data-aos="fade-down">
        <h2 className="section-title-new" data-aos="fade-up">
          <i className="bx bx-map-alt" style={{ marginRight: '8px' }}></i>
          {language === 'en' ? 'MY ' : 'PERJALANAN '}
          <span>{language === 'en' ? 'JOURNEY' : 'SAYA'}</span>
        </h2>
        <p className="section-desc-new" data-aos="fade-up" data-aos-delay="100">
          {language === 'en' ? 'Professional Journey & Self Development' : 'Perjalanan Profesional & Pengembangan Diri'}
        </p>
      </div>

      {/* GRID CONTAINER 2 KOLOM */}
      <div className="journey-content-container new-layout">

        {/* KOLOM KIRI: TIMELINE */}
        <div className="timeline-vertical new-timeline" data-aos="fade-right">

          {/* 2020 */}
          <div className="timeline-item-v timeline-card-wrapper">
            <div className="timeline-dot-v" style={{ borderColor: '#10b981' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#10b981' }}>2020</span>
              <span className="phase">{language === 'en' ? 'Beginning' : 'Awal Perjalanan'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Started Professional Journey' : 'Memulai Perjalanan Profesional'}</h3>
                <p>{language === 'en' ? 'Started career as a freelance graphic designer, editor, photographer, videographer, and social media manager.' : 'Memulai karier sebagai freelance graphic designer, editor, fotografer, videografer, dan social media manager.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-camera'></i></div>
            </div>
          </div>

          {/* 2020-2024 */}
          <div className="timeline-item-v timeline-card-wrapper">
            <div className="timeline-dot-v" style={{ borderColor: '#3b82f6' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#3b82f6' }}>2020 - 2024</span>
              <span className="phase">{language === 'en' ? 'Education' : 'Pendidikan'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Bachelor of Urban and Regional Planning' : 'S1 Teknik Perencanaan Wilayah dan Kota'}</h3>
                <p>{language === 'en' ? 'Studied at Muhammadiyah University of Bulukumba and graduated with a 3.69 GPA.' : 'Menempuh pendidikan di Universitas Muhammadiyah Bulukumba dan lulus dengan IPK 3,69.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bxs-graduation'></i></div>
            </div>
          </div>

          {/* 2021-2022 */}
          <div className="timeline-item-v timeline-card-wrapper">
            <div className="timeline-dot-v" style={{ borderColor: '#8b5cf6' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#8b5cf6' }}>2021 - 2022</span>
              <span className="phase">{language === 'en' ? 'Self Development' : 'Pengembangan Diri'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Getting to Know GIS & Drone Mapping' : 'Mengenal Dunia GIS & Drone Mapping'}</h3>
                <p>{language === 'en' ? 'Attended ArcGIS and Basic Drone Mapping training with Indonesia Mapping Community.' : 'Mengikuti pelatihan ArcGIS dan Pemetaan Menggunakan Drone Tingkat Dasar bersama Indonesia Mapping Community.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-paper-plane'></i></div>
            </div>
          </div>

          {/* 2022 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#00e5ff' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#00e5ff' }}>2022</span>
              <span className="phase">{language === 'en' ? 'Early Career' : 'Awal Karier'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Entering Survey & Consulting' : 'Terjun ke Dunia Survei & Konsultansi'}</h3>
                <p>{language === 'en' ? 'Involved in Traffic Impact Analysis (Andalalin) survey for One-Stop Building in Bulukumba Regency.' : 'Terlibat dalam survei Andalalin Gedung Satu Atap Kabupaten Bulukumba.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-trip'></i></div>
            </div>
          </div>

          {/* 2023 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#f59e0b' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#f59e0b' }}>2023</span>
              <span className="phase">{language === 'en' ? 'Strategic Projects' : 'Proyek Strategis'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Mapping & RDTR Projects in Papua' : 'Proyek Pemetaan & RDTR di Papua'}</h3>
                <p>{language === 'en' ? 'Involved in various RDTR, Road Masterplan, and Disaster Risk Assessment projects in Papua, as well as village mapping in Bulukumba Regency.' : 'Terlibat dalam berbagai proyek RDTR, Masterplan Jalan, dan Kajian Risiko Bencana di Papua serta pemetaan desa di Kabupaten Bulukumba.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-map-alt'></i></div>
            </div>
          </div>

          {/* 2024 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#3b82f6' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#3b82f6' }}>2024</span>
              <span className="phase">{language === 'en' ? 'Infrastructure' : 'Infrastruktur'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Supporting National Infrastructure' : 'Mendukung Program Infrastruktur Nasional'}</h3>
                <p>{language === 'en' ? 'Participated in the Phase I-II ALD Inpres Program with BPPW South Sulawesi Province.' : 'Berpartisipasi dalam Program Inpres ALD Tahap I-II bersama BPPW Provinsi Sulawesi Selatan.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-buildings'></i></div>
            </div>
          </div>

          {/* 2025 - Sekarang */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#84cc16' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#84cc16' }}>2025 - Sekarang</span>
              <span className="phase">{language === 'en' ? 'Professional' : 'Profesional'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Survey Leader & Environmental Consultant' : 'Survey Leader & Konsultan Lingkungan'}</h3>
                <p>{language === 'en' ? 'Survey Team Leader for water and air sampling in various industrial & mining companies, and preparation of environmental documents.' : 'Ketua Tim Survei pengambilan sampel air dan udara di berbagai perusahaan industri & pertambangan serta penyusunan dokumen lingkungan.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-user-pin'></i></div>
            </div>
          </div>

          {/* 2021-2026 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#a855f7' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#a855f7' }}>2021 - 2026</span>
              <span className="phase">{language === 'en' ? 'Competency Development' : 'Pengembangan Kompetensi'}</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>{language === 'en' ? 'Commitment to Learning & Certifications' : 'Komitmen Belajar & Sertifikasi'}</h3>
                <p>{language === 'en' ? 'Participated in various trainings and certifications to continually improve competencies in GIS, Drones, and the Environment.' : 'Mengikuti berbagai pelatihan dan sertifikasi untuk terus meningkatkan kompetensi di bidang GIS, Drone, dan Lingkungan.'}</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-medal'></i></div>
            </div>
          </div>

          <div className="timeline-see-more">
            <button className="btn btn-outline-glow" onClick={() => setShowAllTimeline(!showAllTimeline)}>
              {showAllTimeline ? (language === 'en' ? 'Show Less' : 'Sembunyikan') : (language === 'en' ? 'See More' : 'Lihat Selengkapnya')} <i className={`bx ${showAllTimeline ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </button>
          </div>

        </div>

        {/* KOLOM KANAN: STATISTIK & QUOTE */}
        <div className={`journey-right-col ${!showAllTimeline ? 'hide-on-mobile' : ''}`} data-aos="fade-left">

          {/* Box Profesional */}
          <div className="stats-vertical-box">
            <div className="stats-vertical-header">
              <h3>{language === 'en' ? 'Professional Journey' : 'Perjalanan Profesional'}</h3>
              <p>{language === 'en' ? 'Every step, experience, and learning shapes me into a professional focused on spatial data-based solutions for sustainable development.' : 'Setiap langkah, pengalaman, dan pembelajaran membentuk saya menjadi profesional yang berfokus pada solusi berbasis data spasial untuk pembangunan berkelanjutan.'}</p>
            </div>

            <div className="stats-vertical-list">
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#a855f7', borderColor: '#a855f7' }}><i className='bx bx-briefcase-alt-2'></i></div>
                <div className="stat-v-text">
                  <h4>{language === 'en' ? '30+ Projects' : '50+ Proyek'}</h4>
                  <p>{language === 'en' ? 'Various mapping, planning, and environmental projects.' : 'Berbagai proyek pemetaan, perencanaan, dan lingkungan.'}</p>
                </div>
              </div>
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#3b82f6', borderColor: '#3b82f6' }}><i className='bx bx-group'></i></div>
                <div className="stat-v-text">
                  <h4>{language === 'en' ? '50+ Clients' : '50+ Klien'}</h4>
                  <p>{language === 'en' ? 'Trusted by companies, government and private agencies.' : 'Kepercayaan dari perusahaan, instansi pemerintah & swasta.'}</p>
                </div>
              </div>
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#00e5ff', borderColor: '#00e5ff' }}><i className='bx bx-world'></i></div>
                <div className="stat-v-text">
                  <h4>50.000+ Ha</h4>
                  <p>{language === 'en' ? 'Total area of surveying & mapping completed.' : 'Luas area survei & pemetaan yang telah dikerjakan.'}</p>
                </div>
              </div>
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#10b981', borderColor: '#10b981' }}><i className='bx bx-medal'></i></div>
                <div className="stat-v-text">
                  <h4>{language === 'en' ? '8 Training & Certifications' : '8 Pelatihan & Sertifikasi'}</h4>
                  <p>{language === 'en' ? 'Official certifications in survey, drone, GIS & environment.' : 'Sertifikasi resmi di bidang survey, drone, GIS & lingkungan.'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Box */}
          <div className="quote-vertical-box">
            <i className='bx bxs-quote-alt-left quote-icon'></i>
            <p className="quote-text">{language === 'en' ? 'From visual creativity to spatial technology, I am committed to providing the best solutions through data, innovation, and precise fieldwork.' : 'Dari kreativitas visual hingga teknologi spasial, saya berkomitmen memberikan solusi terbaik melalui data, inovasi, dan kerja lapangan yang presisi.'}</p>
            <p className="quote-author">— Firdaus Ikram, S.PWK</p>
          </div>

        </div>

      </div>

      {/* PETA DI BAWAH TIMELINE */}
      <div className="journey-map-full" data-aos="fade-up">
        <JourneyMap />
      </div>

      <div id="particles-js-education" className="particles-k3"></div>
    </section>
  );
}