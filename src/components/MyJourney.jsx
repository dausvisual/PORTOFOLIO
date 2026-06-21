'use client';
import { useState } from 'react';
import JourneyMap from './JourneyMap';

export default function MyJourney() {
  const [showAllTimeline, setShowAllTimeline] = useState(false);
  return (
    <section className="journey-section" id="myjourney">

      {/* HEADER SECTION */}
      <div className="journey-header-wrapper" data-aos="fade-down">
        <div className="journey-header-icon">
          <i className='bx bx-map-alt'></i>
        </div>
        <div className="journey-header-text">
          <h2 className="heading journey-heading" style={{ marginBottom: '0.5rem' }}>My Journey</h2>
          <p className="journey-subtitle">Perjalanan Profesional & Pengembangan Diri</p>
          <p className="journey-desc-sub">Perjalanan panjang yang membentuk saya menjadi profesional di bidang GIS, Survey, Drone Mapping, Perencanaan Wilayah, dan Konsultan Lingkungan.</p>
        </div>
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
              <span className="phase">Awal Perjalanan</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>Memulai Perjalanan Profesional</h3>
                <p>Memulai karier sebagai freelance graphic designer, editor, fotografer, videografer, dan social media manager.</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-camera'></i></div>
            </div>
          </div>

          {/* 2020-2024 */}
          <div className="timeline-item-v timeline-card-wrapper">
            <div className="timeline-dot-v" style={{ borderColor: '#3b82f6' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#3b82f6' }}>2020 - 2024</span>
              <span className="phase">Pendidikan</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>S1 Teknik Perencanaan Wilayah dan Kota</h3>
                <p>Menempuh pendidikan di Universitas Muhammadiyah Bulukumba dan lulus dengan IPK 3,69.</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bxs-graduation'></i></div>
            </div>
          </div>

          {/* 2021-2022 */}
          <div className="timeline-item-v timeline-card-wrapper">
            <div className="timeline-dot-v" style={{ borderColor: '#8b5cf6' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#8b5cf6' }}>2021 - 2022</span>
              <span className="phase">Pengembangan Diri</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>Mengenal Dunia GIS & Drone Mapping</h3>
                <p>Mengikuti pelatihan ArcGIS dan Pemetaan Menggunakan Drone Tingkat Dasar bersama Indonesia Mapping Community.</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-paper-plane'></i></div>
            </div>
          </div>

          {/* 2022 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#00e5ff' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#00e5ff' }}>2022</span>
              <span className="phase">Awal Karier</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>Terjun ke Dunia Survei & Konsultansi</h3>
                <p>Terlibat dalam survei Andalalin Gedung Satu Atap Kabupaten Bulukumba.</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-trip'></i></div>
            </div>
          </div>

          {/* 2023 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#f59e0b' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#f59e0b' }}>2023</span>
              <span className="phase">Proyek Strategis</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>Proyek Pemetaan & RDTR di Papua</h3>
                <p>Terlibat dalam berbagai proyek RDTR, Masterplan Jalan, dan Kajian Risiko Bencana di Papua serta pemetaan desa di Kabupaten Bulukumba.</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-map-alt'></i></div>
            </div>
          </div>

          {/* 2024 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#3b82f6' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#3b82f6' }}>2024</span>
              <span className="phase">Infrastruktur</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>Mendukung Program Infrastruktur Nasional</h3>
                <p>Berpartisipasi dalam Program Inpres ALD Tahap I-II bersama BPPW Provinsi Sulawesi Selatan.</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-buildings'></i></div>
            </div>
          </div>

          {/* 2025 - Sekarang */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#84cc16' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#84cc16' }}>2025 - Sekarang</span>
              <span className="phase">Profesional</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>Survey Leader & Konsultan Lingkungan</h3>
                <p>Ketua Tim Survei pengambilan sampel air dan udara di berbagai perusahaan industri & pertambangan serta penyusunan dokumen lingkungan (UKL-UPL).</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-user-pin'></i></div>
            </div>
          </div>

          {/* 2021-2026 */}
          <div className={`timeline-item-v timeline-card-wrapper ${!showAllTimeline ? 'hide-on-mobile' : ''}`}>
            <div className="timeline-dot-v" style={{ borderColor: '#a855f7' }}></div>
            <div className="timeline-date-side">
              <span className="year" style={{ color: '#a855f7' }}>2021 - 2026</span>
              <span className="phase">Pengembangan Kompetensi</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-content">
                <h3>Komitmen Belajar & Sertifikasi</h3>
                <p>Mengikuti berbagai pelatihan dan sertifikasi untuk terus meningkatkan kompetensi di bidang GIS, Drone, dan Lingkungan.</p>
              </div>
              <div className="timeline-card-icon"><i className='bx bx-medal'></i></div>
            </div>
          </div>

          <div className="timeline-see-more">
            <button className="btn btn-outline-glow" onClick={() => setShowAllTimeline(!showAllTimeline)}>
              {showAllTimeline ? 'Sembunyikan' : 'Lihat Selengkapnya'} <i className={`bx ${showAllTimeline ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
            </button>
          </div>

        </div>

        {/* KOLOM KANAN: STATISTIK & QUOTE */}
        <div className="journey-right-col" data-aos="fade-left">

          {/* Box Profesional */}
          <div className="stats-vertical-box">
            <div className="stats-vertical-header">
              <h3>Perjalanan Profesional</h3>
              <p>Setiap langkah, pengalaman, dan pembelajaran membentuk saya menjadi profesional yang berfokus pada solusi berbasis data spasial untuk pembangunan berkelanjutan.</p>
            </div>

            <div className="stats-vertical-list">
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#a855f7', borderColor: '#a855f7' }}><i className='bx bx-briefcase-alt-2'></i></div>
                <div className="stat-v-text">
                  <h4>30+ Proyek</h4>
                  <p>Berbagai proyek pemetaan, perencanaan, dan lingkungan.</p>
                </div>
              </div>
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#3b82f6', borderColor: '#3b82f6' }}><i className='bx bx-group'></i></div>
                <div className="stat-v-text">
                  <h4>50+ Klien</h4>
                  <p>Kepercayaan dari perusahaan, instansi pemerintah & swasta.</p>
                </div>
              </div>
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#00e5ff', borderColor: '#00e5ff' }}><i className='bx bx-world'></i></div>
                <div className="stat-v-text">
                  <h4>50.000+ Ha</h4>
                  <p>Luas area survei & pemetaan yang telah dikerjakan.</p>
                </div>
              </div>
              <div className="stat-v-item">
                <div className="stat-v-icon" style={{ color: '#10b981', borderColor: '#10b981' }}><i className='bx bx-medal'></i></div>
                <div className="stat-v-text">
                  <h4>8 Pelatihan & Sertifikasi</h4>
                  <p>Sertifikasi resmi di bidang survey, drone, GIS & lingkungan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Box */}
          <div className="quote-vertical-box">
            <i className='bx bxs-quote-alt-left quote-icon'></i>
            <p className="quote-text">Dari kreativitas visual hingga teknologi spasial, saya berkomitmen memberikan solusi terbaik melalui data, inovasi, dan kerja lapangan yang presisi.</p>
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